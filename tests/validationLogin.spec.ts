import{test} from "@playwright/test"
import { LoginPage } from "../pages/LoginPage"
test.describe("Login Functionality",()=>{
    test("Verify user can login with valid credentials",async ({page})=>{
        const login = new LoginPage(page)
        await login.naviationToLogin()
        await login.login('standard_user','secret_sauce')
        await login.verfiySuccessfullLogin()
    })
    test("Verify error message for invalid password",async ({page})=>{
        const login = new LoginPage(page)
        await login.naviationToLogin()
        await login.login('standard_user1','secret_sauce2')
        await login.verfiyErrorMessage()
    })
    test("Verify locked user cannot login",async ({page})=>{
        const login = new LoginPage(page)
        await login.naviationToLogin()
        await login.login('standard_user1','secret_sauce2')
        await login.verfiyLockeduser()
    })
    
})