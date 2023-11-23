export function getAndCreateBars(barsQuantity,processes) {
    for (let i = 1; i <= barsQuantity; i++) {
        const bar =  document.getElementById('bar_' + i)
        bar.style.backgroundColor = processes[i-1].color
        bar.style.width = processes[i-1].width + 'px'
        bar.style.right = processes[i-1].right + 'px'
    }
}

export function getAndCompleteProcessDetail(processesQuantity,processes) {
    for (let i = 1; i <= processesQuantity; i++) {
        const processDetail =  document.getElementById('processDetail_' + i)
        processDetail.innerText = processes[i-1].processName
    }
}

export function getAndCompleteProcessInput(processesQuantity,processes) {
    for (let i = 1; i <= processesQuantity; i++) {
        const process =  document.getElementById('process_' + i)
        process.value = processes[i-1].processName
    }
}

export function changeColors(processes,colors) {
    for (let i = 1; i <= colors.length; i++) {
        colors[i-1].value = processes[i-1].color
    }
}

export function inputsValues(processes,inputs) {
    let j = 0
    for (let i = 0; i < inputs.length; i+=2) {
        inputs[i].value = processes[j].from
        inputs[i+1].value = processes[j].to

        if (processes[j].fromIsInvalid == 1) {
            inputs[i].classList.add('isInvalidPse')
        }else{
            inputs[i].classList.remove('isInvalidPse')
        }

        if (processes[j].toIsInvalid == 1) {
            inputs[i+1].classList.add('isInvalidPse')
        }else{
            inputs[i+1].classList.remove('isInvalidPse')
        }
        j += 1
    }
}


