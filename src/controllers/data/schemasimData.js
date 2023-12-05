const {schemasimDomain} = require('./domains')

const schemasimData = {
    'apiUrlExercises': schemasimDomain + 'apis/exercises',
    'apiUrlUsers': schemasimDomain + 'apis/users/', //add user email
    'simulatorsData':[
        {
            'idWell':1,
            'simulatorId': 7, //dev simulator
            //'simulatorId': 5, //prd simulator            
        },
        {
            'idWell':2,
            'simulatorId': 8, //dev simulator
            //'simulatorId': 6, //prd simulator            
        },
    ]
}


module.exports = schemasimData