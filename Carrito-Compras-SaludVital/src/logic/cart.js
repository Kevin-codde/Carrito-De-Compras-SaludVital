var ls_medicamentos = [];
var ls_prod_eliminar = [];
function addCar(btn,lmd){
  
  btn.forEach(b=>{
        b.addEventListener('click',function (){

          let indice = btn.indexOf(b);
          let producto_nombre = lmd[indice].nombre;
          let producto_id = lmd[indice].id;
          
          if(!ls_medicamentos.includes(producto_id)){
              ls_medicamentos.push(producto_id);
              alert(`Producto: ${producto_nombre} Agregado con exito`)
              console.log(ls_medicamentos)
            }else{
              alert(`Producto: ${producto_nombre} Sin unidades disponibles :( `)
            }
        })
      }
  )
}

//Se agrega uno o varios productos del carrito para descartarlos
function ad_prod_eliminar(lsp,lmd){
    lsp.forEach(p=>{
        p.addEventListener('click',function (){
          let indice = p.indexOf(b);
          let producto_id = lmd[indice].id;
          ls_prod_eliminar.push(producto_id);
      
        })
      }
  )
}

//se eliminan productos del carrito
function delCar(btn){
    btn.addEventListener('click',()=>{
       ls_prod_eliminar.map(lsd=>{
           ind = ls_medicamentos.indexOf(lsd)
           ls_medicamentos.splice(lsd,ind+1);
       })
    })
    alert('Producto(s) eliminado(s) Correctamente')
    console.log(ls_medicamentos);
}


export {addCar,ls_medicamentos,ad_prod_eliminar,delCar};

