sessionStorage.clear();
function menu(checkbox) {
    let checkboxes = document.getElementsByName(checkbox.name);
    for(i=0; i<checkboxes.length; i++){
        if (checkboxes[i] !== checkbox){
            if(checkbox.checked){
                checkboxes[i].disabled = true; 
                document.getElementById(checkboxes[i].value).disabled = true;
            }else{
                checkboxes[i].disabled = false; 
                document.getElementById(checkboxes[i].value).disabled = false;
            }
            
        }else{ 
            precio(checkbox);
            carrito(checkbox);
        }
    }
}

function carrito(checkbox) {
    if(checkbox.value == sessionStorage.getItem(checkbox.name)){
        sessionStorage.removeItem(checkbox.name);
    }else{
        sessionStorage.setItem(checkbox.name, checkbox.value);
    }
    muestraCarrito();
}

function precio(checkbox){
    let subTotalActual = (sessionStorage.getItem('subTotal')!==null ? parseInt(sessionStorage.getItem('subTotal')):0);
    let precio = parseInt(document.getElementById(checkbox.value).value);
    if(checkbox.checked){
        document.getElementById(checkbox.value).checked = true;      
        let subTotal = subTotalActual + precio;
        sessionStorage.setItem('subTotal', subTotal);
    }else if(!checkbox.checked){
        document.getElementById(checkbox.value).checked = false;
        let subTotal = subTotalActual - precio;
        sessionStorage.setItem('subTotal', subTotal);
    }
}

function validaTamaño(){
    if(sessionStorage.getItem('tamanio')!==null){
        return sessionStorage.getItem('tamanio').toUpperCase();
    }else{
        return '';
    }
}

function validaSabor(){
    if(sessionStorage.getItem('sabor')!==null){
        return sessionStorage.getItem('sabor').toUpperCase();
    }else{
        return '';
    }
}

function validaDulce(){
    if(sessionStorage.getItem('dulce')!==null){
        return sessionStorage.getItem('dulce').toUpperCase();
    }else{
        return '';
    }
}

function validaFrutas(){
    if(sessionStorage.getItem('frutas')!==null){
        return sessionStorage.getItem('frutas').toUpperCase();
    }else{
        return '';
    }
}

function obtieneTotal(){
    if(sessionStorage.getItem('subTotal')!==null){
        return sessionStorage.getItem('subTotal').toUpperCase();
    }else{
        return 0;
    }
}

function muestraCarrito(){
    document.getElementById('pastelesCardCarrito').innerHTML='';
    document.getElementById('pastelesCardCarrito').innerHTML+='<div class="carrito">\n' +
    '<h3>Orden actual</h3>\n' +
    `<p>Tamaño: ${validaTamaño()}</p>\n` +
    `<p>Sabor: ${validaSabor()}</p>\n` +
    '<p>Adornos:</p>\n' +
    '<ul>\n' +
        `<li> - ${validaDulce()}</li>\n` +
        `<li> - ${validaFrutas()}</li>\n` +
    '</ul>\n' +
    '<br>\n' +
    `<p>Sub-Total: ${obtieneTotal()}</p>\n` +
    '</div>\n' +
    `<button onclick="continuarOrden()">Ordenar</button>\n`;;
}

function continuarOrden(){
    const tamanio = (sessionStorage.getItem('tamanio')==null)?'':sessionStorage.getItem('tamanio');
    const sabor = (sessionStorage.getItem('sabor')==null)?'':sessionStorage.getItem('sabor');
    const dulces =  (sessionStorage.getItem('dulce')==null)?'':sessionStorage.getItem('dulce');
    const fruta = (sessionStorage.getItem('frutas')==null)?'':sessionStorage.getItem('frutas');

    if(tamanio.length > 0 && sabor.length > 0){
        if(dulces.length > 0 || fruta.length > 0){
            cargaPaginas('contenedor', 'datos.html');
        }else{
            window.alert("Debes elegir por lo menos un ardono: Dulces o Frutas")
        }
    } else{
        window.alert("Debes elegir un tamaño y sabor para tu pastel");
    }
}