function submit(){
    const nombre = document.getElementById('inNombre').value;
    const apellido = document.getElementById('inApellido').value
    const telefono = document.getElementById('inTelefono').value;
    const correo = document.getElementById('inCorreo').value;
    const direccion = document.getElementById('inDireccion').value;
    const descripcion = document.getElementById('txtDescripcion').value
    localStorage.setItem('nombre', nombre);
    localStorage.setItem('apellido', apellido);
    localStorage.setItem('telefono', telefono);
    localStorage.setItem('correo', correo);
    localStorage.setItem('direccion', direccion);
    localStorage.setItem('descripcion', descripcion);
    localStorage.setItem('tamanio', sessionStorage.getItem('tamanio'));
    localStorage.setItem('sabor', sessionStorage.getItem('sabor'));
    localStorage.setItem('dulce', sessionStorage.getItem('dulce'));
    localStorage.setItem('frutas', sessionStorage.getItem('frutas'));
    localStorage.setItem('total', sessionStorage.getItem('subTotal'));
    if(nombre.lenght>0 && apellido.lenght>0 && telefono.lenght>0 && correo.lenght>0 && direccion.lenght>0 && descripcion.lenght>0){
        cargaPaginas('contenedor', 'html/inicio.html');
    }else{
        window.alert("Debes llenar correctamente el formulario");
    }
    
}