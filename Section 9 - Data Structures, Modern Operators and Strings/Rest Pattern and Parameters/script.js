'use strict';

// Data needed for first part of the section
const restaurant = {
  name: 'Ajmal',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order:function(starterIndex,mainIndex){
    return [this.starterMenu[starterIndex],this.mainMenu[mainIndex]];
  },

  orderDelivery:function({time='11pm',mainIndex=1,starterIndex}){
    console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} deliverd at time of ${time}`);
  },

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  oredrPasta:function(ing1,ing2,ing3){
    console.log(`pasta with ing1-${ing1},ing2-${ing2} and ing3-${ing3}`);
  },

  orderPizza:function(maining,...othering){
    console.log(maining,othering);
  }
};

//(i)Destruturing
//REST because left side of=
const [a,b,...others]=[1,2,3,4,5];
console.log(a,b,others);

//REST element must be last
const[a1,,c1,...otherfood]=[...restaurant.mainMenu,...restaurant.starterMenu];
console.log(a1,c1,otherfood);

//rest in object
const{sat,...weekdays}=restaurant.openingHours;
console.log(weekdays);

//(ii)Function
const add=function(...numbers){//unpack the value
  let sum=0;
  for(let i=0;i<numbers.length;i++)
    sum+=numbers[i];
    console.log(sum);
}

add(1,2,3);
add(4,5,6,7,8);
add(1,2,3,4,5,6,7,8,9);

const x=[1,2,3];
add(...x);//pack the value

//eg
restaurant.orderPizza('mushrooms','onion','spinach');
restaurant.orderPizza('mushrooms');