const asyncHandler = require('express-async-handler');
const Danger = require('../models/dangerModel');

exports.danger_visualize = asyncHandler(async (req, res, next) => {
    const danger = await Danger.findOne({
        category: 'animale-pericoloso'
    }).exec();
    res.send(danger.description);
});
