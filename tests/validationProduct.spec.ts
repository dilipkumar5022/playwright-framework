import{test} from "@playwright/test"
import { Product } from "../pages/Product"
import { LoginPage } from "../pages/LoginPage"
test.describe('verfiyProduct',()=>{
test.beforeEach('login',async({page})=>{
    const login = new LoginPage(page)
    await login.naviationToLogin()
    await login.login('standard_user','secret_sauce')
    await login.verfiySuccessfullLogin()
})
 test('Verify products are visible after login',async({page})=>{
    const product = new Product(page);
    await product.verifyProductVisible('Sauce Labs Backpack')
 })
 test('Verify product details page navigation',async({page})=>{
        const product = new Product(page);
        await product.verifyProductPageNav('#item_4_title_link','https://www.saucedemo.com/inventory-item.html?id=4')
 })
 test('Verify user can add single product to cart',async({page})=>{
        const product = new Product(page)
        await product.addToCartBtn('#add-to-cart-sauce-labs-backpack')
        await product.verifyAddToCartClicked('#remove-sauce-labs-backpack')
 })
 test('Verify user can add multiple products to cart',async({page})=>{
       const product = new Product(page)
       await product.addToCartBtn('#add-to-cart-sauce-labs-backpack')
       await product.addToCartBtn('#add-to-cart-sauce-labs-bike-light')
       await product.addToCartBtn('#add-to-cart-sauce-labs-bolt-t-shirt')
       await product.addToCartBtn('#shopping_cart_container')
       await product.verifyProductVisible('Sauce Labs Backpack')
       await product.verifyProductVisible('Sauce Labs Bike Light')
       await product.verifyProductVisible('Sauce Labs Bolt T-Shirt')
})
test('Verify user can remove product from cart',async({page})=>{
    const product = new Product(page)
    await product.addToCartBtn('#add-to-cart-sauce-labs-backpack')
    await product.addToCartBtn('#shopping_cart_container')
    await product.addToCartBtn('#remove-sauce-labs-backpack')
    await product.verfiyProductNotShowing('Sauce Labs Backpack')

})

})
