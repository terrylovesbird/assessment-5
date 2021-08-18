from builtins import object

class ShopSerializer(object):
    def __init__(self, body):
        self.body = body
    
    @property
    def all_shops(self):
        output = {'shops': []}

        for shop in self.body:
            shop_details = {
                'shop_name': shop.shop_name,
                'rating': shop.rating
                
            }
            output['shops'].append(shop_details)

        return output