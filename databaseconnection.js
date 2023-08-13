const mongoose= require('mongoose')
function Dbconnect (){
    const DB_URL = process.env.MONGO_URI;
    mongoose.connect(DB_URL,{
        useNewUrlParser:true,
        useUnifiedTopology: true,
    })
}
const DB = mongoose.connection;
DB.on("err", console.error.bind(console,"Connection Failed"))
DB.once("open", function(){
    console.log("Database Connected Successfully")
})
module.exports=Dbconnect;