const {schemasimDomain} = require('./domains')

const schemasimData = {
    'apiUrlExercises': schemasimDomain + 'apis/exercises',
    'apiUrlUsers': schemasimDomain + 'apis/users/', //add user email
    'simulatorsData':[
        {
            'idWell':1,
            'simulatorId': 7,            
        },
        {
            'idWell':2,
            'simulatorId': 8,            
        },
    ]
}


module.exports = schemasimData