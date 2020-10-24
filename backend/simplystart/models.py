from django.db import models
from django.contrib.auth.models import User

import datetime

def years():
    return [(r,r) for r in range(1984, datetime.date.today().year+1)]

def current_year():
    return datetime.date.today().year

class Organization(models.Model):
    name = models.CharField(max_length=100)
    founded = models.IntegerField(choices=years(), default=current_year())
    employees_count = models.IntegerField(default=0)
    logo_filename = models.FileField(max_length=100,upload_to='org_logos/', blank=True)
    address1 = models.CharField(max_length=50, blank=True)
    city = models.CharField(max_length=50, blank=True)
    state = models.CharField(max_length=50, blank=True)
    zipcode = models.DecimalField(max_digits=5, decimal_places=0, default=45220)
    email = models.EmailField(blank=True)
    URL = models.URLField(blank=True)

    def __str__(self):
        return "{} ({}), Located in {},{}".format(self.name, self.founded,self.city, self.state)

class Tag(models.Model):
    tag = models.CharField(max_length=100)

class OrganizationTag(models.Model):
    org = models.ForeignKey(Organization, on_delete=models.CASCADE)
    tag = models.ForeignKey(Tag, on_delete=models.CASCADE)

class OrganizationContribution(models.Model):
    org = models.ForeignKey(Organization, on_delete=models.CASCADE)
    fund_desc = models.TextField(max_length=500)
    fund_required = models.DecimalField(max_digits=8, decimal_places=2, default=0)
    fund_raised = models.DecimalField(max_digits=8, decimal_places=2, default=0)

class UserContribution(models.Model):
    org_event = models.ForeignKey(OrganizationContribution, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    amount_contributed = models.DecimalField(max_digits=8, decimal_places=2, default=0)
    comment = models.TextField(max_length=500)