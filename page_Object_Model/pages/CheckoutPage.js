import { Selector, t} from 'testcafe'

class CheckoutPage {
    constructor(){
        this.buttonCheckout = Selector('button').withAttribute('id', 'checkout')
        this.firstnameInput = Selector('input').withAttribute('id', 'first-name')
        this.lastnameInput = Selector('input').withAttribute('id', 'last-name')
        this.postalCodeInput = Selector('input').withAttribute('id', 'postal-code')
        this.buttonContinueCheckout = Selector('input').withAttribute('id', 'continue')
        this.buttonFinishPurchase = Selector ('button').withAttribute ('id', 'finish')
        this.orderConfirmationPage = Selector('.complete-header').withExactText('THANK YOU FOR YOUR ORDER') 
        

    }
    async purchasingProcess(firstname,lastname,postalCode){
        await t.click(this.buttonCheckout)
        await t.typeText(this.firstnameInput,firstname)
        await t.typeText(this.lastnameInput,lastname)
        await t.typeText(this.postalCodeInput,postalCode)
        await t.click(this.buttonContinueCheckout)
        await t.click(this.buttonFinishPurchase)
    }

}

export default new CheckoutPage