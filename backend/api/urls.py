from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views

router = DefaultRouter()
router.register(r'seasons', views.SeasonViewSet)
router.register(r'cars', views.CarViewSet)
router.register(r'projects', views.ProjectViewSet)
router.register(r'gallery', views.GalleryImageViewSet)
router.register(r'sponsors', views.SponsorViewSet)
router.register(r'team-members', views.TeamMemberViewSet)
router.register(r'contact', views.ContactMessageViewSet, basename='contact')

urlpatterns = [
    path('', include(router.urls)),
]
