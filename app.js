// Question 1

const myObj = {
    fname: "Abdullahi",
    lname: "Babatunde",
    age: 21,
    email: "abdullahibabatunde644@gmail.com",
    Occupation: "Student",
    Hobby: "Playing Games"
};

for (let key in myObj) {
    console.log(key + ": " + myObj[key]);
}


// Question 2

const objectArray = [
    {
        name: "Odun",
        age: 25,
        name: "Teacher"
    },

    {
     make:"Toyota",  
     model:"Highlander", 
     year:"2021",
    },

    {
      title: "The Great Man On Earth",
      author: "Wole Soyinka",
      yearPublished: 1925
    }
];