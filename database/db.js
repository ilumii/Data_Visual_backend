const Sequelize = require('sequelize')
const tunnel = require('tunnel-ssh');

// yc147:Tchen925!@12.42.205.8/yc147:yc147123@127.0.0.1/yc147
const db = new Sequelize('mysql://yc147:yc147123@127.0.0.1/yc147')

// tunnel config 

var config = {
    username: 'yc147',
    password: 'Tchen925!',
    host: '12.42.205.8',
    port: 22,
    dstPort: 3306
};

tunnel(config, function (error, server) {
    //....   
    if (error) {
        console.error(error);
    } else {
        
        console.log('server:', server);
        // test sequelize connection     
        db.authenticate().then(function (err) {
            console.log('connection established');
        }).catch(function (err) {
            console.error('unable establish connection', err);
        })
        
    }
})

module.exports = db;

//   mysql+ssh://yc147:Tchen925!@12.42.205.8/yc147:yc147123@127.0.0.1/yc147?statusColor=686B6F&enviroment=production&name=IBM%20Azure&tLSMode=0&usePrivateKey=false&safeModeLevel=0&advancedSafeModeLevel=0