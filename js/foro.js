// Añadir el campo de texto a una lista
function add_li(){
    var nuevoLi=document.getElementById("foro1").value;
    if(nuevoLi.length>0){
            var li=document.createElement('li');
            li.id=nuevoLi;
            li.innerHTML= nuevoLi.value;
            document.getElementById("forito").appendChild(li);

    }

    return false;
}
