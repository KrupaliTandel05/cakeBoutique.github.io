console.log("Everything is working fine with this website");

var data = [
    {id:1, productName:"Mi 1", type:"mobile", price:5000},
    {id:2, productName:"Mi 2", type:"mobile", price:6000},
    {id:3, productName:"Mi 3", type:"mobile", price:7000},
    {id:4, productName:"Mi 4", type:"mobile", price:8000},
    {id:5, productName:"Mi 5", type:"mobile", price:9000}
    ];

function compare(a , b){
    if(a.price < b.price){
        return 1;
    }
    else if(a.price > b.price){
        return -1 ;
    }
    else {
        return 0 ; 
    }
}

let arr = data.sort(compare);
console.log(arr);



//making the service page  through which we can iterate through all the elements 

