const players = []

function Add(){
    const div = document.getElementById('res')
    if (div.children.length > 0){
        Clear()
    }
    ShowPositionPlayer()
    ShowPlayerName()
    ShowPlayerNumber()
    ShowAddButton()
}

function Remove(){
    const div = document.getElementById('res')
    if (div.children.length > 0 ){
        Clear()
    }
    ShowRemovePlayer()
    ShowRemoveButton()
}

function Clear(){
    const div = document.getElementById('res')
    const select = document.getElementsByTagName('select')
    const h3 = document.getElementsByTagName('h3')
    const input = document.getElementsByTagName('input')
    const button = document.getElementsByTagName('button')
    const br = document.getElementsByTagName('br')

    if (select.length >0){
        div.removeChild(select[select.length - 1])
    }

    for (let i = 0; h3.length > 0 ; i++){
        div.removeChild(h3[0])
    }

    for(let i = 0; input.length > 0; i++){
        div.removeChild(input[0])
    }

    for(let i = 0; br.length > 0; i++){
        div.removeChild(br[0])
    }

    div.removeChild(button[button.length - 1])  
   
}
//Adicionar
//Mostrar o select para selecionar a posição do jogador
function ShowPositionPlayer(){
    const div = document.getElementById('res')
    const select = document.createElement('select')
    select.id = "playerSelect"

    const h3 = document.createElement('h3')
    h3.innerText = 'Escolha a posição do jogador: '

    const option = document.createElement('option')
    option.value = 'position_1'
    option.innerText = 'Goleiro'

    const option2 = document.createElement('option')
    option2.value = 'position_2'
    option2.innerText = 'Zagueiro'

    const option3 = document.createElement('option')
    option3.value = 'position_3'
    option3.innerText = 'Lateral'

    const option4 = document.createElement('option')
    option4.value = 'position_4'
    option4.innerText = 'Meio-Campo'

    const option5 = document.createElement('option')
    option5.value = 'position_5'
    option5.innerText = 'Atacante'

    select.appendChild(document.createElement('br'))

    select.append(option,option2,option3,option4,option5)
    div.append(h3,select)

}

//Mostrar o input para capturar o nome do jogador
function ShowPlayerName(){
    const div = document.getElementById('res')

    const h3 = document.createElement('h3')
    h3.innerText = 'Nome do jogador: '

    const input = document.createElement('input')
    input.type = 'text'
    input.id = 'playerName'

    div.append(h3,input)
}

//Mostrar o input para capturar o numero do jogador
function ShowPlayerNumber(){
    const div = document.getElementById('res')

    const h3 = document.createElement('h3')
    h3.innerText = 'Numero do jogador: '

    const input = document.createElement('input')
    input.type = 'number'
    input.id = 'playerNumber'

    div.append(h3,input)
}

//Mostrar o button 
function ShowAddButton(){
    const div = document.getElementById('res')

    const button = document.createElement('button')
    button.id = 'buttonPlayer'
    button.innerText = 'Escalar'
    button.setAttribute("onclick", "Show()")

    div.append(document.createElement('br'),button)

}

//Confirmação dos dados do jogador
function Show(){
    const player = {}
    const select = document.getElementById('playerSelect')
    const opcaoTexto = select.options[select.selectedIndex].text

    const playerNameTxt = document.getElementById('playerName')
    const playerName = playerNameTxt.value

    const playerNumberTxt = document.getElementById('playerNumber')
    const playerNumber =  playerNumberTxt.value

    player.playerName = playerName
    player.playerNumber = playerNumber
    player.playerPosition = opcaoTexto


    let contador = CheckNumber(playerNumber)
    if (contador >= 1) {
        alert ("Ja existe jogador cadastrado com esse numero!")
    } else {
        let confirmacao = confirm (`Confirmar jogador: \n\n\nNome do jogador: ${playerName} \nNumero do jogador: ${playerNumber} \nPosição do jogador: ${opcaoTexto}`)

        if (confirmacao){
            players.push(player)
            AddPlayer()
            clearEscalateDiv()
        } else {
            clearEscalateDiv()
        }
    }

}

//Adicionando o jogador ao div de resposta
function AddPlayer(){
    let playerSection = document.getElementById('list')

    ClearList()
    for (let i = 0; i < players.length; i++){
        const h4 = document.createElement('h4')
        h4.innerText = 'Jogador escalado'

        const ul = document.createElement('ul')

        const nameLi = document.createElement('li')
        nameLi.innerText = `Nome: ${players[i].playerName}`

        const positionLi = document.createElement('li')
        positionLi.innerText = `Posição: ${players[i].playerPosition}`

        const numberLi = document.createElement('li')
        numberLi.innerText = `Numero: ${players[i].playerNumber}`
        

        ul.append(nameLi,positionLi,numberLi)
        playerSection.append(h4,ul)
    }
}

//Limpando a div de escalar jogador
function clearEscalateDiv(){
    const div = document.getElementById('res')
    const select = document.getElementsByTagName('select')
    const h3 = document.getElementsByTagName('h3')
    const input = document.getElementsByTagName('input')
    const button = document.getElementsByTagName('button')
    const br = document.getElementsByTagName('br')

    div.removeChild(select[select.length - 1])

    for (let i = 0; h3.length > 0 ; i++){
        div.removeChild(h3[0])
    }

    for(let i = 0; input.length > 0; i++){
        div.removeChild(input[0])
    }

    for(let i = 0; br.length > 0; i++){
        div.removeChild(br[0])
    }

    div.removeChild(button[button.length - 1])  
   
}

//Limpando a lista 
function ClearList(){
    const div = document.getElementById('list')
    const h4 = document.getElementsByTagName('h4')
    const ul = document.getElementsByTagName('ul')
    const li = document.getElementsByTagName('li')

    for (let i = 0; h4.length > 0 ; i++){
        div.removeChild(h4[0])
    }

    for (let i = 0; ul.length > 0 ; i++){
        div.removeChild(ul[0])
    }

    for (let i = 0; li.length > 0 ; i++){
        div.removeChild(li[0])
    }

}

//Remover
//Limpando a div de remover jogador
function clearRemovedDiv(){
    const div = document.getElementById('res')
    const h3 = document.getElementsByTagName('h3')
    const input = document.getElementsByTagName('input')
    const button = document.getElementsByTagName('button')
    const br = document.getElementsByTagName('br')

    for (let i = 0; h3.length > 0 ; i++){
        div.removeChild(h3[0])
    }

    for(let i = 0; input.length > 0; i++){
        div.removeChild(input[0])
    }

    for(let i = 0; br.length > 0; i++){
        div.removeChild(br[0])
    }

    div.removeChild(button[button.length - 1])  
}

//Mostrando o input para capturar o numero do jogador a ser removido
function ShowRemovePlayer(){
    const div = document.getElementById('res')

    const h3 = document.createElement('h3')
    h3.innerText = 'Numero do jogador: '

    const input = document.createElement('input')
    input.type = 'number'
    input.id = 'playerNumber'

    div.append(h3,input)
}

//Mostrando o button para remover o jogador 
function ShowRemoveButton(){
    const div = document.getElementById('res')

    const button = document.createElement('button')
    button.id = 'buttonPlayer'
    button.innerText = 'Remover'
    button.setAttribute("onclick", "RemovePlayer()")


    div.append(document.createElement('br'),button)

}

function RemovePlayer(){
    const input = document.getElementById('playerNumber')
    const inputValor = input.value 
    let indice = Number

    let contador = CheckNumber(inputValor)

    if (contador == 0){
        alert ('Não foi encontrado jogador com esse numero!')
    } else {
        for (let i = 0; i < players.length; i++){
            if (players[i].playerNumber == inputValor){
                indice = i
            }
        }

        let confirmacao = confirm (`Remover jogador: \n\n\nNome do jogador: ${players[indice].playerName} \nNumero do jogador: ${players[indice].playerNumber} \nPosição do jogador: ${players[indice].playerPosition}`)


        if (confirmacao){
            clearRemovedDiv()
            players.splice(indice,1)
            AddPlayer()
        } else {
            clearRemovedDiv()
        }
    }
}

function CheckNumber(inputValor){
    let contador = 0
    for (let i = 0; i < players.length; i++){
        if (players[i].playerNumber == inputValor){
            contador += 1
        }
    }

    return contador

}