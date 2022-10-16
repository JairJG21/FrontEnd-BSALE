$(document).ready(function () {

    getProductos();
    getCategorias();
    
});

$('#selectCategorias').on('change', () => {
    let id = $('#selectCategorias').val();
    getProductosByCategoria(id);
});

$('#selectOrden').on('change', () => {
    let orden = $('#selectOrden').val();
    let categoria = parseInt($('#selectCategorias').val());
    getProductosByOrden(orden, categoria);
});

$('#buscador').keyup(function () { 
    let busqueda = $('#buscador').val();

    if(busqueda == '' || null) {
        busqueda = '-';
    }
    console.log(busqueda);

    $.ajax({
        type: "GET",
        url: "http://localhost:9000/api/buscador/" + busqueda,
        data: "",
        dataType: "json",
    }).done( (response) => {
        console.log(response);

            let data = '';

            $.each(response, function (i, item) {

                data += `<div class="card" style="width: 18rem;">
                            <img src="${item.url_image}" class="card-img-top">
                                    <div class="card-body">
                                    <h5 class="card-title">${item.name}</h5>
                                    <h6 class="card-subtitle mb-2 text-muted">$${item.price}</h6>
                                    <a href="#" class="btn btn-primary">Agregar</a>
                                </div>
                            </div>`;
            });
            $('#contenedor').html(data);

            $('.card-img-top').addClass('img_product');
            $('.card').addClass('mt-3 me-3 ms-3');
    })

});

function getProductos() {
    $.ajax({
        type: "GET",
        url: "http://localhost:9000/api/productos",
        data: "",
        dataType: "json"
    }).done( (response) => {
        console.log(response);

            let data = '';

            $.each(response, function (i, item) {

                data += `<div class="card" style="width: 18rem;">
                            <img src="${item.url_image}" class="card-img-top">
                                    <div class="card-body">
                                    <h5 class="card-title">${item.name}</h5>
                                    <h6 class="card-subtitle mb-2 text-muted">$${item.price}</h6>
                                    <a href="#" class="btn btn-primary carrito">Agregar</a>
                                </div>
                            </div>`;
            });
            $('#contenedor').html(data);

            $('.card-img-top').addClass('img_product');
            $('.card').addClass('mt-3 me-3 ms-3');
    });
}

function getProductosByCategoria(id) {
    
    $.ajax({
        type: "GET",
        url: "http://localhost:9000/api/busquedaByCategorias/" + id,
        data: "",
        dataType: "json",
    }).done( (response) => {
        console.log(response);

        if(response != '' || null){
            let data = '';

            $.each(response, function (i, item) {

                data += `<div class="card" style="width: 18rem;">
                            <img src="${item.url_image}" class="card-img-top">
                                    <div class="card-body">
                                    <h5 class="card-title">${item.name}</h5>
                                    <h6 class="card-subtitle mb-2 text-muted">$${item.price}</h6>
                                    <a href="#" class="btn btn-primary">Agregar</a>
                                </div>
                            </div>`;
            });
            $('#contenedor').html(data);

            $('.card-img-top').addClass('img_product');
            $('.card').addClass('mt-3 me-3 ms-3');
        } else {
            $('#contenedor').html(`<div class="alert alert-primary mt-5" role="alert">
                                        No se encontraron datos😕
                                    </div>`);
        }
            
    })

}

function getProductosByOrden(orden, categoria) {
    
    $.ajax({
        type: "GET",
        url: "http://localhost:9000/api/ordenarProducto/" + orden + "/" + categoria,
        data: "",
        dataType: "json",
    }).done( (response) => {
        console.log(response);

        if(response != '' || null){
            let data = '';

            $.each(response, function (i, item) {

                data += `<div class="card" style="width: 18rem;">
                            <img src="${item.url_image}" class="card-img-top">
                                    <div class="card-body">
                                    <h5 class="card-title">${item.name}</h5>
                                    <h6 class="card-subtitle mb-2 text-muted">$${item.price}</h6>
                                    <a href="#" class="btn btn-primary">Agregar</a>
                                </div>
                            </div>`;
            });
            $('#contenedor').html(data);

            $('.card-img-top').addClass('img_product');
            $('.card').addClass('mt-3 me-3 ms-3');
        } else {
            $('#contenedor').html(`<div class="alert alert-primary mt-5" role="alert">
                                        No se encontraron datos😕
                                    </div>`);
        }
            
    })

}

function getCategorias() {

    $.ajax({
        type: "GET",
        url: "http://localhost:9000/api/categorias",
        data: "",
        dataType: "json",
    }).done( (response) => {
        console.log(response);

            let data = '';

            $.each(response, function (i, item) {

                data += `<option value="${item.id}">${item.name}</option>`;

            });
            $('#selectCategorias').append(data);

            $('.list-group-item').css('cursor', 'pointer');
    })

}