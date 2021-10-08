import { Selector, t } from 'testcafe'

class LoginPage {
    constructor(){
        this.usernameInput = Selector('input').withAttribute('id','user-name')
        this.passwordInput = Selector('input').withAttribute('id','password')
        this.loginButton = Selector('input').withAttribute('id','login-button')
        this.errorMessage = Selector('h3').withAttribute('data-test','error')
    }

    async SubmitLoginForm(username, password){
        await t.typeText(this.usernameInput,username)
        await t.typeText(this.passwordInput,password)
        await t.click(this.loginButton)
        
    }
}

export default new LoginPage