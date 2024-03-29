
    const processesData = [
        {
            'name': 'simulation',
            'routeParam':'entry-data',
            'description': 'Modelado 1D y simulación',
            'chartsQtyPerPage': 1,
            'idEndProcessRoute':14,
            'exercisesData':{
                'exerciseName': 'Modelado 1D y simulación',
                'idExercise': [
                    {
                        idWells:1,
                        idExercises:26, //dev
                        //idExercises:17, //prd
                    },
                    {
                        idWells:2,
                        idExercises:27,
                        //idExercises:18, //prd
                    },
                ],
                'steps':[
                    {
                        'idStep':1,
                        'stepName':'1_Datos Base',
                        'alias':'base-data',
                        'ejsTable':'baseData',
                        'title':'Datos base',
                        'idRoute':2,
                        'allowedAttemps':3,
                        'tables':[
                            {
                                'tableName':'base_data',
                                'alias':'datos base',
                                'restablishDataQuery':'baseData',
                                'columns':[
                                    {
                                        'columnName': 'top',
                                        'idColumn':3,
                                        'margin':0.05
                                    },
                                    {
                                        'columnName': 'base',
                                        'idColumn':4,
                                        'margin':0.05
                                    },
                                    {
                                        'columnName': 'thickness',
                                        'idColumn':5,
                                        'margin':0.02
                                    },
                                    {
                                        'columnName': 'depo_from',
                                        'idColumn':6,
                                        'margin':0.1
                                    },
                                    {
                                        'columnName': 'depo_until',
                                        'idColumn':7,
                                        'margin':0.1
                                    },
                                    {
                                        'columnName': 'id_lithologies',
                                        'idColumn':8,
                                        'margin':0
                                    },
                                    {
                                        'columnName': 'id_pse',
                                        'idColumn':9,
                                        'margin':0
                                    },
                                    {
                                        'columnName': 'cot',
                                        'idColumn':10,
                                        'margin':0.1
                                        
                                    },
                                    {
                                        'columnName': 'id_kinetics',
                                        'idColumn':11,
                                        'margin':0
                                    },
                                    {
                                        'columnName': 'hi',
                                        'idColumn':12,
                                        'margin':0.1
                                    }                                    
                                ]
                            }
                        ]
                    },
                    {
                        'idStep':2,
                        'stepName':'2_Datos en pozo',
                        'alias':'data-in-well',
                        'ejsTable':'dataInWell',
                        'title':'Datos en pozo',
                        'idRoute':3,
                        'allowedAttemps':3,
                        'tables':[
                            {
                                'tableName':'well_data_temp',
                                'alias':'temp',
                                'restablishDataQuery':'wellDataTemp',
                                'columns':[
                                    {
                                        'columnName': 'temperature',
                                        'idColumn':2,
                                        'margin':0.05
                                    }
                                ]
                            },
                            {
                                'tableName':'well_data_ro',
                                'alias':'ro',
                                'restablishDataQuery':'wellDataRo',
                                'columns':[
                                    {
                                        'columnName': 'ro',
                                        'idColumn':2,
                                        'margin':0.05
                                    },
                                    {
                                        'columnName': 'ro_min',
                                        'idColumn':2,
                                        'margin':0.05
                                    },
                                    {
                                        'columnName': 'ro_max',
                                        'idColumn':3,
                                        'margin':0.05
                                    },
                                ]
                            }
                        ]
                    },
                    {
                        'idStep':3,
                        'stepName':'3_Condición de frontera',
                        'alias':'boundary-condition',
                        'ejsTable':'boundaryCondition',
                        'title':'Cond. de frontera',
                        'idRoute':4,
                        'allowedAttemps':3,
                        'tables':[
                            {
                                'tableName':'boundary_condition_pwd',
                                'alias':'pwd',
                                'restablishDataQuery':'boundaryConditionPwd',
                                'columns':[
                                    {
                                        'columnName': 'pwd',
                                        'idColumn':2,
                                        'margin':0.1,
                                    }
                                ]
                            },
                            {
                                'tableName':'boundary_condition_hf',
                                'alias':'hf',
                                'restablishDataQuery':'boundaryConditionHf',
                                'columns':[
                                    {
                                        'columnName': 'hf',
                                        'idColumn':2,
                                        'margin':0.05,
                                    }
                                ]
                            },
                            {
                                'tableName':'boundary_condition_swit',
                                'alias':'swit',
                                'restablishDataQuery':'boundaryConditionSwit',
                                'columns':[
                                    {
                                        'columnName': 'swit',
                                        'idColumn':2,
                                        'margin':0.05,
                                    }
                                ]
                            },
                        ]
                    },
                ]
            },
            'charts':[
                {'id':1,'name':'tempDepth','marginLeft':'15%','marginTop':'5%','title':'Temp-Prof','chartTitle':'Temperatura, Pozo ','routeParam':'temp-depth','idChartsMenu':'1'},
                {'id':2,'name':'roDepth','marginLeft':'15%','marginTop':'5%','title':'Ro-Prof','chartTitle':'Reflectancia de Vitrinita, Pozo ','routeParam':'ro-depth','idChartsMenu':'1'},
                {'id':3,'name':'roTime','marginLeft':'15%','marginTop':'8%','title':'Ro-Tiempo','chartTitle':'Reflectancia de Vitrinita, Pozo ','routeParam':'ro-time','idChartsMenu':'1'},
                {'id':4,'name':'trTime','marginLeft':'15%','marginTop':'8%','title':'TR-Tiempo','chartTitle':'Relación de transformación, Pozo ','routeParam':'tr-time','idChartsMenu':'1'},
                {'id':5,'name':'roBurial','marginLeft':'15%','marginTop':'12%','title':'Ro-Sepultamiento','chartTitle':'Gráfico Ro-Sepultamiento, Pozo ','routeParam':'ro-burial','idChartsMenu':'1'},
                {'id':6,'name':'trBurial','marginLeft':'15%','marginTop':'10%','title':'TR-Sepultamiento','chartTitle':'Gráfico TR-Sepultamiento, Pozo ','routeParam':'tr-burial','idChartsMenu':'1'},
                {'id':7,'name':'oilBurialSat','marginLeft':'15%','marginTop':'12%','title':'Sat de Petroleo-Sepultamiento','chartTitle':'Gráfico Sat de Petroleo-Sepultamiento, Pozo ','routeParam':'oil-burial-sat','idChartsMenu':'1'},
                {'id':8,'name':'gasBurialSat','marginLeft':'15%','marginTop':'12%','title':'Sat de Gas-Sepultamiento','chartTitle':'Gráfico Sat de Gas-Sepultamiento, Pozo ','routeParam':'gas-burial-sat','idChartsMenu':'1'},
            ],
            'routes':[
                {'id':1,'route':'/simulation/well','idIndexData':1},
                {'id':2,'route':'/simulation/base-data','idIndexData':2},
                {'id':3,'route':'/simulation/data-in-well','idIndexData':2},
                {'id':4,'route':'/simulation/boundary-condition','idIndexData':3},
                {'id':5,'route':'/simulation/simulation-data/process','idIndexData':4},
                {'id':6,'route':'/simulation/charts/temp-depth','idIndexData':4,'idChart':1},
                {'id':7,'route':'/simulation/charts/ro-depth','idIndexData':4,'idChart':2},
                {'id':8,'route':'/simulation/charts/ro-time','idIndexData':4,'idChart':3},
                {'id':9,'route':'/simulation/charts/tr-time','idIndexData':4,'idChart':4},
                {'id':10,'route':'/simulation/charts/ro-burial','idIndexData':4,'idChart':5},
                {'id':11,'route':'/simulation/charts/tr-burial','idIndexData':4,'idChart':6},
                {'id':12,'route':'/simulation/charts/oil-burial-sat','idIndexData':4,'idChart':7},
                {'id':13,'route':'/simulation/charts/gas-burial-sat','idIndexData':4,'idChart':8},
                {'id':14,'route':'/simulation/end-process','idIndexData':4}
            ]
        },
        {
            'name': 'calibration',
            'routeParam':'entry-data',
            'description': 'Calibración del modelo 1D',
            'chartsQtyPerPage': 2,
            'idEndProcessRoute':14,
            'exercisesData':{
                'exerciseName': 'Calibración de modelo 1D',
                'idExercise': [
                    {
                        idWells:1,
                        idExercises:28, //dev
                        //idExercises:19, //prd
                    },
                    {
                        idWells:2,
                        idExercises:29, //dev
                        //idExercises:20, //prd
                    },
                ],
                'steps':[
                    {
                        'idStep':1,
                        'stepName':'1_Calibración condición de frontera',
                        'idRoute':1,
                        'alias':'boundary-condition-calibration',
                        'ejsTable':'boundaryConditionCalibration',
                        'title':'Calibración Cond. de frontera',
                        'allowedAttemps':3,
                        'tables':[
                            {
                                'tableName':'boundary_condition_pwd_calibration',
                                'alias':'pwd',
                                'columns':[
                                    {
                                        'columnName': 'pwd',
                                        'idColumn':2,
                                        'margin':0.1
                                    }
                                ]
                            },
                            {
                                'tableName':'boundary_condition_hf_calibration',
                                'alias':'hf',
                                'columns':[
                                    {
                                        'columnName': 'hf',
                                        'idColumn':2,
                                        'margin':0.05
                                    }
                                ]
                            },
                            {
                                'tableName':'boundary_condition_swit_calibration',
                                'alias':'swit',
                                'columns':[
                                    {
                                        'columnName': 'swit',
                                        'idColumn':2,
                                        'margin':0.05
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        'idStep':2,
                        'stepName':'2_Calibración termal',
                        'idRoute':4,
                        'alias':'thermal-calibration',
                        'ejsTable':'thermalCalibration',
                        'title':'Calibración termal',
                        'allowedAttemps':3,
                        'tables':[
                            {
                                'tableName':'thermal_calibration',
                                'alias':'calibración termal',
                                'columns':[
                                    {
                                        'columnName': 'hf',
                                        'idColumn':2,
                                        'margin':0.05
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            'charts':[
                {'id':1,'name':'pwdSwitDepth','marginLeft':'20%','marginTop':'5%','title':'PWD-SWIT-Prof.','routeParam':'cali-pwd-swit','idChartsMenu':'1','pageChartsInfo':[
                    {'id':1,'name':'pwdSwitDepth','chartTitle':'Temperatura - Sin Calibración, Pozo '},
                    {'id':2,'name':'pwdSwitDepthCalibrated','chartTitle':'Temperatura - Con Calibración PWD-SWIT, Pozo '}
                ]},
                {'id':2,'name':'tempDepth','idChartsMenu':'2','marginLeft':'20%','marginTop':'5%','title':'Temp-Prof','routeParam':'temp-depth','pageChartsInfo':[
                    {'id':1,'name':'tempDepth','chartTitle':'Temperatura - Sin Calibración, Pozo '},
                    {'id':2,'name':'tempDepthCalibrated','chartTitle':'Temperatura - Con Calibración, Pozo'}
                ]},
                {'id':3,'name':'roDepth','idChartsMenu':'2','marginLeft':'20%','marginTop':'5%','title':'Ro-Prof','routeParam':'ro-depth','pageChartsInfo':[
                    {'id':1,'name':'roDepth','chartTitle':'Reflectancia de Vitrinita - Sin Calibración, Pozo '},
                    {'id':2,'name':'roDepthCalibrated','chartTitle':'Reflectancia de Vitrinita - Con Calibración, Pozo '}
                ]},
                {'id':4,'name':'roTime','idChartsMenu':'2','marginLeft':'15%','marginTop':'12%','title':'Ro-Tiempo','routeParam':'ro-time','pageChartsInfo':[
                    {'id':1,'name':'roTime','chartTitle':'Reflectancia de Vitrinita - Sin Calibración, Pozo '},
                    {'id':2,'name':'roTimeCalibrated','chartTitle':'Reflectancia de Vitrinita - Con Calibración, Pozo '}
                ]},
                {'id':5,'name':'trTime','idChartsMenu':'2','marginLeft':'15%','marginTop':'12%','title':'TR-Tiempo','routeParam':'tr-time','pageChartsInfo':[
                    {'id':1,'name':'trTime','chartTitle':'Relación de transformación - Sin Calibración, Pozo'},
                    {'id':2,'name':'trTimeCalibrated','chartTitle':'Relación de transformación - Con Calibración, Pozo'}
                ]},
                {'id':6,'name':'roBurial','idChartsMenu':'2','marginLeft':'15%','marginTop':'12%','title':'Ro-Sepultamiento','routeParam':'ro-burial','pageChartsInfo':[
                    {'id':1,'name':'roBurial','chartTitle':'Reflectancia de Vitrinita - Sin Calibración, Pozo'},
                    {'id':2,'name':'roBurialCalibrated','chartTitle':'Reflectancia de Vitrinita - Con Calibración, Pozo'}
                ]},
                {'id':7,'name':'trBurial','idChartsMenu':'2','marginLeft':'15%','marginTop':'10%','title':'TR-Sepultamiento','routeParam':'tr-burial','pageChartsInfo':[
                    {'id':1,'name':'trBurial','chartTitle':'Gráfico TR-Sepultamiento - Sin Calibración, Pozo '},
                    {'id':2,'name':'trBurialCalibrated','chartTitle':'Gráfico TR-Sepultamiento - Con Calibración, Pozo'}
                ]},
                {'id':8,'name':'oilBurialSat','idChartsMenu':'2','marginLeft':'15%','marginTop':'10%','title':'Sat de Petroleo-Sepultamiento','routeParam':'oil-burial-sat','pageChartsInfo':[
                    {'id':1,'name':'oilBurialSat','chartTitle':'Gráfico Sat de Petroleo-Sepultamiento - Sin Calibración, Pozo'},
                    {'id':2,'name':'oilBurialSatCalibrated','chartTitle':'Gráfico Sat de Petroleo-Sepultamiento - Con Calibración, Pozo'}
                ]},
                {'id':9,'name':'gasBurialSat','idChartsMenu':'2','marginLeft':'15%','marginTop':'10%','title':'Sat de Gas-Sepultamiento','routeParam':'gas-burial-sat','pageChartsInfo':[
                    {'id':1,'name':'gasBurialSat','chartTitle':'Gráfico Sat de Gas-Sepultamiento - Sin Calibración, Pozo'},
                    {'id':2,'name':'gasBurialSatCalibrated','chartTitle':'Gráfico Sat de Gas-Sepultamiento - Con Calibración, Pozo'}
                ]},
            ],
            'routes':[
                {'id':1,'route':'/calibration/boundary-condition-calibration','idIndexData':5},
                {'id':2,'route':'/calibration/boundary-condition/process','idIndexData':5},
                {'id':3,'route':'/calibration/charts/cali-pwd-swit','idIndexData':5,'idChart':1},
                {'id':4,'route':'/calibration/thermal-calibration','idIndexData':6},
                {'id':5,'route':'/calibration/thermal-calibration/process','idIndexData':6},
                {'id':6,'route':'/calibration/charts/temp-depth','idIndexData':6,'idChart':2},
                {'id':7,'route':'/calibration/charts/ro-depth','idIndexData':6,'idChart':3},
                {'id':8,'route':'/calibration/charts/ro-time','idIndexData':6,'idChart':4},
                {'id':9,'route':'/calibration/charts/tr-time','idIndexData':6,'idChart':5},
                {'id':10,'route':'/calibration/charts/ro-burial','idIndexData':6,'idChart':6},
                {'id':11,'route':'/calibration/charts/tr-burial','idIndexData':6,'idChart':7},
                {'id':12,'route':'/calibration/charts/oil-burial-sat','idIndexData':6,'idChart':8},
                {'id':13,'route':'/calibration/charts/gas-burial-sat','idIndexData':6,'idChart':9},
                {'id':14,'route':'/calibration/end-process','idIndexData':6}
            ]
        },
        {
            'name': 'pse-table',
            'description': 'Elaboración de tabla resumen PSE',
            'routeParam':'pse-table',
            'chartsQtyPerPage': 1,
            'idEndProcessRoute':3,
            'exercisesData':{
                'exerciseName': 'Elaboración de tabla resumen PSE',
                'idExercise': [
                    {
                        idWells:1,
                        idExercises:30, //dev
                        //idExercises:21, //prd
                    },
                    {
                        idWells:2,
                        idExercises:31, //dev
                        //idExercises:22, //prd
                    },
                ],
                'steps':[
                    {
                        'idStep':1,
                        'stepName':'1_Tabla PSE',
                        'alias':'pse-table',
                        'ejsTable':'pseTable',
                        'title':'Tabla PSE',
                        'idRoute':2,
                        'allowedAttemps':3,
                        'tables':[
                            {
                                'restablishDataQuery':'pseTable'
                            }
                        ]
                    }
                ]
            },
            'charts':[
                {'id':1,'name':'roTimeCalibrated','marginLeft':'15%','marginTop':'10%','title':'Ro-Tiempo','title':"Ro-Tiempo formación ",'routeParam':'ro-time','chartTitle':'Reflectancia de Vitrinita - Con Calibración, Pozo ','idChartsMenu':'1'},
                {'id':2,'name':'pseTable','title':'Tabla Resumen PSE','routeParam':'pse-table','idChartsMenu':'1'}
            ],
            'routes':[
                {'id':1,'route':'/charts/ro-time','idIndexData':7,'idChart':1},
                {'id':2,'route':'/pse-summary-table','idIndexData':7},
                {'id':3,'route':'/pse-table/end-process','idIndexData':7}
            ]
        },
        {
            'name': 'toc-sensibility',
            'description': 'Sensibilidad contenido orgánico total (TOC)',
            'routeParam':'sensibility',
            'chartsQtyPerPage': 2,
            'idEndProcessRoute':3,
            'exercisesData':{
                'exerciseName': 'Sensibilidad contenido orgánico total (TOC)',
                'idExercise': [
                    {
                        idWells:1,
                        idExercises:32, //dev
                        //idExercises:23, //prd
                    }
                ],
                'steps':[
                    {
                        'idStep':1,
                        'stepName':'1_Sensibilidad TOC',
                        'alias':'toc-sensibility',
                        'ejsTable':'tocSensibility',
                        'title':'Sensibilidad TOC',
                        'idRoute':2,
                        'allowedAttemps':3,
                        'tables':[
                            {
                                'tableName':'toc_sensibility',
                                'alias':'toc',
                                'columns':[
                                    {
                                        'columnName': 'cot',
                                        'idColumn':9,
                                        'margin':0.1,
                                    }                   
                                ]
                            }
                        ]
                    }
                ]
            },
            'charts':[
                {'id':1,'name':'oilBurialSat','marginLeft':'15%','marginTop':'10%','title':'Sat de Petroleo-Sepultamiento','chartTitle':'Gráfico Sat de Petroleo-Sepultamiento, Pozo ','routeParam':'oil-burial-sat','idChartsMenu':'1','pageChartsInfo':[
                    {'id':1,'name':'oilBurialSatCalibrated','chartTitle':'Gráfico Sat de Petróleo-Sepultamiento - Calibrado, Pozo  '},
                    {'id':2,'name':'oilBurialSatCot','chartTitle':'Gráfico Sat de Petróleo-Sepultamiento - Sensibilidad COT, Pozo '}
                ]},
                {'id':2,'name':'gasBurialSat','marginLeft':'15%','marginTop':'10%','title':'Sat de Gas-Sepultamiento','chartTitle':'Gráfico Sat de Gas-Sepultamiento, Pozo ','routeParam':'gas-burial-sat','idChartsMenu':'1','pageChartsInfo':[
                    {'id':1,'name':'gasBurialSatCalibrated','chartTitle':'Gráfico Sat de Gas-Sepultamiento - Calibrado, Pozo'},
                    {'id':2,'name':'gasBurialSatCot','chartTitle':'Gráfico Sat de Gas-Sepultamiento - Sensibilidad COT, Pozo'}
                ]},
            ],
            'routes':[
                {'id':1,'route':'/sensibility-exercises','idIndexData':8},
                {'id':2,'route':'/toc-sensibility','idIndexData':8},
                {'id':3,'route':'/toc-sensibility/toc/process','idIndexData':8},
                {'id':4,'route':'/toc-sensibility/charts/oil-burial-sat','idIndexData':8,'idChart':1},
                {'id':5,'route':'/toc-sensibility/charts/gas-burial-sat','idIndexData':8,'idChart':2},
                {'id':6,'route':'/toc-sensibility/end-process','idIndexData':8}
            ]
        },
        {
            'name': 'hi-sensibility',
            'description': 'Sensibilidad índice de hidrógeno (HI)',
            'routeParam':'sensibility',
            'chartsQtyPerPage': 2,
            'idEndProcessRoute':3,
            'exercisesData':{
                'exerciseName': 'Sensibilidad índice de hidrógeno (HI)',
                'idExercise': [
                    {
                        idWells:1,
                        idExercises:33, //dev
                        //idExercises:24, //prd
                    }
                ],
                'steps':[
                    {
                        'idStep':1,
                        'stepName':'1_Sensibilidad HI',
                        'alias':'hi-sensibility',
                        'ejsTable':'hiSensibility',
                        'title':'Sensibilidad HI',
                        'idRoute':1,
                        'allowedAttemps':3,
                        'tables':[
                            {
                                'tableName':'hi_sensibility',
                                'alias':'hi',
                                'columns':[
                                    {
                                        'columnName': 'hi',
                                        'idColumn':11,
                                        'margin':0.1,
                                    }                   
                                ]
                            }
                        ]
                    }
                ]
            },
            'charts':[
                {'id':1,'name':'oilBurialSat','marginLeft':'15%','marginTop':'10%','title':'Sat de Petroleo-Sepultamiento','chartTitle':'Gráfico Sat de Petroleo-Sepultamiento, Pozo ','routeParam':'oil-burial-sat','idChartsMenu':'1','pageChartsInfo':[
                    {'id':1,'name':'oilBurialSatCalibrated','chartTitle':'Gráfico Sat de Petróleo-Sepultamiento - Calibrado, Pozo'},
                    {'id':2,'name':'oilBurialSatHi','chartTitle':'Gráfico Sat de Petróleo-Sepultamiento - Sensibilidad HI, Pozo'}
                ]},
                {'id':2,'name':'gasBurialSat','marginLeft':'15%','marginTop':'10%','title':'Sat de Gas-Sepultamiento','chartTitle':'Gráfico Sat de Gas-Sepultamiento','routeParam':'gas-burial-sat','idChartsMenu':'1','pageChartsInfo':[
                    {'id':1,'name':'gasBurialSatCalibrated','chartTitle':'Gráfico Sat de Gas-Sepultamiento - Calibrado, Pozo'},
                    {'id':2,'name':'gasBurialSatHi','chartTitle':'Gráfico Sat de Gas-Sepultamiento - Sensibilidad HI, Pozo'}
                ]},
            ],
            'routes':[
                {'id':1,'route':'/hi-sensibility','idIndexData':8},
                {'id':2,'route':'/hi-sensibility/hi/process','idIndexData':8},
                {'id':3,'route':'/hi-sensibility/charts/oil-burial-sat','idIndexData':8,'idChart':1},
                {'id':4,'route':'/hi-sensibility/charts/gas-burial-sat','idIndexData':8,'idChart':2},
                {'id':5,'route':'/hi-sensibility/end-process','idIndexData':8}
            ]
        },
        {
            'name': 'kinetic-sensibility',
            'description': 'Sensibilidad cinética del modelo',
            'routeParam':'sensibility',
            'idEndProcessRoute':13,
            'exercisesData':{
                'exerciseName': 'Sensibilidad cinética del modelo',
                'idExercise': [
                    {
                        idWells:1,
                        idExercises:34, //dev
                        //idExercises:25, //prd
                    }
                ],
                'steps':[
                    {
                        'idStep':1,
                        'stepName':'1_Sensibilidad Cinética',
                        'alias':'kinetic-sensibility',
                        'ejsTable':'kineticSensibility',
                        'title':'Sensibilidad Cinética',
                        'idRoute':1,
                        'allowedAttemps':3,
                        'tables':[
                            {
                                'tableName':'kinetic_sensibility',
                                'alias':'kinetic',
                                'columns':[
                                    {
                                        'columnName': 'id_kinetics',
                                        'idColumn':10,
                                        'margin':0,
                                    }                   
                                ]
                            }
                        ]
                    }
                ]
            },
            'charts':[
                {'id':1,'name':'oilBurialSat','marginLeft':'15%','marginTop':'10%','title':'Sat de Petroleo-Sepultamiento (Tissot in Waples)','chartTitle':'Gráfico Sat de Petroleo-Sepultamiento (Tissot in Waples), Pozo ','routeParam':'oil-burial-sat','idChartsMenu':'1'},
                {'id':2,'name':'gasBurialSat','marginLeft':'15%','marginTop':'10%','title':'Sat de Gas-Sepultamiento (Tissot in Waples)','chartTitle':'Gráfico Sat de Gas-Sepultamiento (Tissot in Waples), Pozo ','routeParam':'gas-burial-sat','idChartsMenu':'1'},
                {'id':3,'name':'oilBurialSat','marginLeft':'15%','marginTop':'10%','title':'Comparativo Sat de Petróleo (Burnham-Tissot)','chartTitle':'Gráfico Sat de Petróleo-Sepultamiento, Pozo ','routeParam':'oil-burial-sat-comp','idChartsMenu':'1','pageChartsInfo':[
                    {'id':1,'name':'oilBurialSat','chartTitle':'Sat de Petróleo-Sepultamiento (Burnham(1989)-TII), Pozo '},
                    {'id':2,'name':'oilBurialSatTissot','chartTitle':'Sat de Petróleo-Sepultamiento (Tissot in Waples), Pozo '}
                ]},
                {'id':4,'name':'gasBurialSat','marginLeft':'15%','marginTop':'10%','title':'Comparativo Sat de Gas (Burnham-Tissot)','chartTitle':'Gráfico Sat de Gas-Sepultamiento, Pozo ','routeParam':'gas-burial-sat-comp','idChartsMenu':'1','pageChartsInfo':[
                    {'id':1,'name':'gasBurialSat','chartTitle':'Sat de Gas-Sepultamiento (Burnham(1989)-TII), Pozo '},
                    {'id':2,'name':'gasBurialSatTissot','chartTitle':'Sat de Gast-Sepultamiento (Tissot in Waples), Pozo '},
                ]},
            ],
            'routes':[
                {'id':1,'route':'/kinetic-sensibility','idIndexData':8},
                {'id':2,'route':'/kinetic-sensibility/kinetic/process','idIndexData':8},
                {'id':3,'route':'/kinetic-sensibility/charts/oil-burial-sat','idIndexData':8,'idChart':1},
                {'id':4,'route':'/kinetic-sensibility/charts/gas-burial-sat','idIndexData':8,'idChart':2},
                {'id':5,'route':'/kinetic-sensibility/charts/oil-burial-sat-comp','idIndexData':8,'idChart':3},
                {'id':6,'route':'/kinetic-sensibility/charts/gas-burial-sat-comp','idIndexData':8,'idChart':4},
                {'id':7,'route':'/kinetic-sensibility/end-process','idIndexData':8},
            ]
        },
        {
            'name': 'lithology-sensibility',
            'description': 'Sensibilidad cambio de litología',
            'routeParam':'sensibility',
            'idEndProcessRoute':13,
            'exercisesData':{
                'exerciseName': 'Sensibilidad cambio de litología',
                'idExercise': [
                    {
                        idWells:1,
                        idExercises:36, //dev
                        //idExercises:26, //prd
                    }
                ],
                'steps':[
                    {
                        'idStep':1,
                        'stepName':'1_Sensibilidad Litología',
                        'alias':'lithology-sensibility',
                        'ejsTable':'lithologySensibility',
                        'title':'Sensibilidad Litología',
                        'idRoute':1,
                        'allowedAttemps':3,
                        'tables':[
                            {
                                'tableName':'lithology_sensibility',
                                'alias':'lithology',
                                'columns':[
                                    {
                                        'columnName': 'id_lithology',
                                        'idColumn':7,
                                        'margin':0,
                                    }                   
                                ]
                            }
                        ]
                    }
                ]
            },
            'charts':[
                {'id':1,'name':'oilBurialSat','marginLeft':'15%','marginTop':'10%','title':'Sat de Petroleo-Sepultamiento','chartTitle':'Gráfico Sat de Petroleo-Sepultamiento, Pozo ','routeParam':'oil-burial-sat','idChartsMenu':'1'},
                {'id':2,'name':'gasBurialSat','marginLeft':'15%','marginTop':'10%','title':'Sat de Gas-Sepultamiento','chartTitle':'Gráfico Sat de Gas-Sepultamiento, Pozo ','routeParam':'gas-burial-sat','idChartsMenu':'1'},
                {'id':3,'name':'oilBurialSat','marginLeft':'15%','marginTop':'10%','title':'Comparativo Sat de Petróleo (Shaleblack-Sand-clay-rich)','chartTitle':'Gráfico Sat de Petróleo-Sepultamiento, Pozo ','routeParam':'oil-burial-sat-comp','idChartsMenu':'1','pageChartsInfo':[
                    {'id':1,'name':'oilBurialSatCalibrated','chartTitle':'Sat de Petróleo-Sepultamiento (Shale-black), Pozo '},
                    {'id':2,'name':'oilBurialSatSandstone','chartTitle':'Sat de Petróleo-Sepultamiento (Sandstone-clay-rich), Pozo '},
                ]},
                {'id':4,'name':'gasBurialSat','marginLeft':'15%','marginTop':'10%','title':'Comparativo Sat de Gas (Shaleblack-Sand-clay-rich)','chartTitle':'Gráfico Sat de Gas-Sepultamiento, Pozo ','routeParam':'gas-burial-sat-comp','idChartsMenu':'1','pageChartsInfo':[
                    {'id':1,'name':'gasBurialSat','chartTitle':'Sat de Gas-Sepultamiento (Shale-black), Pozo '},
                    {'id':2,'name':'gasBurialSatSandstone','chartTitle':'Sat de Gas-Sepultamiento (Sandstone-clay-rich), Pozo '},
                ]},
            ],
            'routes':[
                {'id':1,'route':'/lithology-sensibility','idIndexData':8},
                {'id':2,'route':'/lithology-sensibility/lithology/process','idIndexData':8},
                {'id':3,'route':'/lithology-sensibility/charts/oil-burial-sat','idIndexData':8,'idChart':1},
                {'id':4,'route':'/lithology-sensibility/charts/gas-burial-sat','idIndexData':8,'idChart':2},
                {'id':5,'route':'/lithology-sensibility/charts/oil-burial-sat-comp','idIndexData':8,'idChart':3},
                {'id':6,'route':'/lithology-sensibility/charts/gas-burial-sat-comp','idIndexData':8,'idChart':4},
                {'id':7,'route':'/lithology-sensibility/end-process','idIndexData':8},
            ]
        }
    ]

module.exports = processesData