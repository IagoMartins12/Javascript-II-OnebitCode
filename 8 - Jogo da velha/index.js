const main = document.querySelector('main')
const root = document.querySelector(':root')

let contador = 0
let jaFoiRodado = false
let jaFoiClicado = 0 

function Start(){
    ClearButton()
    ReableButton() 

    let firstPlayer = prompt ('Qual o nome do primeiro jogador? ')
    let secondPlayer = prompt ('Qual o nome do segundo jogador? ')
    InsertTextOnButton(firstPlayer,secondPlayer)
}


function InsertTextOnButton(firstPlayer,secondPlayer){
    let input = document.getElementById('result')
    input.value = `Vez do jogador: ${firstPlayer} (X)`

    if (jaFoiRodado){
        document.querySelectorAll('.charKey').forEach(function(charKeyBtn){
            console.log ('removendo')
            charKeyBtn.removeEventListener('click', Insert())
        })

        document.querySelectorAll('.charKey').forEach(function(charKeyBtn){
            console.log ('teste')
            Insert(firstPlayer,secondPlayer,charKeyBtn)
        })

    } else {
        document.querySelectorAll('.charKey').forEach(function(charKeyBtn){
            Insert(firstPlayer,secondPlayer,charKeyBtn)
        })
    }
}

function Insert(firstPlayer,secondPlayer,charKeyBtn){
    charKeyBtn.addEventListener('click', function(){
        if (charKeyBtn.innerText === 'X' || charKeyBtn.innerText === 'O') {
            alert ('Lugar ja preenchido!')
            return
        } else {
            if (contador % 2 == 0){
                charKeyBtn.innerText = 'X'
            } else {
                charKeyBtn.innerText = 'O'
            }  
        }
        contador++
        PlayerTurn(contador,firstPlayer, secondPlayer)
        CheckWinner(firstPlayer,secondPlayer)
    })
}

function InsertAgain(charKeyBtn){
    charKeyBtn.removeEventListener('click', Insert())
}

function CheckWinner(firstPlayer,secondPlayer){
    let winner = CheckResult(firstPlayer, secondPlayer)
    if (winner == true){
        DisableButton()
        contador = 0
        jaFoiClicado = 1
        jaFoiRodado = true
    }

    let button = document.getElementById('playAgainBtn')

    if (jaFoiClicado == 1){
        button.removeEventListener('click',StartAgain)
    }

    button.addEventListener('click',StartAgain)
}

function StartAgain(){
    Start()
}

function PlayerTurn(contador,firstPlayer,secondPlayer){
    let input = document.getElementById('result')

    if (contador % 2 == 0){
        input.value = `Vez do jogador: ${firstPlayer} (X)`
    } else {
        input.value = `Vez do jogador: ${secondPlayer} (O)`
    }

}

function ClearButton(){
    for (let i = 1;i <= 9;i++){
        document.querySelectorAll('.charKey').forEach(function(charKeyValue){
            charKeyValue.innerText = ''
        })
    }

}

function DisableButton(){
    for (let i = 1;i <= 9;i++){
        document.querySelectorAll('.charKey').forEach(function(charKeyValue){
            charKeyValue.disabled = true
        })
    }
}

function ReableButton(){
    for (let i = 1;i <= 9;i++){
        document.querySelectorAll('.charKey').forEach(function(charKeyValue){
            charKeyValue.disabled = false
        })
    }
}

function CheckResult(firstPlayer, secondPlayer){
    let pos1 = document.getElementById('pos1')
    let pos2 = document.getElementById('pos2')
    let pos3 = document.getElementById('pos3')
    let pos4 = document.getElementById('pos4')
    let pos5 = document.getElementById('pos5')
    let pos6 = document.getElementById('pos6')
    let pos7 = document.getElementById('pos7')
    let pos8 = document.getElementById('pos8')
    let pos9 = document.getElementById('pos9')

    let winner = false
    let winnerX = false
    let winnerO = false
    
    let input = document.getElementById('result')

    // X
    if (pos1.innerText == 'X' & pos2.innerText == 'X' & pos3.innerText == 'X'){
        input.value = (firstPlayer + ' Venceu!!!')
        winner = true
        winnerX = true
    } else if (pos1.innerText == 'X' & pos4.innerText == 'X' & pos7.innerText == 'X'){
        input.value = (firstPlayer + ' Venceu!!!')
        winner = true
        winnerX = true
    } else if (pos1.innerText == 'X' & pos5.innerText == 'X' & pos9.innerText == 'X'){
        input.value = (firstPlayer + ' Venceu!!!')
        winner = true
        winnerX = true
    } else if (pos4.innerText == 'X' & pos5.innerText == 'X' & pos6.innerText == 'X'){
        input.value = (firstPlayer + ' Venceu!!!')
        winner = true
        winnerX = true
    } else if (pos7.innerText == 'X' & pos8.innerText == 'X' & pos9.innerText == 'X'){
        input.value = (firstPlayer + ' Venceu!!!')
        winner = true
        winnerX = true
    } else if (pos2.innerText == 'X' & pos5.innerText == 'X' & pos8.innerText == 'X'){
        input.value = (firstPlayer + ' Venceu!!!')
        winner = true
        winnerX = true
    } else if (pos3.innerText == 'X' & pos6.innerText == 'X' & pos9.innerText == 'X'){
        input.value = (firstPlayer + ' Venceu!!!')
        winner = true
        winnerX = true
    } else if (pos7.innerText == 'X' & pos5.innerText == 'X' & pos3.innerText == 'X'){
        input.value = (firstPlayer + ' Venceu!!!')
        winner = true
        winnerX = true
    } 
    
    // O
    else if (pos1.innerText == 'O' & pos2.innerText == 'O' & pos3.innerText == 'O'){
        input.value = (secondPlayer + ' Venceu!!!')
        winner = true
        winnerO = true
    } else if (pos1.innerText == 'O' & pos4.innerText == 'O' & pos7.innerText == 'O'){
        input.value = (secondPlayer + ' Venceu!!!')
        winner = true
        winnerO = true
    } else if (pos1.innerText == 'O' & pos5.innerText == 'O' & pos9.innerText == 'O'){
        input.value = (secondPlayer + ' Venceu!!!')
        winner = true
        winnerO = true
    } else if (pos4.innerText == 'O' & pos5.innerText == 'O' & pos6.innerText == 'O'){
        input.value = (secondPlayer + ' Venceu!!!')
        winner = true
        winnerO = true
    } else if (pos7.innerText == 'O' & pos8.innerText == 'O' & pos9.innerText == 'O'){
        input.value = (secondPlayer + ' Venceu!!!')
        winner = true
        winnerO = true
    } else if (pos2.innerText == 'O' & pos5.innerText == 'O' & pos8.innerText == 'O'){
        input.value = (secondPlayer + ' Venceu!!!')
        winner = true
        winnerO = true
    } else if (pos3.innerText == 'O' & pos6.innerText == 'O' & pos9.innerText == 'O'){
        input.value = (secondPlayer + ' Venceu!!!')
        winner = true
        winnerO = true
    } else if (pos7.innerText == 'O' & pos5.innerText == 'O' & pos3.innerText == 'O'){
        input.value = (secondPlayer + ' Venceu!!!')
        winner = true
        winnerO = true
    } 

    //Empate
    if (contador == 9 & winnerO == false & winnerX == false){
        input.value = ('empate')
        winner = true
    }

    return winner
}

document.getElementById('themeSwitcher').addEventListener('click', function (){
    if (main.dataset.theme === 'dark'){
        root.style.setProperty('--bg-color','#f1f5f9')
        root.style.setProperty('--border-color','#aaa')
        root.style.setProperty('--font-color','#212529')
        root.style.setProperty('--primary-color','#26834a')
        main.dataset.theme ='light'
    } else {
        root.style.setProperty('--bg-color','#212529')
        root.style.setProperty('--border-color','#666')
        root.style.setProperty('--font-color','#f1f5f9')
        root.style.setProperty('--primary-color','#4dff91')
        main.dataset.theme ='dark'
    }
})