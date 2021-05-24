const loginPage = require("../pageobjects/login.page.js")
const catalogPage = require("../pageobjects/catalog.page.js")

describe("Test for catalog",() =>{
    //Log In
    beforeAll(() =>{  
        loginPage.open()
        loginPage.username.setValue("standard_user")
        loginPage.password.setValue("secret_sauce")
        loginPage.submit()
    })
    describe("Validation of items and his elements", () =>{
        it("Sauce Labs Backpack", () =>{
            catalogPage.item4.isExisting()
            catalogPage.btnItem4.isExisting()
            catalogPage.img1.getAttribute("alt")
            expect(catalogPage.img4.getAttribute("alt")).toMatch("Sauce Labs Backpack")
            catalogPage.description[0].isExisting()
        })
        it("Sauce Labs Bike Light", () =>{
            catalogPage.item0.isExisting()
            catalogPage.btnItem0.isExisting()
            expect(catalogPage.img0.getAttribute("alt")).toMatch("Sauce Labs Bike Light")
            catalogPage.description[1].isExisting()
        })
        it("Sauce Labs Bolt T-Shirt", () =>{
            catalogPage.item1.isExisting()
            catalogPage.btnItem1.isExisting()
            expect(catalogPage.img1.getAttribute("alt")).toMatch("Sauce Labs Bolt T-Shirt")
            catalogPage.description[2].isExisting()
        })
        it("Sauce Labs Fleece Jacket", () =>{
            catalogPage.item5.isExisting()
            catalogPage.btnItem5.isExisting()
            expect(catalogPage.img5.getAttribute("alt")).toMatch("Sauce Labs Fleece Jacket")
            catalogPage.description[3].isExisting()
        })
        it("Sauce Labs Onesie", () =>{
            catalogPage.item2.isExisting()
            catalogPage.btnItem2.isExisting()
            expect(catalogPage.img2.getAttribute("alt")).toMatch("Sauce Labs Onesie")
            catalogPage.description[4].isExisting()
        }) 
        it("Test.allTheThings() T-Shirt (Red)", () =>{
            catalogPage.item3.isExisting()
            catalogPage.btnItem3.isExisting()
            expect(catalogPage.img3.getAttribute("alt")).toContain("Test.allTheThings")
            catalogPage.description[5].isExisting()
        })
    })
    describe("Add to cart the diferrents items and remove them", () =>{
        it("Sauce Labs Bike Light", () =>{
            catalogPage.btnItem0.click()
            expect(catalogPage.spanCart).toHaveText("1")
            catalogPage.removeItem0.click()
            expect(catalogPage.spanCart[0]).toEqual(undefined)
        })
        it("Sauce Labs Bolt T-Shirt", () =>{
            catalogPage.btnItem1.click()
            expect(catalogPage.spanCart).toHaveText("1")
            catalogPage.removeItem1.click()
            expect(catalogPage.spanCart[0]).toEqual(undefined)
        })
        it("Sauce Labs Fleece Jacket", () =>{
            catalogPage.btnItem2.click()
            expect(catalogPage.spanCart).toHaveText("1")
            catalogPage.removeItem2.click()
            expect(catalogPage.spanCart[0]).toEqual(undefined)  
        })
        it("Sauce Labs Onesie", () =>{
            catalogPage.btnItem3.click()
            expect(catalogPage.spanCart).toHaveText("1")
            catalogPage.removeItem3.click()
            expect(catalogPage.spanCart[0]).toEqual(undefined) 
        }) 
        it("Sauce Labs Backpack", () =>{
            catalogPage.btnItem4.click()
            expect(catalogPage.spanCart).toHaveText("1")
            catalogPage.removeItem4.click()
            expect(catalogPage.spanCart[0]).toEqual(undefined)
        })
        it("Test.allTheThings() T-Shirt (Red)", () =>{
            catalogPage.btnItem5.click()
            expect(catalogPage.spanCart).toHaveText("1")
            catalogPage.removeItem5.click()
            expect(catalogPage.spanCart[0]).toEqual(undefined)  
        })
        it("Add multiple items and remove them", () =>{
            catalogPage.btnItem0.click()
            catalogPage.btnItem1.click()
            catalogPage.btnItem2.click()
            catalogPage.btnItem3.click()
            catalogPage.btnItem4.click()
            catalogPage.btnItem5.click()
            expect(catalogPage.spanCart).toHaveText("6")
            catalogPage.removeItem5.click()
            expect(catalogPage.spanCart).toHaveText("5")
            catalogPage.removeItem4.click()
            expect(catalogPage.spanCart).toHaveText("4")
            catalogPage.removeItem3.click()
            expect(catalogPage.spanCart).toHaveText("3")
            catalogPage.removeItem2.click()
            expect(catalogPage.spanCart).toHaveText("2")
            catalogPage.removeItem1.click()
            expect(catalogPage.spanCart).toHaveText("1")
            catalogPage.removeItem0.click()
            expect(catalogPage.spanCart[0]).toEqual(undefined)  
        })
    })
    describe("Burger Menu", () => {
        it("Button to open Burger menu and close it", () =>{
            catalogPage.btnBurger.isExisting()
            catalogPage.btnBurger.click()
            catalogPage.btnBurgerClose.isExisting()
            expect(catalogPage.btnBurgerClose.getAttribute("tabindex")).toEqual("0")
            catalogPage.btnBurgerClose.click()
            expect(catalogPage.btnBurgerClose.getAttribute("tabindex")).toEqual("-1")
        })
    })
  
})