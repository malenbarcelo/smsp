const {body} = require('express-validator')
const bcrypt = require('bcryptjs')
const db = require('../../database/models')
const fetch = require('node-fetch')
const {apiUrlUsers} = require('../controllers/data/schemasimData')

const userFormsValidations = {
    loginForm: [
        body('email')
            .notEmpty().withMessage('Ingrese un mail').bail()
            .isEmail().withMessage('Ingrese un mail válido')
            .custom(async(value,{ req }) => {

                const email = req.body.email

                const response = await fetch(apiUrlUsers + email)

                try{
                    const postResponse = await response.json()
                    
                }catch(error){
                    throw new Error('Usuario inválido')
                }

                return true
            }),
        body('password')

            .notEmpty().withMessage('Ingrese una contraseña')

            .custom(async(value,{ req }) => {

                const email = req.body.email    

                const response = await fetch(apiUrlUsers + email)

                let postResponse = ''

                try{
                    postResponse = await response.json()

                }catch(error){
                    return true
                }

                if (!bcrypt.compareSync(req.body.password, postResponse.passwordHashed)) {
                    throw new Error('Contraseña inválida')
                }

                return true
            })
    ],
}

module.exports = userFormsValidations