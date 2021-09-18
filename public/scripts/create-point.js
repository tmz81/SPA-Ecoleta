//get states
function populateUFs() {
  const ufSelect = document.querySelector('select[name=uf]')

  fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
  .then(res => res.json())
  .then(states => {
    for(const state of states) {
      ufSelect.innerHTML += `<option value="${state.id}">${state.nome}</option>`
    }
  })
}
populateUFs()

//get city
function getCities(event) {
  const citySelect = document.querySelector('[name=city]')
  const stateInput = document.querySelector('[name=state]')
  const ufValue = event.target.value
  const indexState = event.target.selectedIndex
  stateInput.value = event.target.options[indexState].text

  const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`

  citySelect.innerHTML = '<option values>Selecione a Cidade</option>'
  citySelect.disabled = true

  fetch(url)
  .then(res => res.json())
  .then(cities => {
    for(const city of cities) {
      citySelect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`
    }

    citySelect.disabled = false
  })  
}

document
  .querySelector('select[name=uf]')
  .addEventListener('change', getCities)

//get all li
const itemsCollect = document.querySelector('.items-grid li')

for(const item of itemsCollect) {
  item.addEventListener('click', handleSelectedItem)
}


const itemsOfCollected = document.querySelector('input[name=items]')

let selectedItems = []

function handlerSelectedItem(event) {
  const itemLi = event.target

  itemLi.classList.toggle('selected')

  const itemId = itemLi.dataset.id

  const alreadySelected = selectedIItems.findIndex(item => {
    const itemFound = item == itemId
    return itemFound
  })

  if(alreadySelected >= 0) {
    const filteredItems = selectedItems.find(item => {
      const itemIsDifferent = item != itemId
      return itemIsDifferent
    })

    selectedItems = filteredItems
  } else {
    selectedItem.push(itemId)
  }

  
  collectedItems.value = selectedItems
}