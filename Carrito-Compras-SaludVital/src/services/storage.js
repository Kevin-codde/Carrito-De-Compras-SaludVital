/**
 * Se maneja la persistencia de los datos
 */
function setCart(lm){
    let ls =  localStorage.setItem('Medicamentos',JSON.stringify(lm));
    return ls;
}

function getCart(){
    let medicamentos_guardados = JSON.parse(localStorage.getItem('Medicamentos'));
    return medicamentos_guardados;

}


export {setCart,getCart}