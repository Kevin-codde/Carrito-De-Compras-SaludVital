/**
 * Se maneja todo lo relacionado con el carrito de compras
 * 
 */
import * as storage from "../services/storage";

var ls_medicamentos = [];

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
        
        
          //se agregan nuevos productos al carrito
          if(!ls_medicamentos.includes(producto_id)){
              ls_medicamentos.push(producto_id);
              storage.setCart(ls_medicamentos);
              
              alert(`Producto: ${producto_nombre} Agregado con exito`)
              //console.log('ls-medicamentos: ',ls_medicamentos)
          
            
            }else{
              alert(`Producto: ${producto_nombre} Sin unidades disponibles :( `)
              //console.log(ls_medicamentos)
            }
           

        }
        
      )
      }
      
  )
}

export {logic_Cart}
