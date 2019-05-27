"use strict";

angular
.module("CartApp")
.service("cartService", function($http, $q){
    const service = this;

    service.getAllItems = ()=>{
        return $q(function(resolve, reject){
            // BJ had me take out the . from './cartItemPage - shouldn't need it when hosting my own server
            $http.get('/cartItemsPage') // calls our localhost:3000/cartItemPage endpoint
            .then((response)=>{ // takes response data, logs it, and returns it (via resolve)
                console.log(response.data)
                resolve(response.data);
            })
            .catch((err)=>{ // takes error if http get fails, logs and returns error (via reject)
                console.error(err);
                reject(err);
            })
        })
    }
})