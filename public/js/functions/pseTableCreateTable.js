export function pseTableCreateTable(processes) {

    const tr1 = document.getElementById('tr1')
    const tr2 = document.getElementById('tr2')
    const tr3 = document.getElementById('tr3')
    const tr4 = document.getElementById('tr4')

    //order by position
    function comparePositions(a, b) {
        return a.position - b.position;
    }
    const processesOrdered = processes.sort(comparePositions)

    //create table
    tr1.innerHTML = '<th class="iTh">Proceso</th><th class="iTh">' + processesOrdered[0].processName + '</th><th class="iTh"><input type="number" class="iInput"></th><th class="iTh"><input type="number" class="iInput"></th><th class="iTh2"><input type="color" value="' + processesOrdered[0].color + '" class="iColor"></th><th class="iTh2"><div class="iDivArrow"><i class="fa-solid fa-up-long iArrow" id="up_' + processesOrdered[0].id +  '"></i></div></th><th class="iTh2"><i class="fa-solid fa-down-long iArrow"></i></th>'

    tr2.innerHTML = '<th class="iTh">Proceso</th><th class="iTh">' + processesOrdered[1].processName + '</th><th class="iTh"><input type="number" class="iInput"></th><th class="iTh"><input type="number" class="iInput"></th><th class="iTh2"><input type="color" value="' + processesOrdered[1].color + '" class="iColor"></th><th class="iTh2"><div class="iDivArrow"><i class="fa-solid fa-up-long iArrow" id="up_' + processesOrdered[1].id +  '"></i></div></th><th class="iTh2"><i class="fa-solid fa-down-long iArrow"></i></th>'

    tr3.innerHTML = '<th class="iTh">Proceso</th><th class="iTh">' + processesOrdered[2].processName + '</th><th class="iTh"><input type="number" class="iInput"></th><th class="iTh"><input type="number" class="iInput"></th><th class="iTh2"><input type="color" value="' + processesOrdered[2].color + '" class="iColor"></th><th class="iTh2"><div class="iDivArrow"><i class="fa-solid fa-up-long iArrow" id="up_' + processesOrdered[2].id +  '"></i></div></th><th class="iTh2"><i class="fa-solid fa-down-long iArrow"></i></th>'

    tr4.innerHTML = '<th class="iTh">Proceso</th><th class="iTh">' + processesOrdered[3].processName + '</th><th class="iTh"><input type="number" class="iInput"></th><th class="iTh"><input type="number" class="iInput"></th><th class="iTh2"><input type="color" value="' + processesOrdered[3].color + '" class="iColor"></th><th class="iTh2"><div class="iDivArrow"><i class="fa-solid fa-up-long iArrow" id="up_' + processesOrdered[3].id +  '"></i></div></th><th class="iTh2"><i class="fa-solid fa-down-long iArrow"></i></th>'

    
}