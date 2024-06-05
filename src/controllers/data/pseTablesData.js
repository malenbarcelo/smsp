
    //info taken from base_data table. 
    const pseTablesData = [
        {
            'idWell':1,
            'inputs':3,
            'pseWidth':810,
            'ma':200,
            'elementsDetailsTop': 39,
            'processDetailsTop': 113,
            'divElementWidth':72,
            'tableData':[
                {
                    'id':1,
                    'element':'Roca Sobrecarga',
                    'from':99.5,
                    'to':0,
                    'color':'#D1B38F',
                    'ranges':[
                        {
                            id:1,
                            from:28.4,
                            to:0
                        },
                        {
                            id:2,
                            from:33.9,
                            to:30
                        },
                        {
                            id:3,
                            from:99.5,
                            to:89.3
                        }
                    ]
                },
                {
                    'id':2,
                    'element':'Roca Sello',
                    'from':70.6,
                    'to':33.9,
                    'color':'#8420BE',
                    'ranges':[
                        {
                            id:1,
                            from:70.3,
                            to:33.9
                        }
                    ]
                },
                {
                    'id':3,
                    'element':'Roca Yacimiento',
                    'from':89.3,
                    'to':70.6,
                    'color':'#FFC904',
                    'ranges':[
                        {
                            id:1,
                            from:83.5,
                            to:70.6
                        },
                        {
                            id:2,
                            from:89.3,
                            to:86
                        }
                    ]
                },
                {
                    'element':'Roca Fuente',
                    'id':4,
                    'from':112,
                    'to':28.4,
                    'color':'#303030',
                    'ranges':[
                        {
                            id:1,
                            from:30,
                            to:28.4
                        },
                        {
                            id:2,
                            from:86,
                            to:83.5
                        },
                        {
                            id:3,
                            from:112,
                            to:99.5
                        }
                    ]
                }
            ],
            'inputsData':[
                {
                    'input':1,
                    'process': 'RAYA Gen',
                    'color':'#006300',
                    'from_value': 0,
                    'to_value': 0,
                    'from_is_invalid':0,
                    'to_is_invalid':0                    
                },
                {
                    'input':2,
                    'process': 'CHONTA Gen',
                    'color':'#01BA4C',
                    'from_value': 0,
                    'to_value': 0,
                    'from_is_invalid':0,
                    'to_is_invalid':0
                },
                {
                    'input':3,
                    'process': 'POZO SHALE Gen',
                    'color':'#7EFF80',
                    'from_value': 0,
                    'to_value': 0,
                    'from_is_invalid':0,
                    'to_is_invalid':0
                },
                /*{
                    'input':4,
                    'process': 'Momento Crítico',
                    'color':'#FD0100',
                    'from_value': 0,
                    'to_value': 0,
                    'from_is_invalid':0,
                    'to_is_invalid':0
                }*/
            ]
        },
        {
            'idWell':2,
            'inputs':1,
            'pseWidth':810,
            'ma':200,
            'elementsDetailsTop': 39,
            'processDetailsTop': 132,
            'tableData':[
                {
                    'id':1,
                    'element':'Roca Sobrecarga',
                    'from':145,
                    'to':0,
                    'color':'#D1B38F',
                    'ranges':[
                        {
                            id:1,
                            from:3.6,
                            to:0
                        },
                        {
                            id:2,
                            from:145,
                            to:13
                        }
                    ]
                },
                {
                    'element':'Roca Sello',
                    'id':2,
                    'from':11.6,
                    'to':3.6,
                    'color':'#8420BE',
                    ranges:[
                        {
                            id:1,
                            from:3.8,
                            to:3.6
                        },
                        {
                            id:2,
                            from:4.3,
                            to:4
                        },
                        {
                            id:3,
                            from:11.6,
                            to:6.8
                        }
                    ]
                },
                {
                    'element':'Roca Yacimiento',
                    'id':3,
                    'from':13,
                    'to':3.8,
                    'color':'#FFC904',
                    'ranges':[
                        {
                            id:1,
                            from:4,
                            to:3.8
                        },
                        {
                            id:2,
                            from:6.8,
                            to:5.3
                        },
                        {
                            id:3,
                            from:13,
                            to:11.6
                        }
                    ]
                },
                {
                    'element':'Roca Fuente',
                    'id':4,
                    'from':152,
                    'to':145,
                    'color':'#303030',
                    'ranges':[
                        {
                            id:1,
                            from:152,
                            to:145
                        }
                    ]
                },
                {
                    'id':5,
                    'element':'Roca Bajocarga',
                    'from':220,
                    'to':152,
                    'color':'#B4B4B4',
                    'ranges':[
                        {
                            id:1,
                            from:220,
                            to:152
                        }
                    ]
                }
            ],
            'inputsData':[
                {
                    'input':1,
                    'process': 'Titoniano Gen',
                    'color':'#00FF02',
                    'from_value': 0,
                    'to_value': 0,
                    'from_is_invalid':0,
                    'to_is_invalid':0
                },
                /*{
                    'input':2,
                    'process': 'Momento Crítico',
                    'color':'#FF0000',
                    'from_value': 0,
                    'to_value': 0,
                    'from_is_invalid':0,
                    'to_is_invalid':0
                }*/
            ]
        }
    ]

module.exports = pseTablesData