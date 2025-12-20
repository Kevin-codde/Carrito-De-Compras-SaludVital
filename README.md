# Carrito-De-Compras-SaludVital
Carrito de compras para una farmacia  "SaludVital".

## 📂 Estructura del Proyecto

```text
Carrito-Compras-SaludVital/
├── index.html              # Punto de entrada principal (HTML5)
├── package.json            # Configuración de Node y dependencias de Vite
├── public/                 # Recursos estáticos (imágenes, iconos)
│   └── vite.svg
└── src/                    # Código fuente de la aplicación
    ├── main.js             # Punto de entrada JS (conecta lógica y UI)
    ├── style.css           # Estilos generales del proyecto
    ├── data/               # Origen de los datos
    │   └── productos.js    # Listado de productos (Base de datos local)
    ├── services/           # Servicios del navegador
    │   └── storage.js      # Persistencia de datos (LocalStorage)
    ├── logic/              # Lógica de negocio
    │   └── cart.js         # Operaciones del carrito (sumar, restar, borrar)
    └── ui/                 # Componentes de interfaz
        └── dom.js          # Manipulación del DOM y renderizado
