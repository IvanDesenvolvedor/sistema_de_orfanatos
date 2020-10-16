const map = L.map('mapid').setView([-27.222633,-49.6455874], 15)

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//create icon
const icon =L.icon({
    iconUrl:"./public/images/map-marker.svg",
    iconSize:[58,68],
    iconAnchor:[28,68],
})

let marker;

//creat and add marker
map.on('click',(event) => {
   const lat = event.latlng.lat;
   const lng =event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

   //remove icon
   marker && map.removeLayer(marker)//caso existir ele remove
   //add icon layer
   marker = L.marker([lat,lng], { icon })
   .addTo(map)//adiciona o incone ao mapa
})

//adicionar campo de fotos de fotos
function addPhotoField(){
    //pegar o container de fotos
    const container = document.querySelector('#images')
    //pegar o container para duplicar
    const fieldsContainer = document.querySelectorAll('.new-upload')
    //realizar o clone da ultima imagem adicionada
    const newFieldContainer =fieldsContainer[fieldsContainer.length - 1].cloneNode(true)
    //verificar seo campo está vazio, se sim não adicionar
    const input =newFieldContainer.children[0]
    
    if(input.value == ""){
       return //para aplicação
    }
    
    //limpar o campo antes de adicionar aocontainer
    input.value = ""
    //adicionar o clone ao container de imagens
    container.appendChild(newFieldContainer)
}

function deleteField(event){
   const span =event.currentTarget
   const fieldsContainer = document.querySelectorAll('.new-upload')
   if(fieldsContainer.length < 2){
       //limpar o valor do campo, pega o fihlo do primeiro campo e limpa
       span.parentNode.children[0].value = "";
      return
   }
   //deletar o campo
   span.parentNode.remove();
}

//troca do sim e não
function toggleSelect(event){
    //pegar o botão clicado

   

   
    //retirar a class active dos botões
    document.querySelectorAll('.button-select button')
    .forEach((button) =>  button.classList.remove('active'))
    //colocar a class active nesse botão clicado
    const button =event.currentTarget
    button.classList.add('active')
     //atualizar o meu input hidden com o valor selecionado
     const input =document.querySelector('[name="open-on-weekends"]')
      //verificar se é sim ou não
      input.value = button.dataset.value
}
