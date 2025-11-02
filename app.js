document.addEventListener('keydown',(event)=>{

    document.getElementById(event.code).classList.add('pressed')
    
})

document.addEventListener('keyup',(event)=>{

    document.getElementById(event.code).classList.remove('pressed')
    
})