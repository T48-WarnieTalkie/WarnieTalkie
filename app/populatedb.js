const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const Danger = require('./models/dangerModel');
const User = require("./models/userModel")
const mongoDB = 'mongodb+srv://admin:admin@trentinoalert.yxh7w.mongodb.net/?retryWrites=true&w=majority&appName=TrentinoAlert';

main().catch((err) => console.log(err));

async function main() {
    console.log('About to connect');
    await mongoose.connect(mongoDB);
    console.log('Should be connected?');
    const user1 = new User({
        name: "Arianna",
        surname: "Moser",
        cellphoneNumber: "0000",
        password: "ari",
        isModerator: false
    })
    const user2 = new User({
        name: "Tommaso",
        surname: "Cifariello",
        cellphoneNumber: "3493964721",
        password: "tommy",
        isModerator: true
    })
    const danger = new Danger({
        category: 'animale-pericoloso',
        coordinates: {
            type: 'Point',
            coordinates: [1, 2]
        },
        sendTimestamp: '2023-06-18T10:00:00Z',
        description: 'Ho visto un lupo',
        sentBy: user1._id
    })
    const danger2 = new Danger({
        category: 'calamita-ambientale',
        coordinates: {
            type: 'Point',
            coordinates: [19, 29]
        },
        sendTimestamp: '2024-07-19T10:00:00Z',
        description: 'Aaa una valanga!!',
        sentBy: user2._id
    })
    await user1.save();
    console.log("saved user1");
    await user2.save();
    console.log("saved user2");
    await danger.save();
    console.log('Saved danger1');
    await danger2.save();
    console.log('Saved danger2');
    mongoose.connection.close();
}