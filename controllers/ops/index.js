'use strict';


var OpsModel = require('../../models/ops');


module.exports = function (router) {

    var model = new OpsModel();


    router.get('/', function (req, res) {
        
        res.render('ops/index', model);
        
    });

};
