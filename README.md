# Frontend💻

## Objetivo:

El objetivo de esta aplicación web es poder consultar informacion por medio de una API.

## Lenguajes y Librerias Usados:

- HTML
- CSS
- JavaScript
- jQuery
- Bootstrap

***HTML*** y ***CSS*** los utilizamos para darle un poco de diseño a la interfaz, de igual forma nos apoyamos mucho de ***Bootstrap*** el cual no ayudo mucho a crear la interfaz mas rapido. ***JavaScript*** y ***jQuery*** los utilizamos para poder consultar la API y darle dinamismo a la interfaz.

## Detalles de la aplicación web

Al momento de que la aplicacion web carga se ejecutan dos funciones las cuales nos obtienen, mediante la API, todos los productos y las categorias.

![Carga de la aplicacion web](https://i.ibb.co/BLsrzLG/Front-1.png)

En esta imagen podemos ver que el elemento con id ***selectCategorias*** cuenta con un evento ***Change*** el cual al momento de cambiar obtiene su mismo valor y lo envia a una funcion la cual obtiene los productos por categoria.

![Consultando productos por categoria](https://i.ibb.co/gj8XFH6/Front-2.png)

Podemos ver que de igual forma el elemento con id ***selectOrden*** cuenta con un evento ***Change*** el cual al cambiar obtiene su mismo valor y el valor del elemento con id ***selectCategorias*** y envia los valores a una funcion para ordenar los datos alfabeticamente.

![Ordenando productos alfabeticamente](https://i.ibb.co/y0qnsyf/Front-3.png)

En esta imagen podemos observar que el elemento con id ***buscador*** cuenta con un evento ***KeyUp*** el cual hace la funcion de un buscador el cual envia su mismo valor cada vez que el usuario escribe algo en el, consultando los datos correspondientes y renderizandolos en la interfaz; Al final carga una fucion que bloquea los selectores.

![Buscador de productos](https://i.ibb.co/XY94kVx/Front-4.png)

Esta funcion nos devualve todos los productos y los renderiza en la interfaz.

![Obtener todos los productos](https://i.ibb.co/NLkTJV1/Front-5.png)

Esta funcion nos obtiene los productos por categoria, recibiendo como parametro el ***id*** de la categoria.

![Obtener productos por categoria](https://i.ibb.co/5r47Tm1/Front-6.png)

Esta funcion obtiene los productos ordenados alfabeticamente, descendentemente o ascendentemete, recibiendo como parametro ***order*** y ***categoria***.

![Obtener productos ordenados](https://i.ibb.co/ZBSVtbY/Front-7.png)

Esta funcion obtiene todas las categorias.

![Obtener categorias](https://i.ibb.co/QmTphSf/Front-8.png)

Esta funcion bloquea los selectores de la categoria y del orden.

![Bloquear selectores](https://i.ibb.co/VVvJ3cr/Front-9.png)