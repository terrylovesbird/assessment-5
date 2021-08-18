from django.shortcuts import render


from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from .models import Shop
from .serializers import ShopSerializer



def shop_list(request):
    shops = Shop.objects.all()
    serialized_shops = ShopSerializer(shops).all_shops
    return JsonResponse(data=serialized_shops, status=200)

