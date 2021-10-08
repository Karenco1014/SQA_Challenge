import { Selector,t } from 'testcafe'
import LoginPage from '../pages/LoginPage'
import HomeProductosPage from '../pages/HomeProductosPage'
import { STANDARD_INVALID_USER, STANDARD_USER } from '../data/Roles'
import { MESSAGES, URLS } from '../data/Constants'


fixture ('Login feature')
.page `${URLS.LOGIN_URL}`

test('Login with a valid user.', async t => { 
     await t.useRole(STANDARD_USER)
     await t.expect(HomeProductosPage.homeProducts.exists).ok()
})

test('Login with a invalid user.', async t => { 
     await t.useRole(STANDARD_INVALID_USER)
})

