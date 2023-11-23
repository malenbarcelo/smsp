const express = require('express')
const path = require('path')
const publicPath =  path.resolve('./public')
const cors = require('cors')
const session = require('express-session')
const bcrypt = require('bcryptjs')
const userLoggedMiddleware = require('./src/middlewares/userLoggedMiddleware.js')
const indexRoutes = require('./src/routes/indexRoutes.js')
const simulationRoutes = require('./src/routes/simulationRoutes.js')
const calibrationRoutes = require('./src/routes/calibrationRoutes.js')
const pseTableRoutes = require('./src/routes/pseTableRoutes.js')
const tocSensibilityRoutes = require('./src/routes/tocSensibilityRoutes.js')
const hiSensibilityRoutes = require('./src/routes/hiSensibilityRoutes.js')
const kineticSensibilityRoutes = require('./src/routes/kineticSensibilityRoutes.js')
const lithologySensibilityRoutes = require('./src/routes/lithologySensibilityRoutes.js')
const apisRoutes = require('./src/routes/apisRoutes.js')

const app = express()

//use public as statis
app.use(express.static(publicPath))

//use cors to allow any website to connet to my app
app.use(cors())

//get forms info as objects
app.use(express.urlencoded({extended:false}))
app.use(express.json())

//set views folder in src/views
app.set('views', path.join(__dirname, 'src/views'));

//set templates extension (ejs)
app.set('view engine','ejs')

//configure session
app.use(session({
    secret:'secret',
    resave: false,
    saveUninitialized: false
}))

//middlewares
app.use(userLoggedMiddleware)

//Declare and listen port
const APP_PORT = 3002
app.listen(APP_PORT,() => console.log("Servidor corriendo en puerto " + APP_PORT))

//Routes
app.use('/',indexRoutes)
app.use('/simulation',simulationRoutes)
app.use('/calibration',calibrationRoutes)
app.use('/pse-table',pseTableRoutes)
app.use('/toc-sensibility',tocSensibilityRoutes)
app.use('/hi-sensibility',hiSensibilityRoutes)
app.use('/kinetic-sensibility',kineticSensibilityRoutes)
app.use('/lithology-sensibility',lithologySensibilityRoutes)
app.use('/apis',apisRoutes)


