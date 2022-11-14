import { Selector, t} from 'testcafe'

class HomeProductosPage {
    constructor(){
        this.homeProducts = Selector('.title').withExactText('PRODUCTS')
        this.buttomSortProducts = Selector ('.product_sort_container').withAttribute('data-test','product_sort_container')
        this.optionPriceLowtoHigh = Selector('option').withText('Price (low to high)')
        this.resultpriceLower = Selector('.inventory_item_price').withExactText('$7.99') 
        this.products = Selector ('.btn')
        this.countProducts  = 0
        this.shoppingCartResultsProducts = Selector ('.shopping_cart_link')
        this.itemProduct = 'add-to-cart-sauce-labs-onesie'
        this.buttoaddSpecificItem = Selector ('button').withAttribute('id','add-to-cart-sauce-labs-onesie')
        this.validateProductinCart = Selector('.inventory_item_name').withExactText('Sauce Labs Onesie')
    }

    async SortProductLowtoHigh(){
        await t.click(this.buttomSortProducts)
        await t.click(this.optionPriceLowtoHigh)    
    }

    async addCartitems(){ 
        this.countProducts = await this.products.count
         for (let i = 0; i <= this.countProducts-1; i++) { 
                await t.click(this.products.nth(i))
            }
    }
    async addSpecificItem(){
        this.countProducts = await this.products.count
         for (let i = 0; i <= this.countProducts-1; i++) { 
                if(this.itemProduct == await this.products.nth(i).id){
                    await t.click(this.buttoaddSpecificItem)
                }        
            }
        await t.click(this.shoppingCartResultsProducts)
    }
}

export default new HomeProductosPage