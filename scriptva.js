
  document.addEventListener("DOMContentLoaded", () => {
    const searchBtn = document.getElementById("search-btn");
    const searchInput = document.getElementById("search-input");
    const clearBtn = document.getElementById("clear-btn");

    const rutas = {
      "inici": "iniciova.html",
      "historia": "historiava.html",
      "visita": "visitava.html",
      "categories": "categoriasva.html",
      "quadres": "cuadrosva.html",
      "contacte": "contactova.html"
    };

    const normalizar = (texto) =>
      texto.trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    const buscarYRedirigir = () => {
      const valor = normalizar(searchInput.value);
      if (!valor) return;

      const coincidencia = Object.entries(rutas).find(([clave]) =>
        normalizar(clave).includes(valor)
      );

      if (coincidencia) {
        window.location.href = coincidencia[1];
      } else {
        alert("No se encontró la sección buscada.");
      }
    };

    searchInput.addEventListener("input", () => {
      clearBtn.style.display = searchInput.value ? "block" : "none";
    });

    clearBtn.addEventListener("click", () => {
      searchInput.value = "";
      clearBtn.style.display = "none";
      searchInput.focus();
    });

    searchBtn.addEventListener("click", buscarYRedirigir);
    searchInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") buscarYRedirigir();
    });
  });

$(function() {
  var Accordion = function(el, multiple) {
    this.el = el || {};
    // more then one submenu open?
    this.multiple = multiple || false;
    
    var dropdownlink = this.el.find('.dropdownlink');
    dropdownlink.on('click',
                    { el: this.el, multiple: this.multiple },
                    this.dropdown);
  };
  
  Accordion.prototype.dropdown = function(e) {
    var $el = e.data.el,
        $this = $(this),
        //this is the ul.submenuItems
        $next = $this.next();
    
    $next.slideToggle();
    $this.parent().toggleClass('open');
    
    if(!e.data.multiple) {
      //show only one menu at the same time
      $el.find('.submenuItems').not($next).slideUp().parent().removeClass('open');
    }
  }
  
  var accordion = new Accordion($('.accordion-menu'), false);
})
  
  
