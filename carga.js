function cargarHTML(url, idElemento) {
    fetch(url)
      .then(response => response.text())
      .then(data => {
        document.getElementById(idElemento).innerHTML = data;
      });
  }
