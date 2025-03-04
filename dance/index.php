<!DOCTYPE html>
<html lang="en">

<head>
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
    <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap"
        rel="stylesheet">
    <link rel="stylesheet" href="./styles/elements.css">
    <link rel="stylesheet" href="./styles/fonts.css">
    <link rel="stylesheet" href="./styles/grid12.css">
    <link rel="stylesheet" href="./styles/reset.css">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DANCE·FIRE</title>
</head>

<body>

    <div class="contenedor-fluido">
        <header class="row head-main">
            <div class="row imagen">
                <section class="row infobar">
                    <p class="column12 mcolumn3 pcolumn3 ctext logo-menu"><img
                            src="./sources/icons/vecteezy_dancer-vector-icon_22459652-removebg-preview.png" alt=""></p>
                    <div class="column12 mcolumn8 pcolumn8 ctext">
                        <div class="row">
                            <ul class="column12 uppercase botonera-menu roboto-bold">
                                <li class="boton"><a href="./index.php">home</a></li>
                                <li class="boton"><a href="#!">pricing</a></li>
                                <li class="boton"><a href="./instructoresdeslizador.php">instructors <i
                                            class="bi bi-caret-down"></i></a></li>
                                <li class="boton"><a href="#!">partners</a></li>
                                <li class="boton"><a href="./nosotros.html">pages <i class="bi bi-caret-down"></i></a>
                                </li>
                                <li class="boton"><a href="./contacto.html">contacts</a></li>
                                <li class="boton"><a href="#!">schedule</a></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <div class="clear"></div>
                <section class="row content-head">
                    <div class="column8 typo despcol1">
                        <div class="row">
                            <p class="column12 uppercase loc-main montserrat-normal"><i
                                    class="bi bi-geo-alt-fill"></i>july 05-06, 2022, los angeles, c.a.</p>
                        </div>
                        <div class="row">
                            <h1 class="column12 uppercase title-main roboto-titlexl">classic dance<br>masterclass</h1>
                        </div>
                    </div>
                </section>
            </div>
        </header>
        <div class="column12 separation ctext roboto-bold">[][][][][][][][][][][]</div>
        <div class="clear"></div>
        <section class="row tarjetero">
            <div class="column9 cenc">
                <div class="row fila-tarjetas-iconos">
                    <div class="column12 mcolumn3 tarjeta montserrat-normal ctext">
                        <p class="tarjeta-imagen"><i class="fa-regular fa-user"></i></p>
                        <p class="tarjeta-titulo">Personal Training</p>
                        <p class="tarjeta-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta quis
                            maiores nemo repellat beatae.</p>
                    </div>
                    <div class="column12 mcolumn3 tarjeta montserrat-normal ctext">
                        <p class="tarjeta-imagen"><i class="bi bi-boxes"></i></p>
                        <p class="tarjeta-titulo">Group Training</p>
                        <p class="tarjeta-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta quis
                            maiores nemo repellat beatae.</p>
                    </div>
                    <div class="column12 mcolumn3 tarjeta montserrat-normal ctext">
                        <p class="tarjeta-imagen"><i class="bi bi-speaker"></i></p>
                        <p class="tarjeta-titulo">Dance Worshops</p>
                        <p class="tarjeta-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta quis
                            maiores nemo repellat beatae.</p>
                    </div>
                </div>
            </div>
            <div class="clear"></div>

        </section>
        <div class="column12 separation ctext roboto-bold">[][][][][][][][][][][]</div>
        <div class="clear"></div>
        <section class="row tarjetero instructor-presentation">
            <p class="column12 title roboto-bold ctext uppercase">staff</p>
            <p class="column12 ctext montserrat-normal tarjeta-text">Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Porro, minima? Error debitis asperiores facilis dolores exercitationem accusantium.</p>
            <div class="column9 cenc contenedor-tarjetas">

                <?php
                /*$pathPrefix = './sources/images/imgs_instructors/imagenes_tarjetas/';
                $elements = [
                    [
                        'img' => $pathPrefix . 'kateanderson.jpg',
                        'titulo' => 'Kate Anderson',
                        'text' => 'Bailarina principal con más de 15 años de experiencia en compañías de ballet de renombre internacional'
                    ],
                    [
                        'img' => $pathPrefix . 'jessicapeterson.jpg',
                        'titulo' => 'Jessica Peterson',
                        'text' => 'Solista destacada con una impresionante trayectoria en coreografías contemporáneas.'
                    ],
                    [
                        'img' => $pathPrefix . 'richardwilliams.jpg',
                        'titulo' => 'Richard Williams',
                        'text' => 'Bailarín versátil con experiencia en ballet, jazz y danza contemporánea.'
                    ],
                    [
                        'img' => $pathPrefix . 'merylmcmillan.jpg',
                        'titulo' => 'Meryl McMillan',
                        'text' => 'Reconocida coreógrafa y maestra de ballet con una influencia innovadora en la danza moderna.'
                    ],
                    [
                        'img' => $pathPrefix . 'henrywilson.jpg',
                        'titulo' => 'Henry Wilson',
                        'text' => 'Maestro de ballet y director artístico con una carrera de más de dos décadas.'
                    ],
                    [
                        'img' => $pathPrefix . 'stellaclark.jpg',
                        'titulo' => 'Stella Clark',
                        'text' => 'Especialista en ballet clásico y neoclásico, ganadora de múltiples premios de danza.'
                    ],
                ];*/
                include './scripts/tarjetasinstructores.php' ?>
                <div class="row fila-tarjetas">
                    <?php foreach ($elements as $element) { ?>
                        <div class="column12 mcolumn4 tarjeta-instructores montserrat-normal ctext">
                            <picture class="column12 tarjeta-imagen-instructores"><img src="<?php echo $element['img']; ?>"
                                    alt="">
                            </picture>
                            <h4 class="column12 tarjeta-titulo"><?php echo $element['titulo']; ?></h4>
                            <p class="column12 tarjeta-text"><?php echo $element['text']; ?></p>
                        </div>
                    <?php } ?>
                </div>
            </div>
        </section>
        <div class="column12 separation roboto-bold ctext">[][][][][][][][][][][][][][]</div>
        <section class="row prices">
            <p class="column12 title roboto-bold ctext uppercase">prices</p>
            <div class="row prices-list">
                <div class="column12 mcolumn8 scolumn8 cenc ctext prices-tables">
                    <div class="row">
                        <table class="column4 ctext roboto-normal price-table">
                            <thead>
                                <tr>
                                    <th>
                                        General
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        Asientos en las filas traseras o laterales.
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Descuento en la compra de souvenirs oficiales.
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Opción de participar en un sorteo para ganar un pase VIP.
                                    </td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr>
                                    <th>
                                        50$
                                    </th>
                                </tr>
                            </tfoot>
                        </table>
                        <table class="column4 ctext roboto-normal price-table">
                            <thead>
                                <tr>
                                    <th>
                                        Preferencial
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        Asientos en zona central con excelente visibilidad.
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Programa de mano con información del espectáculo.
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Acceso a una charla introductoria sobre la obra antes de la función.
                                    </td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr>
                                    <th>
                                        80$
                                    </th>
                                </tr>
                            </tfoot>
                        </table>
                        <table class="column4 ctext roboto-normal price-table">
                            <thead>
                                <tr>
                                    <th>
                                        VIP Exclusivo
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        Asientos en primera fila con vista privilegiada.
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Copa de champagne de cortesía.
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        Meet & Greet con los bailarines después del espectáculo.
                                    </td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr>
                                    <th>
                                        120$
                                    </th>
                                </tr>
                            </tfoot>
                        </table>
                        <div class="column12">
                            <div class="row">
                                <div class="column4">
                                    <input type="button" value="BUY" class="column4 scolumn2 mcolumn2 cenc buybtn">
                                </div>
                                <div class="column4">
                                    <input type="button" value="BUY" class="column4 scolumn2 mcolumn2 cenc buybtn">
                                </div>
                                <div class="column4">
                                    <input type="button" value="BUY" class="column4 scolumn2 mcolumn2 cenc buybtn">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div class="clear"></div>
        <div class="column12 separation roboto-bold ctext">[][][][][][][][][][][][][][]</div>
        <section class="row row-map">
            <section class="column12 titulo-mapa title ctext montserrat-normal">
                <h2>Ubicación: Los Angeles, C.A.</h2>
                <div class="column10 cenc" id="map"></div>
            </section>

            <script>
                var map = L.map('map').setView([34.0522, -118.2437], 13); // Coordenadas de Nueva York

                L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                    attribution: '© OpenStreetMap contributors'
                }).addTo(map);

                L.marker([34.0522, -118.2437]).addTo(map)
                    .bindPopup('Here we are')
                    .openPopup();
            </script>
        </section>
        <div class="clear"></div>
        <div class="column12 separation roboto-bold ctext">[][][][][][][][][][][][][][]</div>
        <footer class="row imagen-despedida">
            <div class="column4 despedida texto-despedida">
                <h3 class="column12 title roboto-bold uppercase left-align logo-head">fuego
                </h3><img class="logo-footer"
                    src="./sources/icons/vecteezy_dancer-vector-icon_22459652-removebg-preview.png" alt="">
                <p class="column12 tarjeta-text roboto-normal text-into-text">Lorem ipsum dolor, sit amet consectetur
                    adipisicing
                    elit. Veniam a
                    itaque, voluptas laborum provident officiis adipisci maxime et sed perspiciatis aliquid
                    doloribus non incidunt, iste fugit explicabo minima voluptatem exercitationem?<br>Lorem ipsum,
                    dolor sit amet consectetur adipisicing elit. Id laudantium blanditiis nobis repudiandae odit.
                </p>
            </div>
            <div class="column8 info-login">
                <form action="./scripts/form.php" method="post" class="column12 scolumn6 mcolumn6 ctext login-form">
                    <label class="column12 roboto-bold uppercase title" for="login">subscribe & stay updated</label>
                    <input type="email" name="login" class="column7 cenc" placeholder="E-mail"><input
                        class="column2 cenc submitbtn" type="submit" value="SUBSCRIBE">
                </form>

                <div class="column12 mcolumn3 scolumn3 dir-tel">
                    <p class="title-s roboto-bold">ADDRESS & PHONE</p>
                    <p class="roboto-normal tarjeta-text"><i class="bi bi-geo-alt-fill"></i> di, direccion directa
                    </p>
                    <p class="tarjeta-text roboto-normal"><i class="bi bi-telephone"></i> +34 968 847 984</p>
                </div>


                <div class="column12 mcolumn3 scolumn3 social">
                    <p class="title-s roboto-bold">GET SOCIAL</p>
                    <p class="tarjeta-text roboto-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                    <p class="column12 roboto-normal ctext title"><span class="column4"><i
                                class="bi bi-twitter"></i></span><span class="column4"><i
                                class="bi bi-instagram"></i></span><span class="column4"><i
                                class="fa-brands fa-tiktok"></i></span></p>
                </div>

            </div>
        </footer>
    </div>
    <script src="https://kit.fontawesome.com/bcf25a6078.js" crossorigin="anonymous"></script>

</body>

</html>