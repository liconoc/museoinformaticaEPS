
  const searchIndex = [
    { keyword: 'memoria', url: 'categorias.html#memoria' },
    { keyword: 'procesador', url: 'categorias.html#procesador' },
    { keyword: 'placa', url: 'categorias.html#placa' },
    { keyword: 'router', url: 'categorias.html#router' },
    { keyword: 'disquetera', url: 'categorias.html#disquetera' },
    { keyword: 'cuadros', url: 'cuadros.html' },
    { keyword: 'contacto', url: 'contacto.html' }
  ];

  document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('search-input');
    if (!input) return;

    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const query = input.value.trim().toLowerCase();
        if (!query) return;

        const found = searchIndex.find(item => query.includes(item.keyword));
        if (found) {
          window.location.href = found.url;
        } else {
          alert('No se encontró ninguna coincidencia.');
        }
      }
    });
  });

  window.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-input');
    const clearBtn = document.getElementById('clear-btn');
    const searchBtn = document.getElementById('search-btn');

    // Definir las páginas de búsqueda y sus URLs
    const searchPages = {
      "historia": "historia.html",
      "categorias": "categorias.html",
      "cuadros": "cuadros.html",
      "contacto": "contacto.html",
      "inicio": "inicio.html",
      "museo": "inicio.html" // Ejemplo de búsqueda "museo" redirigiendo a la página de inicio
    };

    // Mostrar o esconder la "X" según el contenido de la barra de búsqueda
    searchInput.addEventListener('input', () => {
        if (searchInput.value) {
            clearBtn.style.display = 'block';  // Mostrar la "X"
        } else {
            clearBtn.style.display = 'none';  // Esconder la "X"
        }
    });

    // Al hacer clic en la "X", borrar el texto de la barra
    clearBtn.addEventListener('click', () => {
        searchInput.value = '';
        clearBtn.style.display = 'none'; // Esconder la "X"
    });

    // Al hacer clic en el botón de búsqueda, redirigir a la página correspondiente
    searchBtn.addEventListener('click', () => {
        const query = searchInput.value.trim().toLowerCase(); // Convertir a minúsculas
        if (query && searchPages[query]) {
            window.location.href = searchPages[query];
        } else {
            alert("Página no encontrada para esta búsqueda.");
        }
    });

    // Detectar la tecla "Enter" para realizar la búsqueda
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            const query = searchInput.value.trim().toLowerCase(); // Convertir a minúsculas
            if (query && searchPages[query]) {
                window.location.href = searchPages[query];
            } else {
                alert("Página no encontrada para esta búsqueda.");
            }
        }
    });
  });

  document.getElementById("search-btn").addEventListener("click", async () => {
    const searchTerm = document.getElementById("search-input").value.trim().toLowerCase();
    if (!searchTerm) return;
  
    const res = await fetch("pages.json");
    const pages = await res.json();
  
    for (const page of pages) {
      const response = await fetch(page.url);
      const text = await response.text();
  
      if (text.toLowerCase().includes(searchTerm)) {
        window.location.href = page.url; // Redirige a la primera coincidencia
        return;
      }
    }
  
    alert("No se encontró ningún resultado para: " + searchTerm);
  });
  
  
  document.addEventListener("DOMContentLoaded", () => {
    const spanishFlag = document.getElementById('spanish-flag');
    const valencianFlag = document.getElementById('valencian-flag');
    const englishFlag = document.getElementById('english-flag');
  
    // Elementos que deben cambiar de texto
    const welcomeText = document.getElementById('titulo');
    const descriptionText = document.getElementById('descripcion');
    const additionalText = document.getElementById('texto');
    const footerText = document.getElementById('pagina');
  
    // Función para cambiar el idioma
    const changeLanguage = (language) => {
      welcomeText.textContent = translations[language].titulo;
      descriptionText.textContent = translations[language].descripcion;
      additionalText.textContent = translations[language].texto;
      footerText.textContent = translations[language].pagina;
    };
  
    // Event listeners para las banderas
    document.addEventListener("DOMContentLoaded", () => {
      document.getElementById('english-flag').addEventListener('click', () => {
        translatePage('en');
      });
    
      document.getElementById('valencian-flag').addEventListener('click', () => {
        translatePage('va');
      });
    
      document.getElementById('spanish-flag').addEventListener('click', () => {
        translatePage('es');
      });
    });
    
  
    // Establecer idioma por defecto (por ejemplo, español)
    changeLanguage('es');
  });
  
  

