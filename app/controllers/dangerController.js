const asyncHandler = require('express-async-handler');
const Danger = require('../models/dangerModel');
const User = require("../models/userModel")
const formatter = require("../utility/formatter");

exports.danger_visualize = asyncHandler(async (req, res, next) => {
    const danger = await Danger.findOne({
        _id: req.params.dangerId
    })
    .populate('sentBy')
    .exec();
    var cat;
    switch (danger.category) {
        case 'animale-pericoloso': cat = "Animale pericoloso"; break;
        case 'calamita-ambientale': cat = "Calamità ambientale"; break;
        case 'sentiero-inagibile': cat = "Sentiero inagibile"; break;
        case 'altro': cat = "Pericolo"; break;
        default: cat = "err"; break;
    }
    res.render('content', {
        title: "Segnalazione di pericolo", 
        category: cat, 
        description: danger.description,
        name: danger.sentBy.name,
        surname: danger.sentBy.surname,
        date: formatter.dateFormatter(danger.sendTimestamp),
        time: formatter.timeFormatter(danger.sendTimestamp) 
    });
});
