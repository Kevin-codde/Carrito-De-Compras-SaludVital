/**
 * Este script contiene la UI de la pagina principal
 * Solo se maneja el HTML en este punto.
 */

const renderizar = (productos)=>{
    var ui = '';
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
        <img src="logoSalud.png" class="logo" ></img>
        
        <h4>Carrito</h4>
        <h4>Login</h4>
    </nav>
    <div class="content-catalogo"> ${ui} </div>

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

}

export default renderizar;