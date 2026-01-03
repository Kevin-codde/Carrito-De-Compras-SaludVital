/**
 * Se maneja todo lo relacionado con el carrito de compras
 * 
 */
import * as storage from "../services/storage";

var ls_medicamentos = [];
var total = 0;

function logic_Cart (btn,lmd){

//se tienen en cuenta los productos guardados en el localStoragge despues de recargar pagina
 if(storage.getCart() == null){
   storage.setCart(ls_medicamentos);
 }
 else if(storage.getCart().length != 0 &&  ls_medicamentos.length == 0){
    var ls = storage.getCart(); 
    ls.map(p=>{
      ls_medicamentos.push(p);
      
    })
    }else{
         console.log('No se pudo',ls,ls_medicamentos);
    }

  btn.forEach(b=>{
        b.addEventListener('click',function (){

          let indice = btn.indexOf(b);
          let producto_nombre = lmd[indice].nombre;
          let producto_id = lmd[indice].id;
        //  document.querySelector('.p-Cart').innerHTML = `<div></div`;

          if(confirm('Desea Agregar Producto')){
          //se agregan nuevos productos al carrito
          if(!ls_medicamentos.includes(producto_id)){
              ls_medicamentos.push(producto_id);
              storage.setCart(ls_medicamentos);
              alert(`Producto: ${producto_nombre} Agregado con exito`)

              setTimeout(location.reload(),2000);

              //console.log('ls-medicamentos: ',ls_medicamentos)
 
            
            }else{
              alert(`Producto: ${producto_nombre} Sin unidades disponibles :( `)
              //console.log(ls_medicamentos)
            }
          }


        }
        
      )
      }
      
  )
}

function delete_Products(btn,lmb){
  
  btn.addEventListener('click', function () {
  if (confirm('Desea Eliminar los productos seleccionados?')) {
    ls_medicamentos = ls_medicamentos.filter((p, ind) => !lmb[ind].checked);

    storage.setCart(ls_medicamentos);
    alert('Producto(s) eliminados correctamente!');
    setTimeout(() => {
      location.reload();
    }, 500);
  }
});

}

function calculo_Prices(lsm){
  var productos_Guardados = storage.getCart();
  productos_Guardados.map(function (p){
     let precio = lsm[p-1].precio;
     total += precio;
  })
  return total
}
export {logic_Cart,delete_Products,calculo_Prices};
