
  document.addEventListener("DOMContentLoaded", () => {
    const searchBtn = document.getElementById("search-btn");
    const searchInput = document.getElementById("search-input");
    const clearBtn = document.getElementById("clear-btn");

    const rutas = {
      "inicio": "inicioes.html",
      "historia": "historiaes.html",
      "visita": "visitaes.html",
      "categorias": "categoriases.html",
      "cuadros": "cuadroses.html",
      "contacto": "contactoes.html"
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


  
