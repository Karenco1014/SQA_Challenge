import { Selector, t } from 'testcafe'

class MenuPage {
    constructor(){
        this.menuButton = Selector('button').withAttribute('id','react-burger-menu-btn')
        this.optionLogout = Selector('a').withAttribute('id','logout_sidebar_link')
    }

    async LogoutMenu(){
        await t.click(this.menuButton)
        await t.click(this.optionLogout)
    }

}
export default new MenuPage