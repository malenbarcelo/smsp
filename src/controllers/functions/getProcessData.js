const db = require('../../../database/models')
const sequelize = require('sequelize')
const processesData = require('../data/processesData')
const baseDataQueries = require('../dbQueries/baseDataQueries')
const wellDataRoQueries = require('../dbQueries/wellDataRoQueries')
const wellDataTempQueries = require('../dbQueries/wellDataTempQueries')
const wellsQueries = require('../dbQueries/wellsQueries')
const boundaryConditionQueries = require('../dbQueries/boundaryConditionQueries')
const calibrationQueries = require('../dbQueries/calibrationQueries')

const getProcessData = {
    getData: async(idWell,processName) => {
        
        const well = await wellsQueries.wellName(idWell)
        const processData = processesData.filter(process => process.name == processName)[0]

        //well data
        const baseData = await baseDataQueries.baseData(idWell)
        const lithologies = await baseDataQueries.lithologies(idWell)
        const pses = await baseDataQueries.pses(idWell)
        const kinetics = await baseDataQueries.kinetics(idWell)
        const wellDataTemp = await wellDataTempQueries.wellDataTemp(idWell)
        const wellDataRo = await wellDataRoQueries.wellDataRo(idWell)
        const hfs = await boundaryConditionQueries.wellHf(idWell)
        const swits = await boundaryConditionQueries.wellSwit(idWell)
        const pwds = await boundaryConditionQueries.wellPwd(idWell)
        
        const hfsCalibration = await calibrationQueries.wellHf(idWell)
        const switsCalibration = await calibrationQueries.wellSwit(idWell)
        const pwdsCalibration = await calibrationQueries.wellPwd(idWell)
        
        const thermalCalibration = await calibrationQueries.wellThermalCalibration(idWell)

        const data = {well,baseData,lithologies,pses,kinetics,processData,wellDataTemp,wellDataRo,hfs,swits,pwds,hfsCalibration,switsCalibration,pwdsCalibration,thermalCalibration}

        return data
    },
    getResumedData: async(idWell,processName) => {
        const wells = await wellsQueries.allWells()
        
        const processData = processesData.filter(process => process.name == processName)[0]

        const data = {wells,processData,idWell}

        return data
    },
    getRoutes: async(idRoute,idWell,processData,routeParam) => {
        
        const idContinueRoute = parseInt(idRoute) + 1
        const idBackRoute = parseInt(idRoute) - 1
        const route = '/' + routeParam + '/' + idWell + processData.routes.filter(route => route.id == idRoute)[0].route
        const continueRoute = '/' + routeParam + '/' + idWell + processData.routes.filter(route => route.id == idContinueRoute)[0].route

        let backRoute = ''

        if (idBackRoute == 0) {

            backRoute = 'NA'

        }else{
            const stringBackRoute = '/' + routeParam + '/' + idWell + processData.routes.filter(route => route.id == idBackRoute)[0].route

            const arrayBackRoute = stringBackRoute.split('/')

            if (arrayBackRoute[arrayBackRoute.length-1] == 'process') {

                backRoute = '/' + routeParam + '/' + idWell + processData.routes.filter(route => route.id == idBackRoute -1)[0].route
                
            }else{
                backRoute = '/' + routeParam + '/' + idWell + processData.routes.filter(route => route.id == idBackRoute)[0].route
            }
        }

        const routes = {backRoute,route,continueRoute}
    
        return routes
    }
}

module.exports = getProcessData



