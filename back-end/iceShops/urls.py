from django.urls import path, include
from rest_framework.routers import SimpleRouter
from . import views

r = SimpleRouter()
r.register("marked", views.MarkedShopViewSet, basename="marked-shop")

urlpatterns = r.urls

# urlpatterns = [
#     path('', views.shop_list, name='shop_list')
    
# ]
