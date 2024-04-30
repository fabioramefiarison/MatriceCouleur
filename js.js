function Get(id){
   return document.getElementById(id);
}
function ajoutCase(){
   const span = document.createElement("div");
   tab.appendChild(span);
   span.classList.add("table");
}

const Nombre = Get("nombre");
const color = Get("color");
const bouton = Get("bouton");
const tab = Get("table");


function colorer(){
   const cases = document.querySelector(".table");
   cases.addEventListener('click',()=>{
      cases.style.background = color.value;
   })
}

bouton.addEventListener('click',()=>{
for(let lig=1;lig<=Nombre.value;lig++){
   for(let col=1;col<=Nombre.value;col++){
    ajoutCase();    
   }
   const br = document.createElement("br");
   tab.appendChild(br);
}
colorer();
})

