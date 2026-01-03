/**
 * Este script contiene la UI de la pagina principal
 * Solo se maneja el HTML en este punto.
 */
import productos from  '../data/productos.json';
import { calculo_Prices } from '../logic/cart';
import { getCart } from "../services/storage";

var listado_Carrito = getCart();

 var ui = '';
 var uiCar = '';

function renderCart(){
    listado_Carrito.map(pc=>{
        uiCar += `<li>${productos[pc-1].nombre} <input type="checkbox" class="del-product"></input></li> `;
    })
   return uiCar;
}
const renderizar = ()=>{
   
    productos.map(p=>{
        ui += `  
                    
                    <div class="cont-medicamento">
                            <div class="card-header">
                                <div class="cart-icon-badge">🛒</div>
                                <img src=${p.imagen} alt="Nombre">
                            </div>
                        <div class="card-body">
                        <h3>Producto:</h3>
                        <span class="nombre-producto">${p.nombre}</span>
                        <p class="precio">Precio: ${p.precio}$</p>
                        <button class="btn-agregar">Agregar al carro</button>
                        </div>
                    </div>
            
        `
        
    })

   
    
    document.querySelector('#app').innerHTML = `
    <nav>
        <div class="nav-left">
            <img src="logoSalud.png" class="logo" alt="Logo Salud">
        </div>
        <div class="nav-right">
            <ul class="nav-links">
            <li><a href="#">Carrito</a></li>
            <li><a href="#">Login</a></li>
            </ul>
        </div>
    </nav>

    <div class="content-catalogo"> ${ui} </div>

    <!-- Botón para abrir/cerrar el carrito -->
<button id="toggleCart">🛒 Carrito</button>
 
<!-- Barra lateral del carrito -->
<div id="cartSidebar" class="cart-sidebar">
  <div class="cart-header">
    <h2>Carrito de Compras</h2>
    <button id="closeCart">✖</button>
  </div>

    <div class="Productos-Carrito">
    <ul>
        ${renderCart()} 
    </ul>
         <span class ="prices">TOTAL: ${calculo_Prices(productos)}$ </span>
          <button class="boton-Quitar">Quitar Producto(s)</button>

  </div>
 


</div>


     <footer>
        <div class="footer-content">
            <div class="footer-section contacto">
            <h4>Contacto</h4>
            <p>📞 Tel: +57 300 123 4567</p>
            <p>✉️ Email: soporte@drogueria.com</p>
            <p>📍 Dirección: Calle 10 #20-30, Valle del Cauca</p>
            </div>
            <div class="footer-section redes">
            <h4>Síguenos</h4>
            <a href="#">Facebook</a> | 
            <a href="#">Instagram</a> | 
            <a href="#">WhatsApp</a>
            </div>
        </div>

        <div class="footer-bottom">
            <p>© 2025 Droguería Salud Total. Todos los derechos reservados.</p>
        </div>
        </footer>

    `
    const toggleCart = document.getElementById('toggleCart'); 
    const closeCart = document.getElementById('closeCart'); 
    const cartSidebar = document.getElementById('cartSidebar'); 
    toggleCart.addEventListener('click', () => { cartSidebar.classList.add('active'); }); 
    closeCart.addEventListener('click', () => { cartSidebar.classList.remove('active'); });
}

export {renderizar,renderCart};