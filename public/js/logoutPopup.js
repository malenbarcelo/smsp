window.addEventListener('load',async()=>{
    
    //logout popup
    const logout = document.getElementById('logout')
    const logoutPopup = document.getElementById('logoutPopup')    
    const logoutCancelButton = document.getElementById('logoutCancelButton')
    const logoutAcceptButton = document.getElementById('logoutAcceptButton')
    
    //return popup
    const returnButton = document.getElementById('returnButton')
    const returnPopup = document.getElementById('returnPopup')
    const returnCancelButton = document.getElementById('returnCancelButton')
    const returnAcceptButton = document.getElementById('returnAcceptButton')
    const backRoute = document.getElementById('backRoute') ? document.getElementById('backRoute').innerText : null

    //confirm data popup
    const validation = document.getElementById('validation') ? document.getElementById('validation').innerText : null
    const confirmDataPopup = document.getElementById('confirmDataPopup')    
    const okButton = document.getElementById('okButton')
    const type = document.getElementById('type') ? document.getElementById('type').innerText : null

    const processName = document.getElementById('processName').innerText
    const idWell = document.getElementById('idWell').innerText

    if (logout) {
        logout.addEventListener("click",async(e)=>{
            logoutAcceptButton.href = '/logout/' + processName + '/' + idWell    
            //Show popup
            logoutPopup.style.display = "block"    
        })
    }

    logoutCancelButton.addEventListener("click",async(e)=>{
        //hide popup
        logoutPopup.style.display = "none"
    })

    if (returnButton) {
        returnButton.addEventListener("click",async(e)=>{
            returnAcceptButton.href = backRoute    
            //Show popup
            returnPopup.style.display = "block"
        })
    }

    if (returnCancelButton) {
        returnCancelButton.addEventListener("click",async(e)=>{
            //hide popup
            returnPopup.style.display = "none"
        })
    }

    if (validation == 'passed' && type == 'validation') {
        //Show popup
        confirmDataPopup.style.display = "block"
    }

    if (okButton) {
        okButton.addEventListener("click",async(e)=>{
            //hide popup
            confirmDataPopup.style.display = "none"
        })
    }
    
})



