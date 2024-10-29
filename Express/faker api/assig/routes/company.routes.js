// The import line will look different than what is in Faker's documentation
// because we are working with an express application
const { faker, fa } = require('@faker-js/faker');
// we can create a function to return a random / fake "Product"
const createCompany = () => {
    const newCompany = {
     
        id : faker.database.mongodbObjectId(),
        name : faker.company.name(),
       address:{
        street : faker.location.street(),
        city : faker.location.city(),
        state :faker.location.state(),
        zipCode :faker.location.zipCode(),
        country :faker.location.country(),



       },
     
   
    };
    return newCompany;
};
    
const newFakCompany = createCompany;
console.log(newFakCompany);
const allCompanys =[]
module.exports=(app)=>{
    app.post("/api/Company/new",(req,res)=>
    {
        const newCompany = createCompany()
        allCompanys.push(newCompany)
      return res.json(allCompanys)

    }
    )
}

