from rest_framework import serializers
from .models import Season, Car, Project, GalleryImage, Sponsor, TeamMember, ContactMessage


class SeasonSerializer(serializers.ModelSerializer):
    class Meta:
        model = Season
        fields = '__all__'


class CarListSerializer(serializers.ModelSerializer):
    season_number = serializers.IntegerField(source='season.number', read_only=True)
    season_year = serializers.SerializerMethodField()

    class Meta:
        model = Car
        fields = ['id', 'name', 'season_number', 'season_year', 'engine_type', 'status', 'image', 'highlights']

    def get_season_year(self, obj):
        return f"{obj.season.year_start}-{obj.season.year_end}"


class CarDetailSerializer(serializers.ModelSerializer):
    season = SeasonSerializer(read_only=True)

    class Meta:
        model = Car
        fields = '__all__'


class ProjectListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = ['id', 'title', 'slug', 'category', 'subtitle', 'icon_emoji', 'image', 'is_featured']


class ProjectDetailSerializer(serializers.ModelSerializer):
    season = SeasonSerializer(read_only=True)

    class Meta:
        model = Project
        fields = '__all__'


class GalleryImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = GalleryImage
        fields = ['id', 'title', 'image', 'category', 'description', 'is_featured', 'created_at']


class SponsorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sponsor
        fields = ['id', 'name', 'tier', 'logo', 'website', 'description']


class TeamMemberSerializer(serializers.ModelSerializer):
    role_display = serializers.CharField(source='get_role_display', read_only=True)

    class Meta:
        model = TeamMember
        fields = ['id', 'name', 'role', 'role_display', 'title', 'photo', 'bio', 'year', 'is_alumni']


class ContactMessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactMessage
        fields = ['id', 'name', 'email', 'subject', 'message', 'created_at']
        read_only_fields = ['id', 'created_at']
