//1.
//a.The class Movie is stated below. An instance of class Movie represents a film. This class has the following three properties:

//title, which is a String representing the title of the movie
//studio, which is a String representing the studio that made the movie
//rating, which is a String representing the rating of the movie (i.e. PG­13, R, etc)

//a) Write a constructor for the class Movie, which takes a String representing the title of the movie, a String representing the studio, and a String representing the rating as its arguments, and sets the respective class properties to these values.

//b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.

//c) Write a method getPG, which takes an array of base type Movie as its argument, and returns a new array of only those movies in the input array with a rating of "PG". You may assume the input array is full of Movie instances. The returned array need not be full.

//d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”, the studio “Eon Productions”, and the rating “PG­13” . write a code in javascript
 class Movie {
     title;
     studio;
     rating;
     Movie(title, studio,rating){
        this.title = title;
        this.studio = studio;
        if (rating == null || rating.isEmpty()) {
            this.rating = "PG";
        } else {
            this.rating = rating;
        }
    }
    getTitle() {
        return title;
    }

    setTitle(title){
        this.title = title;
    }

    getStudio() {
        return studio;
    }

    setStudio(studio) {
        this.studio = studio;
    }

    getRating() {
        return rating;
    }
    setRating(rating) {
        if (rating == null || rating.isEmpty()){
            this.rating ="PG";
        } else {
            this.rating =rating;
        }
    }
}
class Movie=new Movie("Casino Royale","Eon Productions","PG-13");
//3.Write a “person” class to hold all the details.
class Person {
    constructor(name, age, address){
      this.name = name;
      this.age = age;
      this.address = address;
    }
    getDetails() {
      return `Name: ${this.name}, Age: ${this.age}, Address: ${this.address}`;
    }
    sayHello() {
      console.log(`Hello, my name is ${this.name}`);
    }
  }
  const person =new Person('John Doe',30,'123 Main St');
console.log(person.getDetails()); // Output: Name: John Doe, Age: 30, Address: 123 Main St
person.sayHello(); // Output: Hello, my name is John Doe.
 //4.write a class to calculate the uber price.
class UberPriceCalculator{
    constructor(distance, duration){
      this.distance = distance; // distance in kilometers
      this.duration = duration; // duration in minutes
    }
    calculatePrice() {
      // base fare is 2.50
      let totalFare = 2.5;
      // distance-based fare is 1.50 per kilometer
      totalFare += this.distance * 1.5;
      // time-based fare is 0.20 per minute
      totalFare += this.duration * 0.2;
      // round total fare to two decimal places
      return totalFare.toFixed(2);
    }
  }
  const ride=new UberPriceCalculator(10, 30);
console.log(ride.calculatePrice()); // "18.00"
//2.https://github.com/rvsp/typescript-oops/blob/master/Practice/class-circle.md
class Shape {
  // properties and methods related to the general characteristics of shapes
}
class Circle extends Shape {
  radius: number;
  color: number;
  constructor(radius: number, color: number) {
    super();
    this.radius = radius;
    this.color = color;
  }
  getRadius(): number {
    return this.radius;
  }
  getColor(): number {
    return this.color;
  }
  setRadius(radius: number): void {
    this.radius = radius;
  }
}
