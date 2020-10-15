const options = {
    dragging:false,
    touchZoom:false,
    doubleClickZoom:false,
    scrollWheelZoom:false,
    zoomControl:false
} 

const map = L.map('mapid',options).setView([-27.222633,-49.6455874], 15)

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//create icon
const icon =L.icon({
    iconUrl:"./public/images/map-marker.svg",
    iconSize:[58,68],
    iconAnchor:[28,68],
    popupAnchor:[170,2]
})


L.marker([-27.222633,-49.6455874],{icon}).addTo(map)
    //.openPopup();

/*image gallary */

function selectImage(event){
   const button =event.currentTarget //pega o botão
   //remover a class active
   const buttons =document.querySelectorAll('.images button')
   buttons.forEach(removeActiveClass)

   function removeActiveClass(button){
        button.classList.remove("active")
   }

   //selecionar a imagem clicada
   const image = button.children[0]//pegando o filho do botão
   const imageContainer = document.querySelector('.orphanage-details > img')
   //atualizar o container de imah
   imageContainer.src =image.src
   //adicionar a class active para o botãoque foi clicado
   button.classList.add('active')
}