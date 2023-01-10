function CreateLabel(text, htmlFor){
    const label = document.createElement('label')
    label.htmlFor = htmlFor
    label.innerText = text
    return label
}

function CreateInput(id,value,name,type = 'text',placeholder = ''){
    const input = document.createElement('input')
    input.id = id 
    input.value = value 
    input.name = name
    input.type = type
    input.placeholder = placeholder
    return input 
}

const addTechBtn = document.getElementById('addTechBtn')
const form = document.getElementById('devForm')
const developers = []
let inputRows = 0

addTechBtn.addEventListener('click', function (ev){
    const stackInputs = document.getElementById('stackInput')
    const newRow = document.createElement('li')
    const rowIndex = inputRows
    inputRows++
    newRow.id = 'inputRow-' + rowIndex
    newRow.className = 'inputRow'

    const techNameLabel = CreateLabel('Nome: ', 'techName: ' + rowIndex)
    const techNameInput = CreateInput('techName-' + rowIndex, null,'techName')

    const expLabel = CreateLabel("Experiencia: ")

    const id1 = 'expRadio-' + rowIndex + '.1'
    const expradio1 = CreateInput(id1,'0-2 anos', 'techExp-' + rowIndex,'radio')
    const expLabel1 = CreateLabel('0-2 anos',id1)

    const id2 = 'expRadio-' + rowIndex + '.2'
    const expradio2 = CreateInput(id2,'3-4 anos', 'techExp-' + rowIndex,'radio')
    const expLabel2 = CreateLabel('3-4 anos',id2)

    const id3 = 'expRadio-' + rowIndex + '.3'
    const expradio3 = CreateInput(id3,'5+ anos', 'techExp-' + rowIndex,'radio')
    const expLabel3 = CreateLabel('5+ anos', id3)

    const removeRowBtn = document.createElement('button')
    removeRowBtn.type = 'button'
    removeRowBtn.innerText = 'Remover'
    removeRowBtn.addEventListener('click', function(){
        stackInputs.removeChild(newRow)
    })

    newRow.append(
        techNameLabel,techNameInput,expLabel,expradio1,expLabel1,expradio2,expLabel2,expradio3,expLabel3,removeRowBtn
    )

    stackInputs.appendChild(newRow)
})

form.addEventListener('submit', function(ev){
    ev.preventDefault()

    const fullNameInput = document.getElementById('fullName')
    const inputRows = document.querySelectorAll('.inputRow')

    let technologies = []

    inputRows.forEach(function(row){
        console.log (row.id)
        console.log(document.getElementById('techName-0').value)
        const techName = document.querySelector('#'+ row.id + ' input[name="techName"]').value
        const techExp = document.querySelector('#' + row.id + ' input[type="radio"]:checked').value

        technologies.push({name: techName, exp: techExp})
    })


    const newDev = {fullname: fullNameInput.value, technologies: technologies}
    developers.push(newDev)
    alert ('Dev cadastrado com sucesso')
    fullNameInput.value = ""
    inputRows.forEach(function(row){
        row.remove()
    })

    console.log(developers)
})

