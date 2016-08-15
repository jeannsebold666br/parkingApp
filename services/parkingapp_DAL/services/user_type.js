var usertypeRepo = require('../data/user_type');
var vehicleRepo = require('../data/vehicle');

exports.addUserType = function (req, res) {
    console.log("\nUser Type Service Contacted...");  
    try {
        if(typeof req.params.newusertype == 'undefined') {
            return res.status(400).end();
        }   
        console.log("Service Request Tariff Location Id : " + req.params.newusertype);

        usertypeRepo.addUserType(req, function (err, result) {            
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
        console.log("user type Over and out..");
    }
};

exports.deleteUserType = function (req, res) {
    console.log("\nUser Type Service Contacted...");  
    try {
        if(typeof req.params.usertypeid == 'undefined' || typeof req.params.uid == 'undefined' || typeof req.params.upass == 'undefined') {
            return res.status(400).end();
        }   
        console.log("Service Request User Type Id : " + req.params.usertypeid + " User Id : " + req.params.uid);

        usertypeRepo.deleteUserType(req, function (err, result) {            
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
        console.log("user type Over and out..");
    }
};

exports.updateUserType = function (req, res) {
    console.log("\nUser Type Service Contacted...");  
    try {
        if(typeof req.params.usertypeid == 'undefined' || typeof req.params.newusertype == 'undefined') {
            return res.status(400).end();
        }   
        console.log("Service Request User Type Id : " + req.params.usertypeid + " New User Type : " + req.params.newusertype);

        usertypeRepo.updateUserType(req, function (err, result) {            
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
        console.log("user type Over and out..");
    }
};

//DEMO
exports.getVehicleMakeByVehicleType = function (req, res) {
    console.log("\nVehicle Service Contacted...");  
    try {
        if(typeof req.params.vehicletype == 'undefined') {
            return res.status(400).end();
        }   
        console.log("Service Request Vehicle User Id : " + req.params.vehicletype);

        vehicleRepo.getVehicleMakeByVehicleType(req, function (err, result) {            
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
        console.log("user vehicle Over and out..");
    }
    console.log("\n\nI am in Vehicle.js Service");
};

exports.getVehicleDescByVehicleMake = function (req, res) {
    console.log("\nVehicle Service Contacted...");  
    try {
        if(typeof req.params.vehiclemake == 'undefined') {
            return res.status(400).end();
        }   
        console.log("Service Request Vehicle User Id : " + req.params.vehiclemake);

        vehicleRepo.getVehicleDescByVehicleMake(req, function (err, result) {            
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
        console.log("user vehicle Over and out..");
    }
};