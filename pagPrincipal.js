let carrito = [];


function agregarAlCarrito(nombre, precio) {
    carrito.push({ nombre, precio });
    mostrarCarrito();
}


function mostrarCarrito() {
    const lista = document.getElementById('lista-carrito');
    const total = document.getElementById('total');
    lista.innerHTML = '';
    let suma = 0;
    carrito.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.nombre} - $${item.precio}`;
        lista.appendChild(li);
        suma += item.precio;
    });
    total.textContent = suma;
}