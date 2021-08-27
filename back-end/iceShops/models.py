from django.db import models

class MarkedShop(models.Model):
    shop_name = models.CharField(max_length=255)
    note = models.TextField()

    def __str__(self):
        return self.shop_name

