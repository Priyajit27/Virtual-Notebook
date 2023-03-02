const mongoose = require("mongoose");

const mongoURI = "mongodb://127.0.0.1:27017/test"
// local host ar jaygay eta aibo
mongoose.set('strictQuery', true);
const connectToMongo=()=>{
 mongoose.connect(mongoURI,()=>{
    // mongo.connect() is a function
    console.log(`Connected to ${mongoURI} successfully`)
})
}

module.exports = connectToMongo;




