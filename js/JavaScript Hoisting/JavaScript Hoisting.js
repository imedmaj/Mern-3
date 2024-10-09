// GIVEN
var example = "I'm the example!";
console.log(example);

// AFTER HOISTING BY THE INTERPRETER
// var example;
// console.log(example); // logs undefined
// example = "I'm the example!";

// part 1
var hello = 'world'; 
console.log(hello);                                   
                     
// part 2
var needle = 'haystack';

function test(){
    var needle = 'magnet';
    console.log(needle);
}
test();
// part 3
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
print()
console.log(brendan);
// PART 4
let food = 'chicken';
console.log(food);
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
eat();
PART 5

var food = "fish";

console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    
    
}
console.log(food);
mean();
// part 6
var genre = "disco";
console.log(genre);


function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);
rewind();
// part 7
dojo = "san jose";
console.log(dojo);

function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
learn();
// part 8

function makeDojo(name, students){
    const dojo = {name,students};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
             dojo.hiring = "closed for now";
    }
    return dojo;
}

console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));




