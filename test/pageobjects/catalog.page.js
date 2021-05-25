const Page = require('./page');

class CatalogPage extends Page {

    //Items
    get item0 () { return $("#item_0_title_link")}
    get item1 () { return $("#item_1_title_link")}
    get item2 () { return $("#item_2_title_link")}
    get item3 () { return $("#item_3_title_link")}
    get item4 () { return $("#item_4_title_link")}
    get item5 () { return $("#item_5_title_link")}

    //Button add to cart
    get btnItem0 () { return $("#add-to-cart-sauce-labs-bike-light")}
    get btnItem1 () { return $("#add-to-cart-sauce-labs-bolt-t-shirt")}
    get btnItem2 () { return $("#add-to-cart-sauce-labs-onesie")}
    get btnItem3 () { return $("#add-to-cart-test\\.allthethings\\(\\)-t-shirt-\\(red\\)")}
    get btnItem4 () { return $("#add-to-cart-sauce-labs-backpack")}
    get btnItem5 () { return $("#add-to-cart-sauce-labs-fleece-jacket")}

    //Button remove
    get removeItem0 () { return $("#remove-sauce-labs-bike-light")}
    get removeItem1 () { return $("#remove-sauce-labs-bolt-t-shirt")}
    get removeItem2 () { return $("#remove-sauce-labs-onesie")}
    get removeItem3 () { return $("#remove-test\\.allthethings\\(\\)-t-shirt-\\(red\\)")}
    get removeItem4 () { return $("#remove-sauce-labs-backpack")}
    get removeItem5 () { return $("#remove-sauce-labs-fleece-jacket")}

    //Imgs
    get img0 () { return $("#item_0_img_link > img")}
    get img1 () { return $("#item_1_img_link > img")}
    get img2 () { return $("#item_2_img_link > img")}
    get img3 () { return $("#item_3_img_link > img")}
    get img4 () { return $("#item_4_img_link > img")}
    get img5 () { return $("#item_5_img_link > img")}

    //Description div
    get description () { return $$(".inventory_item_desc")}

    //Price div
    get price () {return $$(".inventory_item_price")}

    //Cart
    get cart () { return $(".shopping_cart_link")}
    get spanCart () { return $(".shopping_cart_badge")}

    //Burger button
    get btnBurger () { return $("#react-burger-menu-btn")}
    get btnBurgerClose () { return $("#react-burger-cross-btn")}
    get linkAllItems () { return $("#inventory_sidebar_link")}
    get linkAbout () { return $("#about_sidebar_link")}
    get linkLogout () { return $("#logout_sidebar_link")}
    get linkReset () { return $("#reset_sidebar_link")}

    //Selctor for order items
    get selector () { return $(".product_sort_container")}

    // Social media
    get twitter () { return $(".social_twitter > a")}
    get facebook () { return $(".social_facebook > a")}
    get linkedin () { return $(".social_linkedin > a")}

    //Items details section
    get imgItemDetail () { return $(".inventory_details_img")}
    get titleItem () { return $(".inventory_details_name.large_size")}
    get itemDescription () { return $(".inventory_details_desc.large_size")}
    get itemPrice () { return $(".inventory_details_price")}
    get btnBack () { return $("#back-to-products")}

    open () {
        return super.open();
    }
}
module.exports = new CatalogPage();