function getWeather(){
    return new Promise((resolve, reject) =>{
        setTimeout(resolve('Sunny'),1000);
    })
}

function getWeatherIcon(weather){
    return new Promise((resolve, reject) => {
        switch(weather){
            case 'Sunny': resolve('S'); break;
            case 'Rainy': resolve('R'); break;
            case 'Cloudy': resolve('C'); break;
            default : reject('Error')
        }
    })
}

function onSuccess(data){
    console.log(data);
}

function onError(data){
    console.log(data);
}

getWeather().then(getWeatherIcon).then(onSuccess).catch(onError);

//------------------------------------------------------------------------------------------
// Example

function orderPizza(){
    console.log('Order Received');
    return new Promise((resolve, reject) => {
        setTimeout(()=>{resolve('Onion Pizza')},2000)
    })
}

function pizzaDelivery(pizza){
    return new Promise((resolve, reject) => {
        resolve(`${pizza} delivered`)
    })
}

function onSuccess(data){
    console.log(data);
}

function eatPizza(pizza){
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            resolve(`Eating ${pizza}`);
        },1000)
    })
}

orderPizza().then(pizzaDelivery).then(onSuccess).then(eatPizza).then(onSuccess);
console.log('Doing laundry');
console.log('Calling');
