# Carrito-De-Compras-SaludVital
Carrito de compras para una farmacia  "SaludVital".

mi-carrito-app/
├── index.html              # Tu punto de entrada HTML
├── package.json            # Dependencias de npm
├── public/                 # Archivos estáticos que no cambian (ej. favicon)
│   └── vite.svg
└── src/                    # Todo tu código de JavaScript y estilos
    ├── main.js             # "Director de Orquesta" (Une todo)
    ├── style.css           # Estilos globales
    ├── data/               # Datos estáticos
    │   └── productos.js    # El array de objetos de tus productos
    ├── services/           # Conexiones externas o del navegador
    │   └── storage.js      # Lógica de LocalStorage (getItem/setItem)
    ├── logic/              # La "inteligencia" de tu app
    │   └── cart.js         # Funciones de agregar, eliminar, calcular total
    └── ui/                 # Manipulación del DOM
        └── dom.js          # Funciones para pintar (renderizar) en el HTML

