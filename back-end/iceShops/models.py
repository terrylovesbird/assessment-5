from django.db import models

class Shop(models.Model):
    shop_name = models.CharField(max_length=255)
    rating = models.CharField(max_length=5)

    def __str__(self):
        return self.shop_name

