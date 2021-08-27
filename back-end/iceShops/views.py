from django.shortcuts import render
# from django.http import JsonResponse
# from django.views.decorators.csrf import csrf_exempt
from rest_framework.viewsets import ModelViewSet
from .models import *
from .serializers import *


class MarkedShopViewSet(ModelViewSet):
    queryset = MarkedShop.objects.all()
    serializer_class = MarkedShopSerializer
# def shop_list(request):
#     shops = Shop.objects.all()
#     serialized_shops = ShopSerializer(shops).all_shops
#     return JsonResponse(data=serialized_shops, status=200)

