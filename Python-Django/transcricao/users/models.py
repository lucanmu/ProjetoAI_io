from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, Group, Permission
from django.utils.translation import gettext_lazy as _
from .managers import CustomUserManager

class User(AbstractBaseUser, PermissionsMixin):
    first_name = models.CharField(_("First Name"), max_length=100)
    last_name = models.CharField(_("Last Name"), max_length=100)
    email = models.EmailField(_("Email Address"), unique=True, max_length=254)
    is_staff = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)  # Normalmente, isso seria True para permitir login após o registro.
    date_joined = models.DateTimeField(auto_now_add=True)

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["first_name", "last_name"]

    objects = CustomUserManager()

    # Explicitly defining groups and user_permissions with unique related_names
    groups = models.ManyToManyField(
        Group,
        verbose_name=_('groups'),
        blank=True,
        help_text=_('The groups this user belongs to. A user will get all permissions granted to each of their groups.'),
        related_name="custom_user_set",  # Nome de related_name único
        related_query_name="user",
    )
    user_permissions = models.ManyToManyField(
        Permission,
        verbose_name=_('user permissions'),
        blank=True,
        help_text=_('Specific permissions for this user.'),
        related_name="custom_user_perm_set",  # Nome de related_name único
        related_query_name="user_perm",
    )

    class Meta:
        verbose_name = _("User")
        verbose_name_plural = _("Users")

    def __str__(self):
        return self.email

    @property
    def get_full_name(self):
        return f"{self.first_name} {self.last_name}"
