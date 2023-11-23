export function pseTableCreateTable(processes) {

    const up1 = document.getElementById('up_1')
    const up2 = document.getElementById('up_2')
    const up3 = document.getElementById('up_3')
    const up4 = document.getElementById('up_4')

    up1.addEventListener("click",async(e)=>{
        const id = up1.id.split('_')[1]        
        if (id!=1) {
            const processToEdit1 = processes.filter(process => process.id == id)
            const position1 = processToEdit1[0].position
            const id2 = processes.filter(process => process.position == position1-1)[0].id
            processes[id-1].position = position1 - 1
            processes[id2-1].position = position1

            pseTableCreateTable(processes)
            pseTableCreateListeners(processes)
        }
    })
    
    up2.addEventListener("click",async(e)=>{
        const id = up2.id.split('_')[1]        
        if (id!=1) {
            const processToEdit1 = processes.filter(process => process.id == id)
            const position1 = processToEdit1[0].position
            const id2 = processes.filter(process => process.position == position1-1)[0].id
            processes[id-1].position = position1 - 1
            processes[id2-1].position = position1

            pseTableCreateTable(processes)

            const tr1 = document.getElementById('tr1')
            const tr2 = document.getElementById('tr2')
            const tr3 = document.getElementById('tr3')
            const tr4 = document.getElementById('tr4')

            console.log(tr1)

        }
    })

    up3.addEventListener("click",async(e)=>{
        const id = up3.id.split('_')[1]        
        if (id!=1) {
            const processToEdit1 = processes.filter(process => process.id == id)
            const position1 = processToEdit1[0].position
            const id2 = processes.filter(process => process.position == position1-1)[0].id
            processes[id-1].position = position1 - 1
            processes[id2-1].position = position1

            pseTableCreateTable(processes)
        }
    })

    up4.addEventListener("click",async(e)=>{
        const id = up4.id.split('_')[1]        
        if (id!=1) {
            const processToEdit1 = processes.filter(process => process.id == id)
            const position1 = processToEdit1[0].position
            const id2 = processes.filter(process => process.position == position1-1)[0].id
            processes[id-1].position = position1 - 1
            processes[id2-1].position = position1

            pseTableCreateTable(processes)
        }
    })


    
}



