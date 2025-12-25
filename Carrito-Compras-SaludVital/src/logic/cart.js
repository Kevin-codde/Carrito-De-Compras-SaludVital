export default  function logic_Cart (btn,lmd){
  var ls_medicamentos = [];
  
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


