
    const processesData = [
        {
            'name': 'simulation',
            'description': 'Carga de parámetros y datos de simulación',
            'chartsQtyPerPage': 1,
            'idEndProcessRoute':14,
            'exercisesData':{
                'exerciseName': 'Carga de parámetros y datos de simulación',
                'idExercise': [
                    {
                        idWells:1,
                        idExercises:26
                    },
                    {
                        idWells:2,
                        idExercises:27
                    },
                ],
                'steps':[
                    {
                        'idStep':1,
                        'stepName':'1_Datos Base',
                        'idRoute':2,
                        'tables':[
                            {
                                'tableName':'base_data',
                                'alias':'datos base',
                                'columns':[
                                    {
                                        'columnName': 'top',
                                        'idColumn':3
                                    },
                                    {
                                        'columnName': 'base',
                                        'idColumn':4
                                    },
                                    {
                                        'columnName': 'thickness',
                                        'idColumn':5
                                    },
                                    {
                                        'columnName': 'depo_from',
                                        'idColumn':6
                                    },
                                    {
                                        'columnName': 'depo_until',
                                        'idColumn':7
                                    },
                                    {
                                        'columnName': 'id_lithologies',
                                        'idColumn':8
                                    },
                                    {
                                        'columnName': 'id_pse',
                                        'idColumn':9
                                    },
                                    {
                                        'columnName': 'id_cot',
                                        'idColumn':10
                                    },
                                    {
                                        'columnName': 'id_cinetic',
                                        'idColumn':11
                                    },
                                    {
                                        'columnName': 'id_hi',
                                        'idColumn':12
                                    }                                    
                                ]
                            }
                        ]
                    },
                    {
                        'idStep':2,
                        'stepName':'2_Datos en pozo',
                        'idRoute':3,
                        'tables':[
                            {
                                'tableName':'well_data_temp',
                                'alias':'temp',
                                'columns':[
                                    {
                                        'columnName': 'depth',
                                        'idColumn':1
                                    },
                                    {
                                        'columnName': 'temperature',
                                        'idColumn':2
                                    }
                                ]
                            },
                            {
                                'tableName':'well_data_ro',
                                'alias':'ro',
                                'columns':[
                                    {
                                        'columnName': 'depth',
                                        'idColumn':1
                                    },
                                    {
                                        'columnName': 'ro',
                                        'idColumn':2
                                    },
                                    {
                                        'columnName': 'ro_min',
                                        'idColumn':2
                                    },
                                    {
                                        'columnName': 'ro_max',
                                        'idColumn':3
                                    },
                                ]
                            }
                        ]
                    },
                    {
                        'idStep':3,
                        'stepName':'3_Condición de frontera',
                        'idRoute':4,
                        'tables':[
                            {
                                'tableName':'boundary_condition_pwd',
                                'alias':'pwd',
                                'columns':[
                                    {
                                        'columnName': 'age',
                                        'idColumn':1
                                    },
                                    {
                                        'columnName': 'pwd',
                                        'idColumn':2
                                    }
                                ]
                            },
                            {
                                'tableName':'boundary_condition_hf',
                                'alias':'hf',
                                'columns':[
                                    {
                                        'columnName': 'age',
                                        'idColumn':1
                                    },
                                    {
                                        'columnName': 'hf',
                                        'idColumn':2
                                    }
                                ]
                            },
                            {
                                'tableName':'boundary_condition_swit',
                                'alias':'swit',
                                'columns':[
                                    {
                                        'columnName': 'age',
                                        'idColumn':1
                                    },
                                    {
                                        'columnName': 'swit',
                                        'idColumn':2
                                    }
                                ]
                            },
                        ]
                    },
                ]
            },
            'charts':[
                {'id':1,'name':'tempDepth','marginLeft':'20%','marginTop':'-2%','title':'Temp-Prof','chartTitle':'Temperatura, Chambira 1X-original','routeParam':'temp-depth','idChartsMenu':'1'},
                {'id':2,'name':'roDepth','marginLeft':'10%','title':'Ro-Prof','chartTitle':'Reflectancia Vitrinita, Chambira 1X-original','routeParam':'ro-depth','idChartsMenu':'1'},
                {'id':3,'name':'roTime','marginLeft':'22%','marginTop':'3%','title':'Ro-Tiempo','chartTitle':'Reflectancia Vitrinita, Chambira 1X-original','routeParam':'ro-time','idChartsMenu':'1'},
                {'id':4,'name':'trTime','marginLeft':'22%','marginTop':'3%','title':'TR-Tiempo','chartTitle':'ALL, Chambira 1X-orig','routeParam':'tr-time','idChartsMenu':'1'},
                {'id':5,'name':'roBurial','marginLeft':'20%','marginTop':'8%','title':'Ro-Sepultamiento','chartTitle':'Gráfico Ro-Sepultamiento, Chambira 1X-orig','routeParam':'ro-burial','idChartsMenu':'1'},
                {'id':6,'name':'trBurial','marginLeft':'15%','marginTop':'5%','title':'TR-Sepultamiento','chartTitle':'Gráfico TR-Sepultamiento, Chambira 1X-orig','routeParam':'tr-burial','idChartsMenu':'1'},
                {'id':7,'name':'oilBurialSat','marginLeft':'15%','marginTop':'5%','title':'Sat de Petroleo-Sepultamiento','chartTitle':'Gráfico Sat de Petroleo-Sepultamiento, Chambira 1X-orig','routeParam':'oil-burial-sat','idChartsMenu':'1'},
                {'id':8,'name':'gasBurialSat','marginLeft':'15%','marginTop':'5%','title':'Sat de Gas-Sepultamiento','chartTitle':'Gráfico Sat de Gas-Sepultamiento, Chambira 1X-orig','routeParam':'gas-burial-sat','idChartsMenu':'1'},
            ],
            'routes':[
                {'id':1,'route':'/well','idIndexData':1},
                {'id':2,'route':'/entry-data/base-data','idIndexData':2},
                {'id':3,'route':'/entry-data/data-in-well','idIndexData':2},
                {'id':4,'route':'/entry-data/boundary-condition','idIndexData':3},
                {'id':5,'route':'/simulation/process','idIndexData':4},
                {'id':6,'route':'/charts/temp-depth','idIndexData':4,'idChart':1},
                {'id':7,'route':'/charts/ro-depth','idIndexData':4,'idChart':2},
                {'id':8,'route':'/charts/ro-time','idIndexData':4,'idChart':3},
                {'id':9,'route':'/charts/tr-time','idIndexData':4,'idChart':4},
                {'id':10,'route':'/charts/ro-burial','idIndexData':4,'idChart':5},
                {'id':11,'route':'/charts/tr-burial','idIndexData':4,'idChart':6},
                {'id':12,'route':'/charts/oil-burial-sat','idIndexData':4,'idChart':7},
                {'id':13,'route':'/charts/gas-burial-sat','idIndexData':4,'idChart':8},
                {'id':14,'route':'/end-process','idIndexData':4}
            ]
        },
        {
            'name': 'calibration',
            'description': 'Calibración del modelo 1D',
            'chartsQtyPerPage': 2,
            'idEndProcessRoute':14,
            'exercisesData':{
                'exerciseName': 'Calibración de modelo 1D',
                'idExercise': [
                    {
                        idWells:1,
                        idExercises:28
                    },
                    {
                        idWells:2,
                        idExercises:29
                    },
                ],
                'steps':[
                    {
                        'idStep':1,
                        'stepName':'1_Calibración condición de frontera',
                        'idRoute':1,
                        'tables':[
                            {
                                'tableName':'boundary_condition_pwd_calibration',
                                'alias':'pwd',
                                'columns':[
                                    {
                                        'columnName': 'age',
                                        'idColumn':1
                                    },
                                    {
                                        'columnName': 'pwd',
                                        'idColumn':2
                                    }
                                ]
                            },
                            {
                                'tableName':'boundary_condition_hf_calibration',
                                'alias':'hf',
                                'columns':[
                                    {
                                        'columnName': 'age',
                                        'idColumn':1
                                    },
                                    {
                                        'columnName': 'hf',
                                        'idColumn':2
                                    }
                                ]
                            },
                            {
                                'tableName':'boundary_condition_swit_calibration',
                                'alias':'swit',
                                'columns':[
                                    {
                                        'columnName': 'age',
                                        'idColumn':1
                                    },
                                    {
                                        'columnName': 'swit',
                                        'idColumn':2
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        'idStep':2,
                        'stepName':'2_Calibración termal',
                        'idRoute':4,
                        'tables':[
                            {
                                'tableName':'thermal_calibration',
                                'alias':'calibración termal',
                                'columns':[
                                    {
                                        'columnName': 'age',
                                        'idColumn':1
                                    },
                                    {
                                        'columnName': 'hf',
                                        'idColumn':2
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            'charts':[
                {'id':1,'name':'caliPwdSwit','marginLeft':'20%','marginTop':'-5%','title':'PWD-SWIT-Prof.','routeParam':'cali-pwd-swit','idChartsMenu':'1','pageChartsInfo':[
                    {'id':1,'chartTitle':'Temperatura, Chambira 1X-original - Sin Calibración'},
                    {'id':2,'chartTitle':'Temperatura, Chambira 1X-original - Con Calibración'}
                ]},
                {'id':2,'name':'tempDepth','idChartsMenu':'2','marginLeft':'20%','marginTop':'-5%','title':'Temp-Prof','routeParam':'temp-depth','pageChartsInfo':[
                    {'id':1,'chartTitle':'Temperatura, Chambira 1X-original - Sin Calibración'},
                    {'id':2,'chartTitle':'Temperatura, Chambira 1X-original - Con Calibración'}
                ]},
                {'id':3,'name':'roDepth','idChartsMenu':'2','marginLeft':'23%','marginTop':'3%','title':'Ro-Prof','routeParam':'ro-depth','pageChartsInfo':[
                    {'id':1,'chartTitle':'Reflectancia Vitrinita, Chambira 1X-original - Sin Calibración'},
                    {'id':2,'chartTitle':'Reflectancia Vitrinita, Chambira 1X-original - Con Calibración'}
                ]},
                {'id':4,'name':'roTime','idChartsMenu':'2','marginLeft':'22%','marginTop':'3%','title':'Ro-Tiempo','routeParam':'ro-time','pageChartsInfo':[
                    {'id':1,'chartTitle':'Reflectancia Vitrinita, Chambira 1X-original - Sin Calibración'},
                    {'id':2,'chartTitle':'Reflectancia Vitrinita, Chambira 1X-original - Con Calibración'}
                ]},
                {'id':5,'name':'trTime','idChartsMenu':'2','marginLeft':'22%','marginTop':'3%','title':'TR-Tiempo','routeParam':'tr-time','pageChartsInfo':[
                    {'id':1,'chartTitle':'ALL, Chambira 1X-orig - Sin Calibración'},
                    {'id':2,'chartTitle':'ALL, Chambira 1X-orig - Con Calibración'}
                ]},
                {'id':6,'name':'roBurial','idChartsMenu':'2','marginLeft':'20%','marginTop':'8%','title':'Ro-Sepultamiento','routeParam':'ro-burial','pageChartsInfo':[
                    {'id':1,'chartTitle':'Reflectancia Vitrinita, Chambira 1X-original - Sin Calibración'},
                    {'id':2,'chartTitle':'Reflectancia Vitrinita, Chambira 1X-original - Con Calibración'}
                ]},
                {'id':7,'name':'trBurial','idChartsMenu':'2','marginLeft':'15%','marginTop':'5%','title':'TR-Sepultamiento','routeParam':'tr-burial','pageChartsInfo':[
                    {'id':1,'chartTitle':'Gráfico TR-Sepultamiento, Chambira 1X-orig - Sin Calibración'},
                    {'id':2,'chartTitle':'Gráfico TR-Sepultamiento, Chambira 1X-orig - Con Calibración'}
                ]},
                {'id':8,'name':'oilBurialSat','idChartsMenu':'2','marginLeft':'15%','marginTop':'5%','title':'Sat de Petroleo-Sepultamiento','routeParam':'oil-burial-sat','pageChartsInfo':[
                    {'id':1,'chartTitle':'Gráfico Sat de Petroleo-Sepultamiento, Chambira 1X-orig - Sin Calibración'},
                    {'id':2,'chartTitle':'Gráfico Sat de Petroleo-Sepultamiento, Chambira 1X-orig - Con Calibración'}
                ]},
                {'id':9,'name':'gasBurialSat','idChartsMenu':'2','marginLeft':'15%','marginTop':'5%','title':'Sat de Gas-Sepultamiento','routeParam':'gas-burial-sat','pageChartsInfo':[
                    {'id':1,'chartTitle':'Gráfico Sat de Gas-Sepultamiento, Chambira 1X-orig - Sin Calibración'},
                    {'id':2,'chartTitle':'Gráfico Sat de Gas-Sepultamiento, Chambira 1X-orig - Con Calibración'}
                ]},
            ],
            'routes':[
                {'id':1,'route':'/boundary-condition-calibration','idIndexData':5},
                {'id':2,'route':'/boundary-condition/process','idIndexData':5},
                {'id':3,'route':'/charts/cali-pwd-swit','idIndexData':5,'idChart':1},
                {'id':4,'route':'/thermal-calibration','idIndexData':6},
                {'id':5,'route':'/thermal/process','idIndexData':6},
                {'id':6,'route':'/charts/temp-depth','idIndexData':6,'idChart':2},
                {'id':7,'route':'/charts/ro-depth','idIndexData':6,'idChart':3},
                {'id':8,'route':'/charts/ro-time','idIndexData':6,'idChart':4},
                {'id':9,'route':'/charts/tr-time','idIndexData':6,'idChart':5},
                {'id':10,'route':'/charts/ro-burial','idIndexData':6,'idChart':6},
                {'id':11,'route':'/charts/tr-burial','idIndexData':6,'idChart':7},
                {'id':12,'route':'/charts/oil-burial-sat','idIndexData':6,'idChart':8},
                {'id':13,'route':'/charts/gas-burial-sat','idIndexData':6,'idChart':9},
                {'id':14,'route':'/end-process','idIndexData':6}
            ]
        },
        {
            'name': 'pse-table',
            'description': 'Elaboración de tabla resumen PSE',
            'chartsQtyPerPage': 1,
            'idEndProcessRoute':3,
            'exercisesData':{
                'exerciseName': 'Elaboración de tabla resumen PSE',
                'idExercise': [
                    {
                        idWells:1,
                        idExercises:30
                    },
                    {
                        idWells:2,
                        idExercises:31
                    },
                ],
                'steps':[
                    {
                        'idStep':1,
                        'stepName':'1_Tabla PSE',
                        'idRoute':2
                    }
                ]
            },
            'charts':[
                {'id':1,'name':'roTime','marginLeft':'22%','marginTop':'3%','title':'Ro-Tiempo','title':"Ro-Tiempo form's Raya, Pozo Shale y Chonta",'routeParam':'ro-time','chartTitle':'Temperatura, Chambira 1X-original - Sin Calibración','idChartsMenu':'1'},
                {'id':2,'name':'pseTable','title':'Tabla Resumen PSE','routeParam':'pse-table','idChartsMenu':'1'}
            ],
            'routes':[
                {'id':1,'route':'/charts/ro-time','idIndexData':7,'idChart':1},
                {'id':2,'route':'/pse-summary-table','idIndexData':7},
                {'id':3,'route':'/end-process','idIndexData':7}
            ]
        },
        {
            'name': 'toc-sensibility',
            'description': 'Sensibilidad contenido orgánico total (TOC)',
            'chartsQtyPerPage': 2,
            'idEndProcessRoute':3,
            'exercisesData':{
                'exerciseName': 'Sensibilidad contenido orgánico total (TOC)',
                'idExercise': [
                    {
                        idWells:1,
                        idExercises:32
                    }
                ],
                'steps':[
                    {
                        'idStep':1,
                        'stepName':'1_Sensibilidad TOC',
                        'idRoute':1
                    }
                ]
            },
            'charts':[
                {'id':1,'name':'oilBurialSat','marginLeft':'15%','marginTop':'5%','title':'Sat de Petroleo-Sepultamiento','chartTitle':'Gráfico Sat de Petroleo-Sepultamiento, Chambira 1X-orig','routeParam':'oil-burial-sat','idChartsMenu':'1','pageChartsInfo':[
                    {'id':1,'chartTitle':'Gráfico Sat de Petróleo-Sepultamiento, Chambira 1X-orig - Calibrado'},
                    {'id':2,'chartTitle':'Gráfico Sat de Petróleo-Sepultamiento, Chambira 1X-orig - Sensibilidad'}
                ]},
                {'id':2,'name':'gasBurialSat','marginLeft':'15%','marginTop':'5%','title':'Sat de Gas-Sepultamiento','chartTitle':'Gráfico Sat de Gas-Sepultamiento, Chambira 1X-orig','routeParam':'gas-burial-sat','idChartsMenu':'1','pageChartsInfo':[
                    {'id':1,'chartTitle':'Gráfico Sat de Gas-Sepultamiento, Chambira 1X-orig - Calibrado'},
                    {'id':2,'chartTitle':'Gráfico Sat de Gas-Sepultamiento, Chambira 1X-orig - Sensibilidad'}
                ]},
            ],
            'routes':[
                {'id':1,'route':'/sensibility-exercises','idIndexData':8},
                {'id':2,'route':'/toc','idIndexData':8},
                {'id':3,'route':'/toc/process','idIndexData':8},
                {'id':4,'route':'/charts/oil-burial-sat','idIndexData':8,'idChart':1},
                {'id':5,'route':'/charts/gas-burial-sat','idIndexData':8,'idChart':2},
                {'id':6,'route':'/end-process','idIndexData':8}
            ]
        },
        {
            'name': 'hi-sensibility',
            'description': 'Sensibilidad índice de hidrógeno (HI)',
            'chartsQtyPerPage': 2,
            'idEndProcessRoute':3,
            'exercisesData':{
                'exerciseName': 'Sensibilidad índice de hidrógeno (HI)',
                'idExercise': [
                    {
                        idWells:1,
                        idExercises:33
                    }
                ],
                'steps':[
                    {
                        'idStep':1,
                        'stepName':'1_Sensibilidad HI',
                        'idRoute':1
                    }
                ]
            },
            'charts':[
                {'id':1,'name':'oilBurialSat','marginLeft':'15%','marginTop':'5%','title':'Sat de Petroleo-Sepultamiento','chartTitle':'Gráfico Sat de Petroleo-Sepultamiento, Chambira 1X-orig','routeParam':'oil-burial-sat','idChartsMenu':'1','pageChartsInfo':[
                    {'id':1,'chartTitle':'Gráfico Sat de Petróleo-Sepultamiento, Chambira 1X-orig - Calibrado'},
                    {'id':2,'chartTitle':'Gráfico Sat de Petróleo-Sepultamiento, Chambira 1X-orig - Sensibilidad'}
                ]},
                {'id':2,'name':'gasBurialSat','marginLeft':'15%','marginTop':'5%','title':'Sat de Gas-Sepultamiento','chartTitle':'Gráfico Sat de Gas-Sepultamiento, Chambira 1X-orig','routeParam':'gas-burial-sat','idChartsMenu':'1','pageChartsInfo':[
                    {'id':1,'chartTitle':'Gráfico Sat de Gas-Sepultamiento, Chambira 1X-orig - Calibrado'},
                    {'id':2,'chartTitle':'Gráfico Sat de Gas-Sepultamiento, Chambira 1X-orig - Sensibilidad'}
                ]},
            ],
            'routes':[
                {'id':1,'route':'/hi','idIndexData':8},
                {'id':2,'route':'/hi/process','idIndexData':8},
                {'id':3,'route':'/charts/oil-burial-sat','idIndexData':8,'idChart':1},
                {'id':4,'route':'/charts/gas-burial-sat','idIndexData':8,'idChart':2},
                {'id':5,'route':'/end-process','idIndexData':8}
            ]
        },
        {
            'name': 'kinetic-sensibility',
            'description': 'Sensibilidad cinética del modelo',
            'idEndProcessRoute':13,
            'exercisesData':{
                'exerciseName': 'Sensibilidad cinética del modelo',
                'idExercise': [
                    {
                        idWells:1,
                        idExercises:34
                    }
                ],
                'steps':[
                    {
                        'idStep':1,
                        'stepName':'1_Sensibilidad Cinética',
                        'idRoute':1
                    }
                ]
            },
            'charts':[
                {'id':1,'name':'oilBurialSat','marginLeft':'15%','marginTop':'5%','title':'Sat de Petroleo-Sepultamiento (Tissot in Waples)','chartTitle':'Gráfico Sat de Petroleo-Sepultamiento, Chambira 1X-orig','routeParam':'oil-burial-sat','idChartsMenu':'1'},
                {'id':2,'name':'gasBurialSat','marginLeft':'15%','marginTop':'5%','title':'Sat de Gas-Sepultamiento (Tissot in Waples)','chartTitle':'Gráfico Sat de Gas-Sepultamiento, Chambira 1X-orig','routeParam':'gas-burial-sat','idChartsMenu':'1'},
                {'id':3,'name':'oilBurialSat','marginLeft':'15%','marginTop':'5%','title':'Comparativo Sat de Petróleo (Burnham-Tissot)','chartTitle':'Gráfico Sat de Petróleo-Sepultamiento, Chambira 1X-orig','routeParam':'oil-burial-sat-comp','idChartsMenu':'1','pageChartsInfo':[
                    {'id':1,'chartTitle':'Burnham'},
                    {'id':2,'chartTitle':'Tissot'}
                ]},
                {'id':4,'name':'gasBurialSat','marginLeft':'15%','marginTop':'5%','title':'Comparativo Sat de Gas (Burnham-Tissot)','chartTitle':'Gráfico Sat de Gas-Sepultamiento, Chambira 1X-orig','routeParam':'gas-burial-sat-comp','idChartsMenu':'1','pageChartsInfo':[
                    {'id':1,'chartTitle':'Burnham'},
                    {'id':2,'chartTitle':'Tissot'},
                ]},
            ],
            'routes':[
                {'id':1,'route':'/kinetic','idIndexData':8},
                {'id':2,'route':'/kinetic/process','idIndexData':8},
                {'id':3,'route':'/charts/oil-burial-sat','idIndexData':8,'idChart':1},
                {'id':4,'route':'/charts/gas-burial-sat','idIndexData':8,'idChart':2},
                {'id':5,'route':'/charts/oil-burial-sat-comp','idIndexData':8,'idChart':3},
                {'id':6,'route':'/charts/gas-burial-sat-comp','idIndexData':8,'idChart':4},
                {'id':7,'route':'/end-process','idIndexData':8},
            ]
        },
        {
            'name': 'lithology-sensibility',
            'description': 'Sensibilidad cambio de litología',
            'idEndProcessRoute':13,
            'exercisesData':{
                'exerciseName': 'Sensibilidad cambio de litología',
                'idExercise': [
                    {
                        idWells:1,
                        idExercises:35
                    }
                ],
                'steps':[
                    {
                        'idStep':1,
                        'stepName':'1_Sensibilidad Litología',
                        'idRoute':1
                    }
                ]
            },
            'charts':[
                {'id':1,'name':'oilBurialSat','marginLeft':'15%','marginTop':'5%','title':'Sat de Petroleo-Sepultamiento','chartTitle':'Gráfico Sat de Petroleo-Sepultamiento, Chambira 1X-orig','routeParam':'oil-burial-sat','idChartsMenu':'1'},
                {'id':2,'name':'gasBurialSat','marginLeft':'15%','marginTop':'5%','title':'Sat de Gas-Sepultamiento','chartTitle':'Gráfico Sat de Gas-Sepultamiento, Chambira 1X-orig','routeParam':'gas-burial-sat','idChartsMenu':'1'},
                {'id':3,'name':'oilBurialSat','marginLeft':'15%','marginTop':'5%','title':'Comparativo Sat de Petróleo (Shaleblack-Sand-clay-rich)','chartTitle':'Gráfico Sat de Petróleo-Sepultamiento, Chambira 1X-orig','routeParam':'oil-burial-sat-comp','idChartsMenu':'1','pageChartsInfo':[
                    {'id':1,'chartTitle':'Shale-black'},
                    {'id':2,'chartTitle':'Sandstone-clay-rich'},
                ]},
                {'id':4,'name':'gasBurialSat','marginLeft':'15%','marginTop':'5%','title':'Comparativo Sat de Gas (Shaleblack-Sand-clay-ric)','chartTitle':'Gráfico Sat de Gas-Sepultamiento, Chambira 1X-orig','routeParam':'gas-burial-sat-comp','idChartsMenu':'1','pageChartsInfo':[
                    {'id':1,'chartTitle':'Shale-black'},
                    {'id':2,'chartTitle':'Sandstone-clay-rich'},
                ]},
            ],
            'routes':[
                {'id':1,'route':'/lithology','idIndexData':8},
                {'id':2,'route':'/lithology/process','idIndexData':8},
                {'id':3,'route':'/charts/oil-burial-sat','idIndexData':8,'idChart':1},
                {'id':4,'route':'/charts/gas-burial-sat','idIndexData':8,'idChart':2},
                {'id':5,'route':'/charts/oil-burial-sat-comp','idIndexData':8,'idChart':3},
                {'id':6,'route':'/charts/gas-burial-sat-comp','idIndexData':8,'idChart':4},
                {'id':7,'route':'/end-process','idIndexData':8},
            ]
        },
        
    ]

       

module.exports = processesData