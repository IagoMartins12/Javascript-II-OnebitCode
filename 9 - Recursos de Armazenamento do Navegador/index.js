document.getElementById ('sessionBtn').addEventListener('click', function(){
    const input = document.getElementById ('session')
    sessionStorage.setItem('info',input.value)
    input.value = ''
})

document.getElementById ('readSesssion').addEventListener('click', function(){
    const info = sessionStorage.getItem('info')
    alert (info)
})

document.getElementById ('localBtn').addEventListener('click', function(){
    const input = document.getElementById ('local')
    localStorage.setItem('info',input.value)
    input.value = ''
})

document.getElementById ('readLocal').addEventListener('click', function(){
    const info = localStorage.getItem('info')
    alert (info)
})