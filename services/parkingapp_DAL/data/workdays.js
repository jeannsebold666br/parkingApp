var mysql   = require('mysql'),
    pool = require('./_mysql-client');

exports.getWorkdaysById = function(req, res) {  
    pool.getConnection(function(err, connection){
        if (err) {
          connection.release();
          res.json({"code" : 503, "status" : "Error connecting to database.. :("});
          return;
        }   
        console.log('Connected as Thread Id: ' + connection.threadId);

        console.log('Attempting to get Workdays By Id : ' +  req.params.workdaysid);

        console.log("CALL spGetWorkdaysById(" + connection.escape(req.params.workdaysid) + ");");

        connection.query("CALL spGetWorkdaysById(" + connection.escape(req.params.workdaysid) + ");", function(err, rows){          
            connection.release();            
            if(!err) {                                
                var response = JSON.stringify(rows[0]); 
                return res(null,response); 
            }
        });

        connection.on('error', function(err) {      
                var error = {"code" : 503, "status" : "Error connecting to database.. :("};
                return error;     
        });
    });
};