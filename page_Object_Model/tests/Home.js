import { Selector, t } from 'testcafe'
import LoginPage from '../pages/LoginPage'
import HomeProductosPage from '../pages/HomeProductosPage'
import MenuPage from '../pages/MenuPage'
import { URLS } from '../data/Constants'
import { STANDARD_USER } from '../data/Roles'


fixture ('Home feature')
.page `${URLS.LOGIN_URL}`

test('Login with a valid user.', async t => { 
    await t.useRole(STANDARD_USER)
    await t.expect(HomeProductosPage.homeProducts.exists).ok()
})

test('Logout from the home page.', async t =>{
    await t.useRole(STANDARD_USER)
    await MenuPage.LogoutMenu()
    await t.expect(LoginPage.loginButton.exists).ok()
})

test('Sort products by Price (low to high)', async t =>{
    await t.useRole(STANDARD_USER)
    await HomeProductosPage.SortProductLowtoHigh()
    await t.expect(HomeProductosPage.resultpriceLower.exists).ok()
})

test('Add multiple items to the shopping cart.', async t => { 
    await t.useRole(STANDARD_USER)
    await HomeProductosPage.addCartitems()   
    for (let i=0; i <= HomeProductosPage.countProducts-1; i++){
        await t.expect(HomeProductosPage.products.nth(i).innerText).eql("REMOVE")
    };
    await t.expect(HomeProductosPage.shoppingCartResultsProducts.innerText).eql(String (HomeProductosPage.countProducts))
})

test('Add the specific product ‘Sauce Labs Onesie’ to the shopping cart.', async t => { 
    await t.useRole(STANDARD_USER)
    await HomeProductosPage.addSpecificItem()
    await t.expect(HomeProductosPage.validateProductinCart.innerText).eql("Sauce Labs Onesie")
})