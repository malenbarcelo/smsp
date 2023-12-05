//Middleware de aplicación
const fs = require('fs');

function userLoggedMiddleware(req,res,next){
    
    res.locals.isLogged=false
    
    if(req.session.userLogged){
        res.locals.isLogged = true
        res.locals.userLogged = req.session.userLogged
    }

    return next()
}
module.exports=userLoggedMiddleware
