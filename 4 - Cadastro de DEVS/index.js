const button = document.getElementById('addButton')
button.addEventListener('click', AddTecnology)
const tecnology = []

//Adicionando

//Criar a area principal, que irá solicitar o nome do dev
function AddTecnology(){
    const DivDevTecnology = document.getElementById('devTecnology')
    const hr2 = document.getElementsByTagName('hr')
    const tecnologyList = document.getElementById('tecnologyList')
    console.log (DivDevTecnology.children.length)
    if (DivDevTecnology.children.length <= 1){
        const h3 = document.createElement('h3')
        h3.innerText = 'Cadastrar tecnologia:'

        const inputTecnology = document.createElement('input')
        inputTecnology.type = 'text'
        inputTecnology.id = 'inputTecnology'

        const hr = document.createElement('hr')
        const br = document.createElement('br')
        if (hr2.length > 0){
            DivDevTecnology.append(h3)
        } else {
            DivDevTecnology.append(hr,h3)
        }
        CreateInput(DivDevTecnology)
        CreateRadio(DivDevTecnology)
        CreateYesButton(br,DivDevTecnology)
        if (tecnologyList.children.length > 0){
            DivDevTecnology.appendChild(hr)
        }
    } 
}

//Criar o input que irá solicitar o nome da tecnologia
function CreateInput(div){
    const h4 = document.createElement('h4')
    h4.innerText = 'Nome da tecnologia:'

    const inputTecnology = document.createElement('input')
    inputTecnology.type = 'text'
    inputTecnology.id = 'inputTecnology'

    div.append(h4,inputTecnology)
}

//Função para criar os inputs do radio
function CreateInputForRadio(id,value,name,type = 'text',placeholder = ''){
    const input = document.createElement('input')
    input.id = id 
    input.value = value 
    input.name = name
    input.type = type
    input.placeholder = placeholder
    return input 
}

function CreateLabel(text, htmlFor){
    const label = document.createElement('label')
    label.htmlFor = htmlFor
    label.innerText = text
    return label
}

//Criar o radio de tempo de experiencias 
function CreateRadio(div){
    let radio1 = CreateInputForRadio('radio1','0-2 anos','devTime','radio') 
    let radio2 = CreateInputForRadio('radio2','3-4 anos','devTime','radio')
    let radio3 = CreateInputForRadio('radio3','5+ anos','devTime','radio') 

    let label1 = CreateLabel('0-2 Anos', 'radio1')
    let label2 = CreateLabel('3-4 Anos', 'radio2')
    let label3 = CreateLabel('5+ Anos', 'radio3')

    const h4 = document.createElement('h4')
    h4.innerText = 'Tempo de experiencia: :'

    div.append(h4)
    div.append(radio1,label1);
    div.append(radio2,label2);
    div.append(radio3,label3);

}

//Inserir as informações no array 
function SaveTecnology(){
    const devTecnology = {}

    const devName = document.getElementById('devName').value
    const tecnologyName = document.getElementById('inputTecnology').value
    const tecnologyTime = document.querySelector('input[name=devTime]:checked').value

    devTecnology.devName = devName
    devTecnology.tecnologyName = tecnologyName
    devTecnology.tecnologyTime = tecnologyTime
    tecnology.push(devTecnology)
    CreateDivForList()
}

//Confirmação para salvar as informações
function ConfirmSaveTecnology(){
    const confirmation = confirm ("Deseja salvar essa tecnologia? ")
    if (confirmation){
        SaveTecnology()
        ClearRegisterTecnology()
    }
}

//Criando botão para inserir a tecnologia 
function CreateYesButton(br,div){
    const yButton = document.createElement('button')
    yButton.innerText = 'Cadastrar'
    yButton.id = 'yButton'
    yButton.addEventListener('click', ConfirmSaveTecnology)
    div.append(br,yButton)
}

//Criando a div para inserir as tecnologias
function CreateDivForList(){
    const tecnologyList = document.getElementById('tecnologyList')
    CreateList(tecnologyList)
}

//Inserindo os itens que estão no array de tecnologias na div 
function CreateList(tecnologyList){
    ClearDiv(tecnologyList)
    const devName = (document.getElementById('devName'))
    devName.value = ""

    for (let i = 0; i < tecnology.length;i++){
        const ul = document.createElement('ul')
        const li = document.createElement('li')
        const newDiv = document.createElement('div')
        const hr = document.createElement('hr')
        const h4 = document.createElement('h4')
        h4.innerText = `Cadastro ${i + 01}:` 
        newDiv.id =  i
        li.innerText = `Dev ${tecnology[i].devName}: \nTecnologia: ${tecnology[i].tecnologyName} \nTempo de experiencia: ${tecnology[i].tecnologyTime}`
        
        ul.appendChild(li)
        newDiv.append(h4,ul)
        tecnologyList.appendChild(newDiv)
        CreateAlterationButton(newDiv)
        CreateXButton(newDiv)
    }
}

//Limpando a div de mostrar as tecnoligas
function ClearDiv(tecnologyList){
    let first = tecnologyList.firstElementChild
    while (first){
        first.remove()
        first = tecnologyList.firstElementChild
    }
}

//Excluindo
//Botão de excluir a tecnologia
function CreateXButton(newDiv){
    const xButton = document.createElement('button')
    xButton.textContent = 'X'
    xButton.id = 'xButton'
    xButton.addEventListener('click', function(ev){
        const button = (ev.currentTarget)
        let indice = Number(button.parentNode.id)
        const confirmation = confirm ("Deseja excluir essa tecnologia? ")
        if (confirmation){
            tecnology.splice(indice,1)
            CreateDivForList()
        }
    })
    newDiv.append(xButton)
}


//Alterando
//Limpando a div de Inserir tecnologia
function ClearRegisterTecnology(){
    const div = document.getElementById('devTecnology')
    const h4 = document.getElementsByTagName('h4')
    const h3 = document.getElementsByTagName('h3')
    const input = document.getElementById('inputTecnology')
    const button = document.getElementById('yButton')
    const br = document.getElementsByTagName('br')
    const hr = document.getElementsByTagName('hr')
    const radio = document.getElementsByName('devTime')
    const label = document.getElementsByTagName('label')

    for (let i = 0; i < 2; i++){
        div.removeChild(h4[0])
    }
    

    for (let i = 0; h3.length > 0 ; i++){
        div.removeChild(h3[0])
    }

    div.removeChild(input)
    div.removeChild(button)  
    div.removeChild(br[1])

    if (hr.length > 1){
        div.removeChild(hr[0])
    }
    for (let i = 0; radio.length > 0 ; i++){
        div.removeChild(radio[0])
    }
    

    for (let i = 0; label.length > 1 ; i++){
        div.removeChild(label[1])
    }
}

//Criar botão de alterar
function CreateAlterationButton(newDiv){
    const alterButton = document.createElement('button')
    alterButton.textContent = '🖌'
    alterButton.id = 'alterButton'
    alterButton.addEventListener('click', function(ev){
        const button = (ev.currentTarget)
        let indice = Number(button.parentNode.id)
        let confirmation = confirm ('Deseja alterar esse registro?')
        if (confirmation){
            DivAlterTecnology(indice)
        }
    })
    newDiv.append(alterButton)
    
}

//Mostrando a div para fazer a alteração
function DivAlterTecnology(indice){
    const DivDevTecnology = document.getElementById('devTecnology')
    const hr2 = document.getElementsByTagName('hr')
    const tecnologyList = document.getElementById('tecnologyList')
    console.log (DivDevTecnology.children.length)
    if (DivDevTecnology.children.length <= 1){
        const h3 = document.createElement('h3')
        h3.innerText = 'Cadastrar tecnologia:'

        const inputTecnology = document.createElement('input')
        inputTecnology.type = 'text'
        inputTecnology.id = 'inputTecnology'

        const hr = document.createElement('hr')
        const br = document.createElement('br')
        if (hr2.length > 0){
            DivDevTecnology.append(h3)
        } else {
            DivDevTecnology.append(hr,h3)
        }
        CreateInput(DivDevTecnology)
        CreateRadio(DivDevTecnology)
        CreateAlterYesButton(br,DivDevTecnology,indice)
        if (tecnologyList.children.length > 0){
            DivDevTecnology.appendChild(hr)
        }
    } 
}

//Criando o botão de confirmação de alterar 
function CreateAlterYesButton(br,div,indice){
    const yButton = document.createElement('button')
    yButton.innerText = 'Alterar'
    yButton.id = 'yButton'
    yButton.addEventListener('click', function(){
        const confirmation = confirm ("Deseja alterar essa tecnologia?")
        if (confirmation){
            AlterTecnology(indice)
        }
    })
    
    div.append(br,yButton)
}

//Alterando os dados e limpando a div
function AlterTecnology(indice){
    const tecnologyName = document.getElementById('inputTecnology').value
    const tecnologyTime = document.querySelector('input[name=devTime]:checked').value
    const tecnologyList = document.getElementById('tecnologyList')

    tecnology[indice].tecnologyName = tecnologyName
    tecnology[indice].tecnologyTime = tecnologyTime
    ClearRegisterTecnology()
    CreateList(tecnologyList)
}
