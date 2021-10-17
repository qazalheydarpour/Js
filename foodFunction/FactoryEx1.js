function Food (name, type, price, deliveryTime,order) {
    return {
        name,
        type,
        price,
        deliveryTime,
        rate:0,
        comments: [],
        ready: false,

        order: function (isPremiumUser){
            if(isPremiumUser)
                console.log(0.8*this.price,this.rate);
            else
                console.log(this.price,this.rate);
        },

        setRate:function (rateNum){
            if (this.rate===0)
                this.rate=rateNum;
            else
                this.rate = (this.rate+rateNum)/2;
        }
    }
}
function addComment(author, text) {
    return{
        author,
        date:new Date(),
        totalRate:0,
        text,
        rate : function (newRate) {
            if (this.totalRate === 0)
                this.totalRate = newRate;
            else
                this.totalRate = (this.totalRate + newRate ) / 2;
        }
    }


}


let pizza = Food ('pepperoni','fastFood',100 , 20);
let burger = Food('double','fastFood',120,30);

//console.log(pizza)
//console.log(burger)

let newRate1 = pizza.setRate(3);
let newRate2 = pizza.setRate(4);
let newRate3 = pizza.setRate(5);
let newRate4 = pizza.setRate(5);

let newRate5 = burger.setRate(2);
let newRate6 = burger.setRate(1);
let newRate7 = burger.setRate(3);

//console.log(pizza.rate);
//console.log(burger.rate);


let newComment1 = addComment('qazal','so good!');
let newComment2 = addComment('sara','try it !! ');
pizza.comments.push(newComment1.text);
pizza.comments.push(newComment2.text);
//console.log(pizza);

let newComment3 = addComment('amir','not bad');
burger.comments.push(newComment3.text);
//console.log(burger);




