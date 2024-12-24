const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const Danger = require('./models/dangerModel');
const User = require('./models/userModel');
const mongoDB = 'mongodb+srv://admin:admin@trentinoalert.yxh7w.mongodb.net/?retryWrites=true&w=majority&appName=TrentinoAlert';

main().catch((err) => console.log(err));

async function main() {
    console.log('About to connect');
    await mongoose.connect(mongoDB);
    console.log('Should be connected?');
    await Danger.deleteMany({});
    await User.deleteMany({});
    console.log('deleted');
    mongoose.connection.close();
}