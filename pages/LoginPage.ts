import{Page, expect} from "@playwright/test"
export class LoginPage{
    readonly page:Page
    constructor(page:Page){
        this.page=page
    }
    async naviationToLogin(){
        await this.page.goto("https://www.saucedemo.com/")
    }
    async enterUsernane(username:string){
        await this.page.getByPlaceholder('Username').fill(username)
    }
    async enterPassword(password:string){
        await this.page.getByPlaceholder('Password').fill(password)
    }
    async clickLogin(){
        await this.page.getByRole('button',{name:"Login"}).click()
    }
    async login(username:string,password:string){
        await this.enterUsernane(username)
        await this.enterPassword(password)
        await this.clickLogin()
    }
    async verfiySuccessfullLogin(){
        await expect(this.page).toHaveURL('https://www.saucedemo.com/inventory.html')
    }
    async verfiyErrorMessage(){
        await expect(this.page.getByText('Epic sadface: Username and password do not match any user in this service')).toBeVisible()
    }
    async verfiyLockeduser(){
        await expect(this.page.getByText('Epic sadface: Username and password do not match any user in this service')).toBeVisible()
    }
}
