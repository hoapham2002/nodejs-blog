const mongoose = require('mongoose');

async function connect() {
    try {
        // await mongoose.connect('mongodb://localhost:27017/blog_education_dev',{
        //     useNewUrlParser: true,
        //     useUnifiedTopology: true,
        // });
         await mongoose.connect('mongodb://localhost:27017/blog_education_dev');
        console.log("Connect successfully!!!");
    } catch (error) {
        console.log("Connect failue!!!");
    }
}

module.exports = {connect};