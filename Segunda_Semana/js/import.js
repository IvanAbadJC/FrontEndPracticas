/**
 * Script que importa archivos html en etiquetas con propiedad "data-include":
 * Busca la propiedad "data-include" y procede a buscar el archivo especificado.
 */
document.addEventListener("DOMContentLoaded", (e) => {
    const includeHTML = (el, url) => {
      const xhr = new XMLHttpRequest();
  
      xhr.addEventListener("readystatechange", (e) => {
        if (xhr.readyState !== 4) return;
  
        if (xhr.status >= 200 && xhr.status < 300) {
          el.outerHTML = xhr.responseText;
        } else {
          let message =
            xhr.statusText ||
            "Error al cargar el archivo, asegúrate de correr el proyecto en un servidor local o externo";
          el.outerHTML = `<div><p>Error ${xhr.status}: ${message}</p></div>`;
        }
      });
  
      xhr.open("GET", url);
      xhr.setRequestHeader("Content-type", "text/html; charset=utf-8");
      xhr.send();
    };
  
    document
      .querySelectorAll("[data-include]")
      .forEach((el) => includeHTML(el, el.getAttribute("data-include")));
  });