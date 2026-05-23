import{Page,expect} from "@playwright/test"
export class Product{
    readonly page:Page
    constructor(page:Page){
        this.page=page
    }
    async verifyProductVisible(product:string){
        await expect(

        this.page.locator('.inventory_item_name', { hasText: product })

    ).toBeVisible()
    }
    async verifyProductPageNav(productLink:string,productUrl:string){
        await this.page.locator(productLink).click()
        //await expect(this.page.getByText(productTitle))
        await expect(this.page).toHaveURL(productUrl)
    }
    async addToCartBtn(btnPath:string){
        await this.page.locator(btnPath).click()
    }
    async verifyAddToCartClicked(btnPath:string){
        await expect(this.page.locator(btnPath)).toHaveText('Remove')
    }
    async removeProduct(btnPath:string){
        await expect(this.page.locator(btnPath)).toHaveText('Add to cart')
    }
    async verfiyProductNotShowing(bth:string){
        await expect(this.page.locator(bth)).not.toBeVisible()
    }

    
    
}