from django.contrib import admin
from .models import Season, Car, Project, GalleryImage, Sponsor, TeamMember, ContactMessage


@admin.register(Season)
class SeasonAdmin(admin.ModelAdmin):
    list_display = ['number', 'name', 'year_start', 'year_end', 'is_active']
    list_filter = ['is_active']
    list_editable = ['is_active']


@admin.register(Car)
class CarAdmin(admin.ModelAdmin):
    list_display = ['name', 'season', 'engine_type', 'status']
    list_filter = ['engine_type', 'status']


@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ['title', 'category', 'is_featured', 'order']
    list_filter = ['category', 'is_featured']
    list_editable = ['order', 'is_featured']
    prepopulated_fields = {'slug': ('title',)}


@admin.register(GalleryImage)
class GalleryImageAdmin(admin.ModelAdmin):
    list_display = ['title', 'category', 'is_featured', 'created_at']
    list_filter = ['category', 'is_featured']
    list_editable = ['is_featured']


@admin.register(Sponsor)
class SponsorAdmin(admin.ModelAdmin):
    list_display = ['name', 'tier', 'is_active', 'order']
    list_filter = ['tier', 'is_active']
    list_editable = ['order', 'is_active']


@admin.register(TeamMember)
class TeamMemberAdmin(admin.ModelAdmin):
    list_display = ['name', 'role', 'title', 'is_alumni', 'order']
    list_filter = ['role', 'is_alumni']
    list_editable = ['order']


@admin.register(ContactMessage)
class ContactMessageAdmin(admin.ModelAdmin):
    list_display = ['subject', 'name', 'email', 'is_read', 'created_at']
    list_filter = ['is_read']
    list_editable = ['is_read']
    readonly_fields = ['name', 'email', 'subject', 'message', 'created_at']
