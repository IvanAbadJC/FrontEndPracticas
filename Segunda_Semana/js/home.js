function cargaPaginas(id, nombreArchivo){
    let xhttp;
    let elemento = document.getElementById(id);
    let archivo = nombreArchivo;
    if(archivo){
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function(){
        if(this.readyState == 4){
          if(this.status == 200 || this.status < 400){elemento.innerHTML = this.responseText;}
          if(this.status == 404){elemento.innerHTML = "<h1>404: Página no encontrada</h1>";}
        }
      }
      xhttp.open("GET", `${archivo}`, true);
      xhttp.send();
      return;
    }
}