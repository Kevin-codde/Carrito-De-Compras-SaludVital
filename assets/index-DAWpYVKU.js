(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))n(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function c(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(o){if(o.ep)return;o.ep=!0;const i=c(o);fetch(o.href,i)}})();const l=[{id:1,nombre:"Paracetamol 500mg",precio:4500,imagen:"https://cdn-icons-png.flaticon.com/512/6408/6408427.png",unidades:3},{id:2,nombre:"Ibuprofeno 400mg",precio:5200,imagen:"https://cdn-icons-png.flaticon.com/512/6408/6408427.png",unidades:4},{id:3,nombre:"Amoxicilina 500mg",precio:12500,imagen:"https://cdn-icons-png.flaticon.com/512/6408/6408427.png",unidades:3},{id:4,nombre:"Omeprazol 20mg",precio:8900,imagen:"https://cdn-icons-png.flaticon.com/512/6408/6408427.png",unidades:4},{id:5,nombre:"Loratadina 10mg",precio:6700,imagen:"https://cdn-icons-png.flaticon.com/512/6408/6408427.png",unidades:3},{id:6,nombre:"Diclofenaco 50mg",precio:4800,imagen:"https://cdn-icons-png.flaticon.com/512/6408/6408427.png",unidades:3},{id:7,nombre:"Metformina 850mg",precio:13400,imagen:"https://cdn-icons-png.flaticon.com/512/6408/6408427.png",unidades:4},{id:8,nombre:"Losartán 50mg",precio:15800,imagen:"https://cdn-icons-png.flaticon.com/512/6408/6408427.png",unidades:3},{id:9,nombre:"Atorvastatina 20mg",precio:21e3,imagen:"https://cdn-icons-png.flaticon.com/512/6408/6408427.png",unidades:4},{id:10,nombre:"Salbutamol Inhalador",precio:32e3,imagen:"https://cdn-icons-png.flaticon.com/512/6408/6408427.png",unidades:3},{id:11,nombre:"Cetirizina 10mg",precio:6900,imagen:"https://cdn-icons-png.flaticon.com/512/6408/6408427.png",unidades:3},{id:12,nombre:"Ranitidina 150mg",precio:7500,imagen:"https://cdn-icons-png.flaticon.com/512/6408/6408427.png",unidades:4},{id:13,nombre:"Azitromicina 500mg",precio:18500,imagen:"https://cdn-icons-png.flaticon.com/512/6408/6408427.png",unidades:3},{id:14,nombre:"Prednisona 5mg",precio:5600,imagen:"https://cdn-icons-png.flaticon.com/512/6408/6408427.png",unidades:3},{id:15,nombre:"Clorfenamina 4mg",precio:4300,imagen:"https://cdn-icons-png.flaticon.com/512/6408/6408427.png",unidades:4},{id:16,nombre:"Naproxeno 500mg",precio:9800,imagen:"https://cdn-icons-png.flaticon.com/512/6408/6408427.png",unidades:3},{id:17,nombre:"Vitamina C 1000mg",precio:11200,imagen:"https://cdn-icons-png.flaticon.com/512/6408/6408427.png",unidades:4},{id:18,nombre:"Hierro + Ácido Fólico",precio:8700,imagen:"https://cdn-icons-png.flaticon.com/512/6408/6408427.png",unidades:3},{id:19,nombre:"Insulina NPH",precio:45e3,imagen:"https://cdn-icons-png.flaticon.com/512/6408/6408427.png",unidades:3},{id:20,nombre:"Acetaminofén Infantil",precio:6200,imagen:"https://cdn-icons-png.flaticon.com/512/6408/6408427.png",unidades:4},{id:21,nombre:"Clopidogrel 75mg",precio:19500,imagen:"https://cdn-icons-png.flaticon.com/512/6408/6408427.png",unidades:3},{id:22,nombre:"Levotiroxina 100mcg",precio:17800,imagen:"https://cdn-icons-png.flaticon.com/512/6408/6408427.png",unidades:4},{id:23,nombre:"Furosemida 40mg",precio:9200,imagen:"https://cdn-icons-png.flaticon.com/512/6408/6408427.png",unidades:3},{id:24,nombre:"Enalapril 20mg",precio:14500,imagen:"https://cdn-icons-png.flaticon.com/512/6408/6408427.png",unidades:3},{id:25,nombre:"Aspirina 100mg",precio:5100,imagen:"https://cdn-icons-png.flaticon.com/512/6408/6408427.png",unidades:4},{id:26,nombre:"Simvastatina 20mg",precio:19800,imagen:"https://cdn-icons-png.flaticon.com/512/6408/6408427.png",unidades:3},{id:27,nombre:"Warfarina 5mg",precio:23e3,imagen:"https://cdn-icons-png.flaticon.com/512/6408/6408427.png",unidades:4},{id:28,nombre:"Insulina Glargina",precio:52e3,imagen:"https://cdn-icons-png.flaticon.com/512/6408/6408427.png",unidades:3},{id:29,nombre:"Tramadol 50mg",precio:15400,imagen:"https://cdn-icons-png.flaticon.com/512/6408/6408427.png",unidades:3},{id:30,nombre:"Diazepam 10mg",precio:8700,imagen:"https://cdn-icons-png.flaticon.com/512/6408/6408427.png",unidades:4},{id:31,nombre:"Multivitamínico Adulto",precio:18500,imagen:"https://cdn-icons-png.flaticon.com/512/6408/6408427.png",unidades:3}];function g(e){return localStorage.setItem("Medicamentos",JSON.stringify(e))}function s(){let e=JSON.parse(localStorage.getItem("Medicamentos"));return e||[]}var t=[],u=0;function y(e,a){if(s()==null)g(t);else if(s().length!=0&&t.length==0){var c=s();c.map(n=>{t.push(n)})}else console.log("No se pudo",c,t);e.forEach(n=>{n.addEventListener("click",function(){let o=e.indexOf(n),i=a[o].nombre,r=a[o].id;var p=a[o].unidades;let v=t.filter(d=>d==r).length,m=document.querySelectorAll(".panel-unidades")[o].value;if(confirm("Desea Agregar Producto"))if(!t.includes(r)||v<p){m>p&&(alert(":( no tenemos esa cantidad se agregaran las que esten disponibles"),m=p);for(let d=1;d<=m;d++)t.push(r);g(t),alert(`Producto: ${i} Agregado con exito`),setTimeout(location.reload(),2e3)}else alert(`Producto: ${i} Sin unidades disponibles :( `)})})}function C(e,a){e.addEventListener("click",function(){confirm("Desea Eliminar los productos seleccionados?")&&(t=t.filter((c,n)=>!a[n].checked),g(t),alert("Producto(s) eliminados correctamente!"),setTimeout(()=>{location.reload()},500))})}function S(e){var a=s();return a.map(function(c){let n=e[c-1].precio;u+=n}),u}var h=s(),f="",b="";function L(){return h.map(e=>{b+=`<li>${l[e-1].nombre} <input type="checkbox" class="del-product"></input></li> `}),b}const A=()=>{l.map(n=>{let o=h.filter(i=>i==n.id).length;f+=`  
                    
                    <div class="cont-medicamento">
                            <div class="card-header">
                                <div class="cart-icon-badge">🛒</div>
                                <img src=${n.imagen} alt="Nombre">
                            </div>
                        <div class="card-body">
                        <h3>Producto:</h3>
                        <span class="nombre-producto">${n.nombre}</span>
                        <input type="number" min=1 max=${n.unidades-o} class="panel-unidades"></input>
                        <p class="unidades-disp">Unidades: ${n.unidades-o}$</p>
                        <p class="precio">Precio: ${n.precio}$</p>
                        <button class="btn-agregar">Agregar al carro</button>
                        </div>
                    </div>
                    
        `}),document.querySelector("#app").innerHTML=`
    <nav class="navbar">
    <div class="nav-left">
        <img src="logoSalud.png" class="logo" alt="Logo Salud Vital">
    </div>
    <div class="nav-right">
        <a href="#catalogo">Catálogo</a>
        <a href="#sobre nosotros">nosotros</a>
        <a href="#contactos">Contacto</a>
    </div>
    </nav>

  <section id="sobre-nosotros">

        <section class="sobre-nosotros">
    <div class="sobre-nosotros-logo">
        <img src="logoSalud.png" alt="Logo Salud Vital">
    </div>
    <div class="sobre-nosotros-texto">
        <h2>Sobre Salud Vital</h2>
        <p>
        En <strong>Salud Vital</strong> trabajamos cada día para cuidar tu bienestar con responsabilidad y compromiso.
        Somos una droguería moderna que ofrece medicamentos confiables, atención personalizada y productos esenciales
        para tu salud y la de tu familia.
        </p>
        <p>
        Nuestro objetivo es brindar soluciones accesibles y seguras para toda la comunidad, con un equipo profesional
        que te acompaña en cada paso. ¡Tu salud es nuestra prioridad!
        </p>
    </div>
    </section>
</section>

    <section id="catalogo">
    <div class="content-catalogo"> ${f} </div>
    </section>

    <!-- Botón para abrir/cerrar el carrito -->
<button id="toggleCart">🛒 Carrito</button>
 
<!-- Barra lateral del carrito -->
<section id="carrito">
<div id="cartSidebar" class="cart-sidebar">
  <div class="cart-header">
    <h2>Carrito de Compras</h2>
    <button id="closeCart">✖</button>
  </div>

    <div class="Productos-Carrito">
    <ul>
        ${L()} 
    </ul>
         <span class ="prices">TOTAL: ${S(l)}$ </span>
          <button class="boton-Quitar">Quitar Producto(s)</button>

  </div>
 


</div>
</section>


<section id="contactos">
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
 </section>

    `;const e=document.getElementById("toggleCart"),a=document.getElementById("closeCart"),c=document.getElementById("cartSidebar");e.addEventListener("click",()=>{c.classList.add("active")}),a.addEventListener("click",()=>{c.classList.remove("active")})};A();var P=Array.from(document.querySelectorAll(".btn-agregar")),_=Array.from(document.querySelectorAll(".del-product"));y(P,l);C(document.querySelector(".boton-Quitar"),_);
