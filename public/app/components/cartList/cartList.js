"use strict";
// parent of question

function CartListController(cartService) {

    const ctrl = this;
    ctrl.service = cartService;
    
    ctrl.getList = ()=>{
        ctrl.service.getAllItems() // returns data from resolve or err from reject
        .then((data)=>{
            ctrl.cartItems = data;
        })
        .catch((err)=>{
            console.error(err);
        })
    };

    ctrl.getList();  // runs the get from our stuff

    }

angular
.module('CartApp')  
.component('cartList', {
    templateUrl: 'app/components/cartList/cartListTemplate.html',
    controller: CartListController
});