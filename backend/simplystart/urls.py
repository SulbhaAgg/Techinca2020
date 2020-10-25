from django.conf.urls import url
from simplystart import views

from django.urls import include, path

from rest_framework import routers
from simplystart import views

router = routers.DefaultRouter()
router.register(r'organizations',views.OrganizationViewSet)
router.register(r'tags',views.TagViewSet)
router.register(r'organizationtags', views.OrganizationTagViewSet)
router.register(r'organizationcontributions', views.OrganizationContributionViewSet)
router.register(r'usercontributions', views.UserContributionViewSet)
router.register(r'users', views.UserViewSet)

urlpatterns = [
    path('', include('djoser.urls')),
    path('', include('djoser.urls.authtoken')),
    path('', include(router.urls)),
]