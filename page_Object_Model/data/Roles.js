import { Role } from 'testcafe'
import LoginPage from '../pages/LoginPage'
import { URLS, CREDENTIALS, MESSAGES } from './Constants'


export const STANDARD_USER = Role(URLS.LOGIN_URL, async t => {
    await LoginPage.SubmitLoginForm(CREDENTIALS.STANDAR_USER_LOGIN.USERNAME, CREDENTIALS.STANDAR_USER_LOGIN.PASSWORD)

}, {preserveUrl:true})

export const STANDARD_INVALID_USER = Role(URLS.LOGIN_URL, async t => {
    await LoginPage.SubmitLoginForm(CREDENTIALS.STANDARD_INVALID_USER_LOGIN.USERNAME, CREDENTIALS.STANDARD_INVALID_USER_LOGIN.PASSWORD)
    await t.expect(LoginPage.errorMessage.innerText).contains(MESSAGES.ERROR.LOGIN_FORM.USERNAME_INVALID)

})