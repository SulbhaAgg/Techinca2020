from django.shortcuts import render

# Create your views here.

from django.http import HttpResponse
from django.shortcuts import get_object_or_404

from rest_framework import status, viewsets

from simplystart.models import Organization, Tag, OrganizationTag, OrganizationContribution, UserContribution
from simplystart.serializers import OrganizationSerializer, TagSerializer, OrganizationTagSerializer, OrganizationContributionSerializer, UserContributionSerializer, UserSerializer

from django.contrib.auth.models import User

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class OrganizationViewSet(viewsets.ModelViewSet):
    queryset = Organization.objects.all().order_by('name')
    serializer_class = OrganizationSerializer

class TagViewSet(viewsets.ModelViewSet):
    queryset = Tag.objects.all().order_by('tag')
    serializer_class = TagSerializer

class OrganizationTagViewSet(viewsets.ModelViewSet):
    queryset = OrganizationTag.objects.all()
    serializer_class = OrganizationTagSerializer

class OrganizationContributionViewSet(viewsets.ModelViewSet):
    queryset = OrganizationContribution.objects.all()
    serializer_class = OrganizationContributionSerializer

class UserContributionViewSet(viewsets.ModelViewSet):
    queryset = UserContribution.objects.all()
    serializer_class = UserContributionSerializer

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)