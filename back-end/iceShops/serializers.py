# from builtins import object
from django.db.models import fields
from rest_framework.serializers import ModelSerializer, StringRelatedField, SerializerMethodField, PrimaryKeyRelatedField
from .models import *

class MarkedShopSerializer(ModelSerializer):
    class Meta:
        model = MarkedShop
        fields = "__all__"
    # def __init__(self, body):
    #     self.body = body
    
    # @property
    # def all_shops(self):
    #     output = {'shops': []}

    #     for shop in self.body:
    #         shop_details = {
    #             'shop_name': shop.shop_name,
    #             'rating': shop.rating
                
    #         }
    #         output['shops'].append(shop_details)

    #     return output