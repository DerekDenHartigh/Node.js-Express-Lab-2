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

    ctrl.addItem = (addType,addCost,addNumber)=>{
        let newItem = {"product": addType, "price": addCost, "quantity": addNumber}; // package up items into an obj
        ctrl.service.addItem(newItem);
    };

    }

angular
.module('CartApp')  
.component('cartList', {
    templateUrl: 'app/components/cartList/cartListTemplate.html',
    controller: CartListController
});