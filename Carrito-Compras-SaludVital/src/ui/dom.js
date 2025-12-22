const renderizar = (productos)=>{
    var ui = '';
    productos.map(p=>{
        ui = `
            <div>
                <h4>${p.nombre}</h4>
            </div>
        `
    })
    
    document.querySelector('#app').innerHTML += ui;

}

export default renderizar;