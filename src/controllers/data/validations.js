
    const validations = {
        cotSensibility: {
            'cot_5':5,
            'cot_9':5,
            'cot_12':5
        },
        hiSensibility: {
            'hi_5':500,
            'hi_9':500,
            'hi_12':400
        },
        kineticSensibility1: {
            'id_kinetics_5':3,
            'id_kinetics_9':3,
            'id_kinetics_12':3
        },
        lithologySensibility1: {
            'id_lithology_1': "1",
            'id_lithology_2': "4",
            'id_lithology_3': "3",
            'id_lithology_4': "2",
            'id_lithology_5': "2",
            'id_lithology_6': "4",
            'id_lithology_7': "7",
            'id_lithology_8': "4",
            'id_lithology_9': "2",
            'id_lithology_10': "2",
            'id_lithology_11': "2",
            'id_lithology_12': "2"
        },
        pseTable: [
            {
                idWell:1,
                validations:[
                    {
                        'processName':'RAYA Gen',
                        'from':18.16,
                        'to':0,
                        'margin':1.82
                    },
                    {
                        'processName':'CHONTA Gen',
                        'from':11.6,
                        'to':0,
                        'margin':1.16
                    },
                    {
                        'processName':'POZO SHALE Gen',
                        'from':1.1,
                        'to':0,
                        'margin':0.11
                    },
                    {
                        'processName':'Momento Crítico',
                        'from':0.5,
                        'to':0,
                        'margin':0.05
                    }
                ]
            },
            {
                idWell:2,
                validations:[
                    {
                        'processName':'Titoniano Gen',
                        'from':30,
                        'to':25,
                        'margin':2.5
                    },
                    {
                        'processName':'Momento Crítico',
                        'from':10,
                        'to':0,
                        'margin':1
                    }
                ]
            }
        ],
    }

module.exports = validations