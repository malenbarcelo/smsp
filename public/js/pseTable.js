import { dominio } from "./dominio.js"
import { pseTableCreateTable } from "./functions/pseTableCreateTable.js"
import { getAndCreateBars, getAndCompleteProcessDetail, getAndCompleteProcessInput, changeColors, inputsValues} from "./functions/pseFunctions.js"

window.addEventListener('load',async()=>{
    
    const idWell = document.getElementById('idWell').innerText    
    const backButton = document.getElementById('pseTable_' + idWell)
    
    const divWidth = 810
    const years = 200

    //get users inputs data
    const inputsData = await (await fetch(dominio + '/apis/' + idWell + '/pse-table')).json()

    //define processes data
    let processes = []
    for (let i = 1; i <= inputsData.length; i++) {
        processes.push(
            {
                'id':i,
                'processName':inputsData[i-1].process,
                'position':i,
                'color':inputsData[i-1].color,
                'arrowUp':'up_' + i,
                'arrowDown':'down_' + i,
                'from':inputsData[i-1].from_value,
                'to':inputsData[i-1].to_value,
                'width':parseFloat((inputsData[i-1].from_value - inputsData[i-1].to_value)*divWidth/years,1),
                'right':parseFloat(inputsData[i-1].to_value*divWidth/years,1),
                'fromIsInvalid':inputsData[i-1].from_is_invalid,
                'toIsInvalid':inputsData[i-1].to_is_invalid
            }
        )
    }
    
    //get all inputs, moveUps, moveDowns and colors
    const inputs = []
    const moveUps = []
    const moveDowns = []
    const colors = []

    for (let i = 1; i <= inputsData.length; i++) {
        inputs.push(document.getElementById('from_' + i))
        inputs.push(document.getElementById('to_' + i))
        moveUps.push(document.getElementById('up_' + i))
        moveDowns.push(document.getElementById('down_' + i))
        colors.push(document.getElementById('color_' + i))
    }

    //get process details and complete data
    getAndCompleteProcessDetail(inputsData.length,processes)
    
    //get and create bars
    getAndCreateBars(inputsData.length,processes)

    //move up event listener
    moveUps.forEach(moveUp => {
        if (moveUp) {
            moveUp.addEventListener("click",(e)=>{

                const processToEdit1 = processes.find(process => process.arrowUp == moveUp.id)
                const position = processToEdit1.position
        
                if (position!=1) {
                    
                    const idProcessToEdit1 = processToEdit1.id
                    const upProcessToEdit1 = processToEdit1.arrowUp
                    const downProcessToEdit1 = processToEdit1.arrowDown

                    const processToEdit2 = processes.find(process => process.position === position - 1)
                    const idProcessToEdit2 = processToEdit2.id
                    const upProcessToEdit2 = processToEdit2.arrowUp
                    const downProcessToEdit2 = processToEdit2.arrowDown

                    processes[idProcessToEdit1-1].position = position - 1
                    processes[idProcessToEdit1-1].arrowUp = upProcessToEdit2
                    processes[idProcessToEdit1-1].arrowDown = downProcessToEdit2
                    processes[idProcessToEdit1-1].id = idProcessToEdit2

                    processes[idProcessToEdit2-1].position = position
                    processes[idProcessToEdit2-1].arrowUp = upProcessToEdit1
                    processes[idProcessToEdit2-1].arrowDown = downProcessToEdit1
                    processes[idProcessToEdit2-1].id = idProcessToEdit1
                    
                    processes.sort(function(a, b) {
                        return a.position - b.position;
                    })

                    //get and complete processes
                    getAndCompleteProcessInput(inputsData.length,processes)

                    //get and complete processes details
                    getAndCompleteProcessDetail(inputsData.length,processes)

                    //get and create bars
                    getAndCreateBars(inputsData.length,processes)

                    //change colors
                    changeColors(processes,colors)
                    
                    //set inputs values
                    inputsValues(processes,inputs)

                }
            })
        }
    })

    moveDowns.forEach(moveDown => {
        if (moveDown) {
            moveDown.addEventListener("click",(e)=>{

                const processToEdit1 = processes.find(process => process.arrowDown == moveDown.id)
                const position = processToEdit1.position
        
                if (position<=inputsData.length) {
                    
                    const idProcessToEdit1 = processToEdit1.id
                    const upProcessToEdit1 = processToEdit1.arrowUp
                    const downProcessToEdit1 = processToEdit1.arrowDown
                    
                    const processToEdit2 = processes.find(process => process.position === position + 1)
                    const idProcessToEdit2 = processToEdit2.id
                    const upProcessToEdit2 = processToEdit2.arrowUp
                    const downProcessToEdit2 = processToEdit2.arrowDown
                    
                    processes[idProcessToEdit1-1].position = position + 1
                    processes[idProcessToEdit1-1].arrowUp = upProcessToEdit2
                    processes[idProcessToEdit1-1].arrowDown = downProcessToEdit2
                    processes[idProcessToEdit1-1].id = idProcessToEdit2

                    processes[idProcessToEdit2-1].position = position
                    processes[idProcessToEdit2-1].arrowUp = upProcessToEdit1
                    processes[idProcessToEdit2-1].arrowDown = downProcessToEdit1
                    processes[idProcessToEdit2-1].id = idProcessToEdit1
                    
                    processes.sort(function(a, b) {
                        return a.position - b.position;
                    })

                    //get and complete processes
                    getAndCompleteProcessInput(inputsData.length,processes)

                    //get and complete processes details
                    getAndCompleteProcessDetail(inputsData.length,processes)

                    //get and create bars
                    getAndCreateBars(inputsData.length,processes)

                    //change colors
                    changeColors(processes,colors)

                    //set inputs values
                    inputsValues(processes,inputs)
                }
            })
        }
    })

    inputs.forEach(input => {
        input.addEventListener("change",(e)=>{

            const idProcessToEdit = input.id.split('_')[1]
            const typeOfInput = input.id.split('_')[0]
            let width = processes[idProcessToEdit-1].width
            let right = processes[idProcessToEdit-1].right

            if (typeOfInput == 'from') {
                processes[idProcessToEdit-1].from = input.value
                width = parseFloat((input.value - processes[idProcessToEdit-1].to)*divWidth/years,1)  
                processes[idProcessToEdit-1].width = width
            }else{
                processes[idProcessToEdit-1].to = input.value
                width = parseFloat((processes[idProcessToEdit-1].from - input.value)*divWidth/years,1)
                right = parseFloat(input.value*divWidth/years,1)  
                processes[idProcessToEdit-1].width = width
                processes[idProcessToEdit-1].right = right
            }

            getAndCreateBars(inputsData.length,processes)
            
        })
    })

    colors.forEach(color => {
        color.addEventListener("change",(e)=>{

            const newColor = color.value

            const idColorEdit = color.id.split('_')[1]

            processes[idColorEdit-1].color = newColor

            //get and create bars
            getAndCreateBars(inputsData.length,processes)
        })
    })

    backButton.addEventListener("click",async(e)=>{
        await fetch(dominio + '/apis/' + idWell + '/pse-table',{
            method:'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(processes)
        })
    })

})


