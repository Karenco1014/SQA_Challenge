
import { Selector, t} from 'testcafe'
import HomeProductosPage from '../pages/HomeProductosPage'
import CheckoutPage from '../pages/CheckoutPage'
import { CHECKOUT, URLS } from '../data/Constants'
import { STANDARD_USER } from '../data/Roles'


fixture ('Checkout feature')
.page `${URLS.LOGIN_URL}`


test('Complete a purchase.',async t =>{
    await t.useRole(STANDARD_USER)
    await HomeProductosPage.addSpecificItem()
    await CheckoutPage.purchasingProcess(CHECKOUT.CHECKOUT_FORM.FIRSTNAME,CHECKOUT.CHECKOUT_FORM.LASTNAME,CHECKOUT.CHECKOUT_FORM.CODEPOSTAL)
    await t.expect(CheckoutPage.orderConfirmationPage.exists).ok()

})