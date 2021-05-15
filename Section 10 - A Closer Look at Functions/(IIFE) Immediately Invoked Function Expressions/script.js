'use strict';

// Immediately Invoked Function Expressions (IIFE)
const runOnce = function () {
  console.log('This will never run again');
};
runOnce();
runOnce();

// IIFE
(function () {
  console.log('This will never run again 1');
  const isPrivate = 23;
})();


const num = num1 => {
  (function () {
    console.log('This will never run again 3');
    const isPrivate = 23;
  })();
}; 
num();
num();
// console.log(isPrivate);

(() => console.log('This will ALSO never run again'))();

{
  const isPrivate = 23;
  var notPrivate = 46;
}
// console.log(isPrivate);
console.log(notPrivate);