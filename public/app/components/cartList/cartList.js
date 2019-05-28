"use strict";
// parent of question

function CartListController(cartService) {

    const ctrl = this;
    ctrl.service = cartService;
    
    // initing for function usage
    ctrl.addType;
    ctrl.addCost;
    ctrl.addNumber;
    ctrl.removedId;
    ctrl.updatedQuantity;
    ctrl.updatedId;

    ctrl.addItem = (addType,addCost,addNumber){
        let newItem = {"product": addType, "price": addCost, "quantity": addNumber}; // package up items into an obj
        ctrl.service.addItem(newItem);
    }

    // this is for populating the cart initially?
    ctrl.getLiveCartList = ()=>{
        ctrl.service.getAllItems() // returns data from resolve or err from reject
        .then((data)=>{
            ctrl.cartItems = data;
        })
        .catch((err)=>{
            console.error(err);
        })
    };
    ctrl.getLiveCartList();  // runs the get from our stuff

    // ctrl.getList = ()=>{
    //     pool.query("SELECT * FROM shopping_cart")
    //     .then((result) => {
    //         console.log(result.rows);
    //         ctrl.cartItems = result.rows;
    //     });
    // }

    // ctrl.getList();

    }

angular
.module('CartApp')  
.component('cartList', {
    templateUrl: 'app/components/cartList/cartListTemplate.html',
    controller: CartListController
});