const Page = require('./page');
class CartPage extends Page {

    get btnContinue () { return $("#continue-shopping")}
    get checkout () { return $("#checkout")}
    get quantity () { return $$(".cart_quantity")}

    //Checkout
    get firstName () { return $("#first-name")}
    get lastName () { return $("#last-name")}
    get zipCode () { return $("#postal-code")}
    get continueCheck () { return $("#continue")}
    get cancelCheck ()  { return $("#cancel")}
    get checkInfoLabel () { return $$(".summary_info_label")}
    get checkValueLabel () { return $$(".summary_value_label")}
    get subtotalLabel () { return $(".summary_subtotal_label")}
    get totalTaxLabel () { return $(".summary_tax_label")}
    get totalLabel () { return $(".summary_total_label")}
    get finishBtn () { return $("#finish")}
}

module.exports = new CartPage();