var workdaysRepo = require('../data/workdays');

exports.getWorkdaysById = function (req, res) {
    console.log("\nWorkdays Service Contacted...");  
    try {
        if(typeof req.params.workdaysid == 'undefined') {
            return res.status(400).end();
        }   
        console.log("Service Request Vehicle Type : " + req.params.workdaysid);

        workdaysRepo.getWorkdaysById(req, function (err, result) {            
            if(err) {
                console.log("Error: 500, returned " + err);
                return res.status(500).end();                
            }
            if(!result) {
                console.log("Error: 404, returned " + result);
                return res.status(404).end();
            }
            if(result) {
                console.log("Status: Success | Status Code: 200 | " + result);
                return res.status(200).set('Content-Type', 'application/json').send(result).end();
            }
        });
    }
    catch(err) {
        console.log("Error 500 - Caught an exception - " + err);
        return res.status(500).end();
    }
    finally {    
        console.log("workdays Over and out..");
    }
};