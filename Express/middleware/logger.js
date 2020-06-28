const moment = require('moment');
// Middleware
const logger = (req,res,next)=>{
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}: ${moment().format()}`);
    next();
};
// Init Middleware
// app.use(logger);

module.exports = logger;