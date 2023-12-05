
const dataValidations = require('../data/validations')

const validations = {

    getDataToCompare: (ejsTable,data,processName) => {

        var dataToCompare = {}

        //base data
        if (ejsTable == 'baseData') {
            data.baseData.forEach(row => {
            Object.keys(row).forEach(key => {
                const keyName = key + '_' + row.id
                dataToCompare[keyName] = row[key]
            })
            })
        }

        //data in Well
        if (ejsTable == 'dataInWell') {

            //wellDataTemp
            var tempDataToCompare = {}
            
            data.wellDataTemp.forEach(row => {
            Object.keys(row).forEach(key => {
                const keyName = 'temp_' + key + '_' + row.id
                tempDataToCompare[keyName] = row[key]
            })
            })

            //wellDataRo
            var roDataToCompare = {}

            data.wellDataRo.forEach(row => {
            Object.keys(row).forEach(key => {
                const keyName = 'ro_' + key + '_' + row.id
                roDataToCompare[keyName] = row[key]
            })
            })
            dataToCompare = { ...tempDataToCompare, ...roDataToCompare}
        }

        //boundary condition
        if (ejsTable == 'boundaryCondition') {
            //hfs
            var hfsDataToCompare = {}
            data.hfs.forEach(row => {
            Object.keys(row).forEach(key => {
                const keyName = 'hf_' + key + '_' + row.id
                hfsDataToCompare[keyName] = row[key]
            })
            })

            //swits
            var switsDataToCompare = {}
            data.swits.forEach(row => {
            Object.keys(row).forEach(key => {
                const keyName = 'swit_' + key + '_' + row.id
                switsDataToCompare[keyName] = row[key]
            })
            })

            //pwds
            var pwdsDataToCompare = {}
            data.pwds.forEach(row => {
            Object.keys(row).forEach(key => {
                const keyName = 'pwd_' + key + '_' + row.id
                pwdsDataToCompare[keyName] = row[key]
            })
            })

            dataToCompare = { ...hfsDataToCompare, ...switsDataToCompare, ...pwdsDataToCompare }
        }

        //boundary condition calibration
        if (ejsTable == 'boundaryConditionCalibration') {
            //hfs
            var hfsDataToCompare = {}
            data.hfsCalibration.forEach(row => {
            Object.keys(row).forEach(key => {
                const keyName = 'hf_' + key + '_' + row.id
                hfsDataToCompare[keyName] = row[key]
            })
            })

            //swits
            var switsDataToCompare = {}
            data.switsCalibration.forEach(row => {
            Object.keys(row).forEach(key => {
                const keyName = 'swit_' + key + '_' + row.id
                switsDataToCompare[keyName] = row[key]
            })
            })

            //pwds
            var pwdsDataToCompare = {}
            data.pwdsCalibration.forEach(row => {
            Object.keys(row).forEach(key => {
                const keyName = 'pwd_' + key + '_' + row.id
                pwdsDataToCompare[keyName] = row[key]
            })
            })

            dataToCompare = { ...hfsDataToCompare, ...switsDataToCompare, ...pwdsDataToCompare }
        }

        //thermal calibration
        if (ejsTable == 'thermalCalibration') {
            data.thermalCalibration.forEach(row => {
            Object.keys(row).forEach(key => {
                const keyName = key + '_' + row.id
                dataToCompare[keyName] = row[key]
            })
            })
        }

        //sensibility
        switch (processName) {
            case 'toc-sensibility':
                errorName = 'TOC (%) = '
                dataToCompare = dataValidations.cotSensibility
                break;
            case 'hi-sensibility':
                errorName = 'HI (%) = '
                dataToCompare = dataValidations.hiSensibility
                break
            case 'kinetic-sensibility':
                errorName = 'KINETIC (%) = '
                dataToCompare = dataValidations.kineticSensibility1
                break
            case 'lithology-sensibility':
                errorName = 'LITHOLOGY (%) = '
                dataToCompare = dataValidations.lithologySensibility1
                break
        }

        return dataToCompare
    },
    getObservations: (stepData,errors) => {

        const tables = stepData.tables
        let observations = ''
        let standardizedErrors = []
        let errorsDetails = []

        //standarize errors to make it easier
        if (tables.length == 1) {
            const errorName = tables[0].alias
            errors.forEach(error => {
                standardizedErrors.push(errorName + '_' + error)
            })            
        }else{
            standardizedErrors = errors
        }

        standardizedErrors.forEach(error => {
            
            const arrayError = error.split('_')

            //get column name
            const columnData = [...arrayError]
            columnData.shift()
            columnData.pop()
            const columnName = columnData.join('_')

            //get column id
            const table = tables.filter( table => table.alias == arrayError[0])[0]
            
            const columnId = table.columns.filter(column => column.columnName == columnName)[0].idColumn

            errorsDetails.push({
                'errorName':arrayError[0],
                'columnName':columnName,
                'row':arrayError[arrayError.length-1],
                'column':columnId
            })
        })

        //get observations
        tables.forEach(table => {
            const tableAlias = table.alias
            const tableErrors = errorsDetails.filter(errors => errors.errorName == tableAlias)
            if (tableErrors.length > 0) {
                observations += tableAlias + ' = '
                tableErrors.forEach(error => {
                    observations += '[F:' + error.row + ' C:' + error.column + '] '
            })
            }
        })
        
        return observations
    },
    getColumnsMargins: (stepData) => {

        const tables = stepData.tables

        const columnsMargins = []

        //get margins
        tables.forEach(table => {
            table.columns.forEach(column => {
                const columnName = column.columnName
                const columnMargin = column.margin
                columnsMargins.push({
                    'columnName':columnName,
                    'columnMargin':columnMargin
                })
            })
        })




       /*const columnsMargins = []
        if (tables.length == 1) {
            tables[0].columns.forEach(column => {
                const columnName = column.columnName
                const columnMargin = column.margin
                columnsMargins.push({
                    'columnName':columnName,
                    'columnMargin':columnMargin
                })
            })       
        }else{
            
        }*/
        
        return columnsMargins
    }
}

module.exports = validations







