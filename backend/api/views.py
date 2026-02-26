from rest_framework import viewsets, permissions, status
from rest_framework.response import Response
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.filters import SearchFilter, OrderingFilter

from .models import Season, Car, Project, GalleryImage, Sponsor, TeamMember, ContactMessage
from .serializers import (
    SeasonSerializer,
    CarListSerializer,
    CarDetailSerializer,
    ProjectListSerializer,
    ProjectDetailSerializer,
    GalleryImageSerializer,
    SponsorSerializer,
    TeamMemberSerializer,
    ContactMessageSerializer,
)


class SeasonViewSet(viewsets.ReadOnlyModelViewSet):
    """API endpoint for viewing seasons."""
    queryset = Season.objects.all()
    serializer_class = SeasonSerializer
    filterset_fields = ['is_active']


class CarViewSet(viewsets.ReadOnlyModelViewSet):
    """API endpoint for viewing cars."""
    queryset = Car.objects.select_related('season').all()
    filterset_fields = ['engine_type', 'status']
    search_fields = ['name', 'description']

    def get_serializer_class(self):
        if self.action == 'retrieve':
            return CarDetailSerializer
        return CarListSerializer


class ProjectViewSet(viewsets.ReadOnlyModelViewSet):
    """API endpoint for viewing engineering projects."""
    queryset = Project.objects.select_related('season').all()
    filterset_fields = ['category', 'is_featured']
    search_fields = ['title', 'description']
    lookup_field = 'slug'

    def get_serializer_class(self):
        if self.action == 'retrieve':
            return ProjectDetailSerializer
        return ProjectListSerializer


class GalleryImageViewSet(viewsets.ReadOnlyModelViewSet):
    """API endpoint for viewing gallery images."""
    queryset = GalleryImage.objects.all()
    serializer_class = GalleryImageSerializer
    filterset_fields = ['category', 'is_featured']
    search_fields = ['title', 'description']


class SponsorViewSet(viewsets.ReadOnlyModelViewSet):
    """API endpoint for viewing sponsors."""
    queryset = Sponsor.objects.filter(is_active=True)
    serializer_class = SponsorSerializer
    filterset_fields = ['tier']


class TeamMemberViewSet(viewsets.ReadOnlyModelViewSet):
    """API endpoint for viewing team members."""
    queryset = TeamMember.objects.all()
    serializer_class = TeamMemberSerializer
    filterset_fields = ['role', 'is_alumni']
    search_fields = ['name', 'title']


class ContactMessageViewSet(viewsets.GenericViewSet):
    """API endpoint for submitting contact messages (POST only)."""
    serializer_class = ContactMessageSerializer
    permission_classes = [permissions.AllowAny]

    def create(self, request):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(
            {"message": "Thank you! Your message has been sent."},
            status=status.HTTP_201_CREATED,
        )
