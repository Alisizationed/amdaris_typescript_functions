/*Function Basics*/
/*Function calculateRectangleArea calculates and returns the area of a rectangle*/

function calculateRectangleArea(width: number, height: number){
    return width * height;
}

console.log("Area of the rectangle with a width of 5 units and a height of 8 units is: "+calculateRectangleArea(5,8));

/*Anonymous Functions and Arrow Functions*/
/*Anonymous function that takes two numbers as parameters and returns their sum*/

let addNumbers = function (n1: number, n2: number): number {
    return n1 + n2;
}
console.log("7 + 10 = " + addNumbers(7,10));

/*Or an arrow function*/

addNumbers = (n1: number, n2: number): number => n1 + n2;

console.log("7 + 10 = " + addNumbers(7,10));

/*Optional and Default Parameters*/
/*Function greetUser with  two parameters: name and age*/

function greetUser(name: string, age: number = 30): void {
    console.log("Hello, "+name+", you're "+age+" years old");
}

greetUser("Alice",25);

/*Generic functions*
/*Function to Get the First Element of an Array*/

function getFirstElement<T>(array: T[]): T | undefined {
    return array[0];
}

console.log(getFirstElement(["one","two"]));

/*Function to Create a New Array from Elements*/

function createArray<T>(...items: T[]): T[] {
    return items as Array<T>;
}

console.log(createArray("one","two","three"));
console.log(createArray(1,2,3));

/*Function to Check if an Array is Empty*/

function isArrayEmpty<T>(array: T[]): boolean {
    return array.length === 0;
}

console.log(isArrayEmpty([1,2,3]));
console.log(isArrayEmpty([]));

