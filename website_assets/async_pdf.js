function get_elements() {
    var x = document.getElementsByClassName("ar_async");
    for (var i = 0; i < x.length; i++) {
      set_data(x[i])
    }
  }

function set_data(x) {
    const url = x.getAttribute('url')
    const obj = document.createElement('object');
    obj.setAttribute('data', url);
    obj.setAttribute('type', 'application/pdf');
    obj.setAttribute('width', '100%');
    obj.setAttribute('height', '500px');

    const fallback = document.createElement('p');
    fallback.textContent = "Please click the button below to download the PDF";
    obj.appendChild(fallback);

    x.innerHTML = '';
    x.appendChild(obj);
}



window.addEventListener('load', get_elements);