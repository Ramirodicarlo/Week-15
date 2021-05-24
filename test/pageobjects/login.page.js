const Page = require('./page');

class LoginPage extends Page {

    //Inputs
    get username () {return $("#user-name")}
    get password () { return $('#password') }
    get btnLogin () { return $('#login-button') }
    get error () {return $("h3")}

    open () {
        return super.open();
    }

    submit(){
        this.btnLogin.click()
    }
}

module.exports = new LoginPage();
