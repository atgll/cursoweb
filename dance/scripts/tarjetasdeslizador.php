<?php


function getSlides()
{
    $pathPrefix = './sources/images/imgs_instructors/';
    $elements = [
        [
            'img' => $pathPrefix . 'kateanderson.jpg',
            'titulo' => 'Kate Anderson',
            'sub-titulo' => ' - Bailarina principal con más de 15 años de experiencia en compañías de ballet de renombre internacional',
            'text' => 'Kate Anderson creció en Nueva York, inspirada por el ritmo de la ciudad. Creó un estilo único fusionando danza contemporánea con movimientos urbanos y arquitectura. Su obra Concrete Echoes utilizó edificios como escenarios vivos, con bailarines escalando muros y usando sombras como parte de la coreografía. Su visión cambió la forma en que el público experimentaba la danza en espacios urbanos.'
        ],
        [
            'img' => $pathPrefix . 'jessicapeterson.jpg',
            'titulo' => 'Jessica Peterson',
            'sub-titulo' => ' - Solista destacada con una impresionante trayectoria en coreografías contemporáneas.',
            'text' => 'Jessica, con formación en ballet clásico, siempre sintió que su cuerpo podía producir más que solo movimiento. Experimentó con sensores de movimiento y creó coreografías donde cada paso generaba música en tiempo real. Su pieza Resonancia Humana convirtió el escenario en una orquesta viva, donde el sonido y la danza eran inseparables.'
        ],
        [
            'img' => $pathPrefix . 'richardwilliams.jpg',
            'titulo' => 'Richard Williams',
            'sub-titulo' => ' - Bailarín versátil con experiencia en ballet, jazz y danza contemporánea.',
            'text' => 'Richard, un prodigio del ballet, desafió las normas al integrar breakdance y movimientos de danza butoh en el repertorio clásico. Su obra Cisne Dislocado impactó al mundo con su reinterpretación de El Lago de los Cisnes, donde los bailarines rompían la elegancia del ballet con movimientos crudos y viscerales. Su propuesta dividió a la crítica, pero nadie pudo ignorar su genialidad.'
        ],
        [
            'img' => $pathPrefix . 'merylmcmillan.jpg',
            'titulo' => 'Meryl McMillan',
            'sub-titulo' => ' - Reconocida coreógrafa y maestra de ballet con una influencia innovadora en la danza moderna.',
            'text' => 'Meryl siempre sintió que el sonido distraía de la pureza del movimiento. Decidió crear espectáculos sin música, donde el único ritmo provenía de la respiración y la fricción de los cuerpos con el suelo. Su obra Cuerpos en Viento dejó al público hipnotizado con el poder de la danza en su forma más esencial.'
        ],
        [
            'img' => $pathPrefix . 'henrywilson.jpg',
            'titulo' => 'Henry Wilson',
            'sub-titulo' => ' - Maestro de ballet y director artístico con una carrera de más de dos décadas.',
            'text' => 'Fascinado por la física, Henry exploró cómo la danza podía desafiar la gravedad. Colaboró con ingenieros para diseñar un sistema de cables invisibles que permitían a los bailarines moverse en el aire con total libertad. Su espectáculo Zero-G fue una revolución, haciendo que el público dudara de lo que era real y lo que no.'
        ],
        [
            'img' => $pathPrefix . 'stellaclark.jpg',
            'titulo' => 'Stella Clark',
            'sub-titulo' => ' - Especialista en ballet clásico y neoclásico, ganadora de múltiples premios de danza.',
            'text' => 'Stella creía que cada movimiento podía ser una historia personal. Invitó a personas mayores a compartir recuerdos y los transformó en coreografías donde los bailarines encarnaban memorias vivas. Su pieza Ecos del Tiempo emocionó al mundo, mostrando que la danza no solo era arte, sino un archivo de la experiencia humana.'
        ],
    ];

    $jsonData = file_get_contents('https://jsonplaceholder.typicode.com/posts');

    $arrayData = json_decode($jsonData, true);

    foreach ($elements as $key => $element) {  
        $elements[$key]['img'] = 'https://picsum.photos/id/' . $key + rand(1,100) . '/500/300';
        $elements[$key]['text'] = $arrayData[$key]['body'];
    }

    // var_dump($arrayData);
    // exit();

    return $elements;
}
?>