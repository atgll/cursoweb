<!DOCTYPE html>
<html lang="en">

<head>
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
    <link rel="stylesheet" href="./styles/deslizador.css">
    <title>INSTRUCTORS</title>
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
                            <h1 class="column12 uppercase title-main roboto-titlexl ctext">instructor page</h1>
                        </div>
                        <div class="row">
                            <p class="column12 uppercase loc-main montserrat-normal">
                                <strong>home</strong>·<strong>instructors</strong>·instructor page
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </header>
        <div class="clear"></div>
        <div class="clear"></div>
        <div class="column12 separation ctext roboto-bold">[][][][][][][][][][][]</div>
        <section class="row row-historia">
            <div class="column10 cenc">
                <section class="row row-historia">
                    <div class="slider-container">
                        <div class="clear"></div>
                        <div class="column9 cenc cont-instructores">
                            <?php include("./scripts/tarjetasdeslizador.php"); ?>
                            <div class="clear"></div>

                            <div class="slider">
            <div class="clear"></div>

                                <?php foreach ($elements as $element) { ?>
                                    <div class="column12 slides">
                                        <div class="slide row">
                                            <div class="column12 mcolumn7 scolumn7">
                                                <h3 class="title roboto-bold">
                                                    <?php echo $element['titulo']; ?>
                                                </h3>
                                                <h4 class="title-s montserrat-normal">
                                                    <?php echo $element['sub-titulo']; ?>
                                                </h4>
                                                <p class="montserrat-normal tarjeta-text">
                                                    <?php echo $element['text']; ?>
                                                </p>
                                            </div>    
                                                <picture class="column12 mcolumn5 scolumn5 imagenes-pag-instructors">
                                                    <img src="<?php echo $element['img']; ?>"
                                                        alt="<?php echo $element['titulo']; ?>">
                                                </picture>
                                                <div class="clear"></div>
                                            
                                        </div>
                                    </div>
                                <?php } ?>
                            
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <div class="column12 separation ctext roboto-bold">[][][][][][][][][][][]</div>

            <!-- Botones del slider -->
            <div class="buttons">
                <button class="button" onclick="prevSlide()">&#10094; Anterior</button>
                <button class="button" onclick="nextSlide()">Siguiente &#10095;</button>
            </div>
        </section>

        <div class="clear"></div>
        <div class="column12 separation ctext roboto-bold">[][][][][][][][][][][]</div>
        <div class="clear"></div>
        <div class="column12 separation ctext roboto-bold">[][][][][][][][][][][]</div>
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
    <script src="./scripts/deslizador.js"></script>
    <script src="https://kit.fontawesome.com/bcf25a6078.js" crossorigin="anonymous"></script>
</body>

</html>