"use strict";

angular
.module("CartApp")
.service("cartService", function($http, $q){
    const service = this;

    // service.getAllItems = ()=>{
    //     return $q(function(resolve, reject){
    //         $http.get('/cartItemsPage') // calls our localhost:3000/cartItemPage endpoint
    //         .then((response)=>{ // takes response data, logs it, and returns it (via resolve)
    //             console.log("from cartService.JS")
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
            url: "/cartItemsPage",
            method: "GET"
        })
        .then((response)=>{
            console.log(response.data);
            return response.data;
        })
        .catch((err)=>{
            console.error(err);
        })
    };

    //POST
    service.addItem = (newItem)=>{
        console.log("adding item\n",newItem);
        return $http({
            url: "/cartItemsPage",
            method: "POST",
            data: newItem
            })
        .then((response)=>{
            console.log(response.data);
            return response.data;
        });
    };

    //PUT
    service.updateItemQuantity = (editedQuantity, id)=>{
        console.log(`editing item #${id}`);
        console.log(`editedQuantity: ${editedQuantity}`);
        return $http({
            url: "/cartItemsPage/"+id,
            method: "PUT",
            data: editedQuantity
        })
        // .then((response)=>{
        //     console.log(`item#${id} updated, \n${response.data}`);
        // });
    };

    //Delete
    service.deleteItem = (id)=>{
        console.log(`deleting item #${id}`);
        return $http({
            url: "/cartItemsPage/"+id,
            method: "DELETE"
        })
        // .then((response)=>{
        //     console.log(response.data);
        //     return response.data;
        // });
    };

})