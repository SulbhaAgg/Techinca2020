from rest_framework import serializers as sz
from simplystart.models import Organization, Tag, OrganizationTag, OrganizationContribution, UserContribution

from django.contrib.auth.models import User

class UserSerializer(sz.ModelSerializer):
    class Meta:
        model = User
        fields = ['first_name', 'last_name', 'username', 'email']

class OrganizationSerializer(sz.ModelSerializer):
    class Meta:
        model = Organization
        fields = '__all__'

class TagSerializer(sz.ModelSerializer):
    class Meta:
        model = Tag
        fields = '__all__'

class OrganizationTagSerializer(sz.ModelSerializer):
    class Meta:
        model = OrganizationTag
        fields = '__all__'

class OrganizationContributionSerializer(sz.ModelSerializer):
    class Meta:
        model = OrganizationContribution
        fields = '__all__'

class UserContributionSerializer(sz.ModelSerializer):

    user = sz.ReadOnlyField(source='user.username')

    class Meta:
        model = UserContribution
        fields = '__all__'
