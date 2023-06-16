const mongoose = require('mongoose');

const ModelRandom = require('./Historia');


ModelRandom.aggregate([{ $sample: {size: 6}}], function(err, docs){

    if (err) {
        console.log(err);
        return;
    }
    

    console.log(docs);

});

