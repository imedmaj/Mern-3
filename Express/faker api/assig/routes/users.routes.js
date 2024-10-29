// The import line will look different than what is in Faker's documentation
// because we are working with an express application
const { faker } = require('@faker-js/faker');
// we can create a function to return a random / fake "Product"
const createUser = () => {
    const newUser = {
        password : faker.internet.password(),
        email : faker.internet.email(),
        phonNumber : faker.phone.number(),
        lastName: faker.name.lastName(), 
        firstName :faker.name.firstName(),
        id : faker.database.mongodbObjectId(),
       
    };
    return newUser;
};
    
const newFakeUser = createUser();
console.log(newFakeUser);
const allUsers =[]
module.exports=(app)=>{
    app.post("/api/users/new",(req,res)=>
    {
        const newUser =createUser()
        allUsers.push(newUser)
      return res.json(allUsers)

    }
    )
}

