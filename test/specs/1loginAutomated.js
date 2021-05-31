const loginPage = require("../pageobjects/login.page.js");

describe("Register automated test", () =>{
    
    describe("Validation inputs, placeholders and error div",()=>{
        it("Validate username input and placeholder",() => {
            loginPage.open()
            loginPage.username.isExisting()
            expect(loginPage.username.getAttribute("placeholder")).toMatch("Username")
            expect(loginPage.username.getAttribute("type")).toMatch("text")
        })
        it("Validate password input and placeholder",() => {
            loginPage.open()
            loginPage.password.isExisting()
            expect(loginPage.password.getAttribute("placeholder")).toMatch("Password")
            expect(loginPage.password.getAttribute("type")).toMatch("password")
        })
        it("Validate submit button",() => {
            loginPage.open()
            loginPage.btnLogin.isExisting()
            expect(loginPage.btnLogin.getAttribute("value")).toMatch("Login")
            expect(loginPage.btnLogin.getAttribute("type")).toMatch("submit")
        })
        it("Validate error div",() => {
            loginPage.open()
            loginPage.error.isExisting()
        })
    })
    describe("Validate submit", () =>{
        it("Set wrong values and see a message error on submit",() =>{
            loginPage.open()
            loginPage.username.setValue("standard_user")
            loginPage.password.setValue("aaa")
            loginPage.submit()
            expect(loginPage.error).toHaveText("Epic sadface: Username and password do not match any user in this service")
        })    
        it("Set user: standard_user and login",() =>{
            loginPage.open()
            loginPage.username.setValue("standard_user")
            loginPage.password.setValue("secret_sauce")
            loginPage.submit()
        })
        it("Set user:locked_out_user and login",() =>{
            loginPage.open()
            loginPage.username.setValue("locked_out_user")
            loginPage.password.setValue("secret_sauce")
            loginPage.submit()
        })
        it("Set user: problem_user and login",() =>{
            loginPage.open()
            loginPage.username.setValue("problem_user")
            loginPage.password.setValue("secret_sauce")
            loginPage.submit()
        })
        it("Set user: performance_glitch_user and login",() =>{
            loginPage.open()
            loginPage.username.setValue("performance_glitch_user")
            loginPage.password.setValue("secret_sauce")
            loginPage.submit()
        })                
    })
})
