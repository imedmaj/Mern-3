// The import line will look different than what is in Faker's documentation
// because we are working with an express application
const { faker, fa } = require('@faker-js/faker');
// we can create a function to return a random / fake "Product"
const createData = () => {
    const newData = {
        user:{
            password : faker.internet.password(),
            email : faker.internet.email(),
            phonNumber : faker.phone.number(),
            lastName: faker.name.lastName(), 
            firstName :faker.name.firstName(),
            id : faker.database.mongodbObjectId(),

        },
     company :{
        id : faker.database.mongodbObjectId(),
        name : faker.company.name(),
       address:{
        street : faker.location.street(),
        city : faker.location.city(),
        state :faker.location.state(),
        zipCode :faker.location.zipCode(),
        country :faker.location.country(),
    }


       },
     
   
    };
    return newData;
};
    
const newFakData = createData;
console.log(newFakData);
const allDatas =[]
module.exports=(app)=>{
    app.post("/api/user/company",(req,res)=>
    {
        const newData = createData()
        allDatas.push(newData)
      return res.json(allDatas)

    }
    )
}

