// const person = {
//     name: "David",
//     age: "31",
//     profession: "programmer",
// };

// const { name, age, profession } = person;
// console.log(`My name is ${name}, I'm ${age} years old and I work as a ${profession}.`);

// const nums = [1, 2, 3, 4, 5];
// nums.shift();

// console.log(nums);

// nums.push(6);

// console.log(nums);

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function filterEvenNumbers(numbers) {
//     const evenNumbers = [];
//     for (let i = 0; i < numbers.length; i++) {
//         const currentNumber = numbers[i];
//         if (currentNumber % 2 !== 0) {
//             evenNumbers.push(currentNumber);
//         }   
//     };
//     return evenNumbers;
// };

// console.log(filterEvenNumbers(numbers));

function shutDown(callback) {
    console.log("Shutdown initiated...");
    setTimeout(() => {
        console.log("Shutdown complete.");
        callback();
    }, 2000);
}

shutDown(() => {
    console.log("Callback executed after shutdown.");
});