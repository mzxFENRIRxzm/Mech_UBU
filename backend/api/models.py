from django.db import models


class Season(models.Model):
    """Represents a competition season (S1, S2, ... S8)."""
    number = models.PositiveIntegerField(unique=True)
    name = models.CharField(max_length=100)
    year_start = models.PositiveIntegerField()
    year_end = models.PositiveIntegerField()
    description = models.TextField(blank=True)
    is_active = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-number']

    def __str__(self):
        return f"Season {self.number} ({self.year_start}-{self.year_end})"


class Car(models.Model):
    """A competition car built for a specific season."""
    ENGINE_TYPES = [
        ('ICE', 'Internal Combustion Engine'),
        ('EV', 'Electric Vehicle'),
        ('HYBRID', 'Hybrid'),
    ]
    STATUS_CHOICES = [
        ('active', 'Active / Current Build'),
        ('completed', 'Completed'),
        ('legacy', 'Legacy'),
    ]

    season = models.OneToOneField(Season, on_delete=models.CASCADE, related_name='car')
    name = models.CharField(max_length=200)
    engine_type = models.CharField(max_length=10, choices=ENGINE_TYPES, default='ICE')
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='completed')
    description = models.TextField(blank=True)
    image = models.ImageField(upload_to='cars/', blank=True, null=True)
    specs = models.JSONField(default=dict, blank=True, help_text="JSON object of key-value spec pairs")
    highlights = models.JSONField(default=list, blank=True, help_text="JSON array of highlight strings")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-season__number']

    def __str__(self):
        return f"{self.name} (S{self.season.number})"


class Project(models.Model):
    """An engineering project / subsystem."""
    CATEGORY_CHOICES = [
        ('chassis', 'Chassis'),
        ('powertrain', 'Powertrain'),
        ('control', 'Control'),
        ('safety', 'Safety'),
        ('storage', 'Storage'),
        ('dynamics', 'Dynamics'),
        ('electrical', 'Electrical'),
        ('other', 'Other'),
    ]

    title = models.CharField(max_length=200)
    slug = models.SlugField(unique=True)
    category = models.CharField(max_length=20, choices=CATEGORY_CHOICES)
    subtitle = models.CharField(max_length=200, blank=True)
    description = models.TextField()
    icon_emoji = models.CharField(max_length=10, default='🔧')
    image = models.ImageField(upload_to='projects/', blank=True, null=True)
    specs = models.JSONField(default=list, blank=True, help_text="JSON array of spec strings")
    order = models.PositiveIntegerField(default=0)
    is_featured = models.BooleanField(default=False)
    season = models.ForeignKey(Season, on_delete=models.SET_NULL, null=True, blank=True, related_name='projects')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['order']

    def __str__(self):
        return self.title


class GalleryImage(models.Model):
    """Photo for the gallery."""
    title = models.CharField(max_length=200)
    image = models.ImageField(upload_to='gallery/')
    category = models.CharField(max_length=100, blank=True)
    season = models.ForeignKey(Season, on_delete=models.SET_NULL, null=True, blank=True, related_name='gallery_images')
    description = models.TextField(blank=True)
    is_featured = models.BooleanField(default=False)
    order = models.PositiveIntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return self.title


class Sponsor(models.Model):
    """Team sponsors and supporters."""
    TIER_CHOICES = [
        ('platinum', 'Platinum'),
        ('gold', 'Gold'),
        ('silver', 'Silver'),
        ('supporter', 'Supporter'),
    ]

    name = models.CharField(max_length=200)
    tier = models.CharField(max_length=20, choices=TIER_CHOICES)
    logo = models.ImageField(upload_to='sponsors/', blank=True, null=True)
    website = models.URLField(blank=True)
    description = models.TextField(blank=True)
    is_active = models.BooleanField(default=True)
    order = models.PositiveIntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['order']

    def __str__(self):
        return f"{self.name} ({self.get_tier_display()})"


class TeamMember(models.Model):
    """Team member profiles."""
    ROLE_CHOICES = [
        ('lead', 'Team Lead'),
        ('mechanical', 'Mechanical Engineer'),
        ('powertrain', 'Powertrain Engineer'),
        ('dynamics', 'Vehicle Dynamics'),
        ('electronics', 'Electronics & Controls'),
        ('business', 'Business & Marketing'),
        ('design', 'Design & Media'),
        ('member', 'Member'),
    ]

    name = models.CharField(max_length=200)
    role = models.CharField(max_length=20, choices=ROLE_CHOICES, default='member')
    title = models.CharField(max_length=200, blank=True, help_text="Custom title (e.g., Chassis Lead)")
    photo = models.ImageField(upload_to='members/', blank=True, null=True)
    bio = models.TextField(blank=True)
    season = models.ForeignKey(Season, on_delete=models.SET_NULL, null=True, blank=True, related_name='members')
    year = models.PositiveIntegerField(blank=True, null=True, help_text="Student year")
    is_alumni = models.BooleanField(default=False)
    order = models.PositiveIntegerField(default=0)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['order']

    def __str__(self):
        return f"{self.name} ({self.get_role_display()})"


class ContactMessage(models.Model):
    """Messages from the contact form."""
    name = models.CharField(max_length=200)
    email = models.EmailField()
    subject = models.CharField(max_length=300)
    message = models.TextField()
    is_read = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return f"{self.subject} — {self.name}"
