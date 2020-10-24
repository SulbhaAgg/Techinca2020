from django.contrib import admin
import simplystart.models as cf

# Register your models here.
admin.site.register(cf.Organization)
admin.site.register(cf.OrganizationContribution)
admin.site.register(cf.OrganizationTag)
admin.site.register(cf.Tag)
admin.site.register(cf.UserContribution)