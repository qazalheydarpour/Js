function Food (name, type, price, deliveryTime,order) {
        this.name = name ;
        this.type = type ;
        this.price = price ;
        this.deliveryTime = deliveryTime ;
        this.rate = 0 ;
        this.comments =  [] ;
        this.ready = false ;

        this.order = function (isPremiumUser){
            if(isPremiumUser)
                console.log(0.8*this.price,this.rate);
            else
                console.log(this.price,this.rate);
        };

        this.setRate = function (rateNum){
            if (this.rate===0)
                this.rate=rateNum;
            else
                this.rate = (this.rate+rateNum)/2;
        }
}

function addComment(author, text) {
        this.author = author ;
        this.date = new Date() ;
        this.totalRate = 0 ;
        this.text = text ;
        this.rate =  function (newRate) {
            if (this.totalRate === 0)
                this.totalRate = newRate;
            else
                this.totalRate = (this.totalRate + newRate ) / 2;
        }

}


let pizza = new Food ('pepperoni','fastFood',100 , 20);
let burger = new Food('double','fastFood',120,30);

//console.log(pizza)
//console.log(burger)

let newRate1 = new pizza.setRate(3);
let newRate2 = new pizza.setRate(4);
let newRate3 = new pizza.setRate(5);
let newRate4 = new pizza.setRate(5);

let newRate5 = new burger.setRate(2);
let newRate6 = new burger.setRate(1);
let newRate7 = new burger.setRate(3);

//console.log(pizza.rate);
//console.log(burger.rate);


let newComment1 = new addComment ('qazal','so good!');
let newComment2 = new addComment ('sara','try it !! ');
pizza.comments.push(newComment1.text);
pizza.comments.push(newComment2.text);
//console.log(pizza);

let newComment3 = new addComment('amir','not bad');
burger.comments.push(newComment3.text);
//console.log(burger);



