"use strict";

angular
.module("CartApp")
.service("cartService", function($http, $q){
    const service = this;

    // service.getAllItems = ()=>{
    //     return $q(function(resolve, reject){
    //         // BJ had me take out the . from './cartItemPage - shouldn't need it when hosting my own server
    //         $http.get('/cartItemsPage') // calls our localhost:3000/cartItemPage endpoint
    //         .then((response)=>{ // takes response data, logs it, and returns it (via resolve)
    //             console.log(response.data)
    //             resolve(response.data);
    //         })
    //         .catch((err)=>{ // takes error if http get fails, logs and returns error (via reject)
    //             console.error(err);
    //             reject(err);
    //         })
    //     })
    // }

    //GET
    service.getCart = ()=>{
        console.log("getting cart");
        return $http({
            url: "/cart-items",
            method: "GET"
        })
        .then((response)=>{

            console.log(response.data);
            return response.data;
        });
    };

    //POST
    service.addItem = (newItem)=>{
        console.log("adding item");
        return $http({
            url: "/cart-items",
            method: "POST",
            data: newItem
            })
        .then((response)=>{
            console.log(resopnse.data);
            return response.data;
        });
    };

    //PUT
    service.updateItem = (editedItem, id)=>{
        console.log("editing item");
        return $http({
            url: "/cart-items" + id,
            method: "PUT",
            data: editedItem
        })
        .then((response)=>{
            console.log(response.data);
            return response.data;
        });
    };

    //Delete
    service.deleteItem = (id)=>{
        console.log("deleting item");
        return $http({url: "/cart-items" + id,
            method: "DELETE"
        })
        .then((response)=>{
            console.log(response.data);
            return response.data;
        });
    };

})