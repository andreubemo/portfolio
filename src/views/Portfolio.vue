<script setup>
import { ref } from 'vue'

//import k66Type from '@/assets/img/k66Type.zip'

import libro01 from '@/assets/img/libro-estilo-vientons.pdf'
import libro02 from '@/assets/img/libro-estilo_femdtot.pdf'
import libro03 from '@/assets/img/libro-estilo-polepole.pdf'
import libro04 from '@/assets/img/libro-esbozos-kas.pdf'

import logo01 from '@/assets/img/logo_calateresina.png'
import logo02 from '@/assets/img/logo-vientons.png'
import logo03 from '@/assets/img/logo_femdtot.png'
import logo04 from '@/assets/img/logo-camper-wow.png'
import logo05 from '@/assets/img/logo-llar-vital.png'
import logo06 from '@/assets/img/logo-carlesoro-electricitat.png'
import logo07 from '@/assets/img/logo-polepole.png'

import mock01 from '@/assets/img/calateresina-mockup.png'
import mock02 from '@/assets/img/vientons-t-shirt-mockup.png'
import mock03 from '@/assets/img/dtot-serveis-mockup.png'
import mock04 from '@/assets/img/camperwow-mockup.png'
import mock05 from '@/assets/img/llar-vital-mockup.png'
import mock06 from '@/assets/img/carlesoro-mockup.png'
import mock07 from '@/assets/img/polopole-mockup.png'

import tipo01 from '@/assets/img/letters-kas.png'
import tipo02 from '@/assets/img/letters-blanc.png'
import tipo03 from '@/assets/img/letters-cleantrip.png'
import tipo04 from '@/assets/img/letters-love.png'
import tipo05 from '@/assets/img/letters-ohshit.png'
import tipo06 from '@/assets/img/letters-k66.png'

import mock08 from '@/assets/img/mockup-kas.png'
import mock09 from '@/assets/img/mockup-blanc.png'
import mock10 from '@/assets/img/mockup-cleantrip.png'
import mock11 from '@/assets/img/mockup-love.png'
import mock12 from '@/assets/img/mockup-ohshit.png'
import mock13 from '@/assets/img/mockup-k66.png'

import ilustr01 from '@/assets/img/ilustracion-ruffles.png'
import ilustr02 from '@/assets/img/ilustracion-pirates.png'
import ilustr03 from '@/assets/img/ilustracion-suburbia.png'

import mock14 from '@/assets/img/mockup-ruffles.png'
import mock15 from '@/assets/img/mockup-pirates.png'
import mock16 from '@/assets/img/mockup-suburbia.png'

import dis01 from '@/assets/img/diseno-cartell-fmlagarriga2018.jpg'
import dis02 from '@/assets/img/diseno-cartells-finals-viulamusica-02.jpg'
import dis03 from '@/assets/img/diseno-cartells-finals-viulamusica-01.jpg'
import dis04 from '@/assets/img/diseno-targetaatm-vertical.png'
import dis05 from '@/assets/img/diseno-kafka.png'
import dis06 from '@/assets/img/diseno-revista-sonorama.png'
import dis07 from '@/assets/img/diseno-cartell-tastautors-cardedeu.png'

import mock17 from '@/assets/img/mockup-festa-major-la-garriga.png'
import mock18 from '@/assets/img/mockup-viulamusica01.png'
import mock19 from '@/assets/img/mockup-viulamusica02.png'
import mock20 from '@/assets/img/mockup_targetaatm.png'
import mock21 from '@/assets/img/mockup-kafka.png'
import mock22 from '@/assets/img/mockup-sonorama.png'
import mock23 from '@/assets/img/mockup-tastautors-01.png'

import mock24 from '@/assets/img/mockup-franela.png'
import mock25 from '@/assets/img/mockup-llapis.png'
import mock26 from '@/assets/img/mockup-naranja.png'
import mock27 from '@/assets/img/mockup-analitico.png'
import mock28 from '@/assets/img/mockup-mapping.png'
import mock29 from '@/assets/img/mockup-tampax.png'
import mock30 from '@/assets/img/mockup-k66.png'

const descripcionSecciones = ref([
    {
        id: 1,
        categoria: 'Logotipos',
        seccion: 'Esta es la sección de Logotipos que he ofrecido a clientes fuera de cualquier empresa. Hay desde Logotipos nuevos para empresas que empiezan hasta rediseños para empresas que necesitaban adaptarse a los nuevos tiempos. Además algunos clientes necesitaron un libro de estilo para mantener su marca en futuros procesos de diseño. El libro de estilo limita muchas modificaciones, proporciones y colores, pero que la marca no se vea afectada.'
    },
    {
        id: 2,
        categoria: 'Tipografía',
        seccion: 'La tipografía es una especialidad exclusiva del diseñador gráfico y muchas veces con un trabajo oculto al ojo del usuario. El tratamiento de la tipografía es algo delicado, sutil y emotivo, y esto hace que el proyecto entero tenga un discurso diferenciador respecto a otras marcas y da un valor añadido al diseño.'
    },
    {
        id: 3,
        categoria: 'Ilustración',
        seccion: 'La ilustración fue mi primer contacto con lo gráfico, aunque nunca la he llegado a utilizar en un proyecto empresarial. Es una habilidad que adapto a diferentes trabajos ya que enriquece el proyecto, pero nunca he tenido un encargo exclusivamente de ilustración para una empresa. Por otra parte si que he hecho trabajos personales y encargos para particulares.'
    },
    {
        id: 4,
        categoria: 'DiseñoGráfico',
        seccion: 'En la sección de diseño gráfico muestro algunos de los trabajos relacionados con la maquetación editorial impresa, o diseño gráfico tradicional, sobretodo cartelería. El uso de la tipografía en este tipo de proyectos es una parte muy importante a la hora de comunicar valores, ideas y mensajes concretos.'
    },
    {
        id: 5,
        categoria: 'Audiovisual',
        seccion: 'La sección Audiovisual es un espacio de juego para mi. Esta es una muestra de trabajos personales y en entornos de práctica. Me encantan los videoclips, de toda la vida, y ese formato es el que me inspira y disfruto de esta disciplina mágica del diseño gráfico.'
    },
])

const Logotipos = ref([
    {
        id: 1,
        categoria: 'Logotipos',
        src: logo01,
        titulo: 'Ca la Teresina',
        descripcion: "Ca la Teresina es una carnicería de toda la vida del barrio. Su producto es de muy alta calidad y el trato con el cliente uno de sus valores más reconocidos. Cuando me encargaron el rediseño del logotipo querian conservar la esencia de su imagen, identificativa desde hace muchos años, pero a la vez darle un aspecto más limpio y actual. ¡Este fue el resultado!",
        ano: 2018,
        mockup: mock01,
    },
    {
        id: 2,
        categoria: 'Logotipos',
        src: logo02,
        titulo: 'Viento Norte Sur',
        descripcion: 'Viento Norte Sur es una asociacion que organiza viajes de turismo responsable donde combina la experiencia del usuario y la actividad solidaria que precise el lugar. Trabajé con ellos en muchos aspectos y uno de ellos fue en renovar el logotipo.',
        ano: 2018,
        mockup: mock02,
        libro: libro01,
    },
    {
        id: 3,
        categoria: 'Logotipos',
        src: logo03,
        titulo: 'Fem Dtot',
        descripcion: "Fem Dtot es una carpintería multiservicios de la Garriga, empresa que antiguamente fue solo carpintería. Quisieron renovar su imagen corporativa y uno de los cambios fue tratar el logotipo como una firma, un sello el cual dejar después de cada trabajo.",
        ano: 2018,
        mockup: mock03,
        libro: libro02,
    },
    {
        id: 4,
        categoria: 'Logotipos',
        src: logo04,
        titulo: 'CamperWow',
        descripcion: "CamperWow nace de un hobbie, de una afición más allá de la remuneración o el reconocimiento. Son una pareja que camperiza furgonetas combinando su estilo propio con un diseño a media del cliente. Utilizan materiales reciclados, materiales naturales y mucho cariño. No podría haber trabajado este logotipo de otra manera que no fuera un lettering.",
        ano: 2019,
        mockup: mock04,
    },
    {
        id: 5,
        categoria: 'Logotipos',
        src: logo05,
        titulo: 'LlarVital',
        descripcion: "LlarVital es una empresa dedicada a la salud y el bienestar de las personas especializada en el tratamiento de magnetoterapia y presoterapia a domicilio. Una empresa con valores como la salud, el cuidado de las personas y el hogar.",
        ano: 2021,
        mockup: mock05,
    },
    {
        id: 6,
        categoria: 'Logotipos',
        src: logo06,
        titulo: 'CarleSoro electricitat',
        descripcion: "Autónomo que emprende su carrera en solitario. Su nombre, su apellido y a lo que se dedica. Una solución old-school, pero para su target, una solución eficaz.",
        ano: 2022,
        mockup: mock06,
    },
    {
        id: 7,
        categoria: 'Logotipos',
        src: logo07,
        titulo: 'Polepole',
        descripcion: "Polepoel es una marca de ropa para bebes handmade, con una filosofía africana llamada 'pole pole', que tiene que ver con un ritmo de vida pausado, totalmente contrario al ritmo de vida frenético de occidente. En el imagotipo encontramos una mezcla de felicidad infantil, un animal que representa la filosofía de la marca que es la tortuga y el ovillo, material básico en el producto final.",
        ano: 2023,
        mockup: mock07,
        libro: libro03,
    },
])

const Tipografía = ref([
    {
        id: 1,
        categoria: 'Tipografía',
        src: tipo01,
        titulo: 'Esbozos Kas',
        descripcion: 'A forma de juego, planteo los esbozos de los murales que hacía, allá en el 2018.',
        ano: 2017,
        mockup: mock08,
        pdf: libro04
    },

    {
        id: 2,
        categoria: 'Tipografía',
        src: tipo02,
        titulo: 'Blanc llenç',
        descripcion: 'Mural para la escuela EMAD de la Garriga.',
        ano: 2018,
        mockup: mock09
    },
    {
        id: 3,
        categoria: 'Tipografía',
        src: tipo03,
        titulo: 'Clean trip',
        descripcion: 'Logo para un productor de música trance utilizando mi tipografía K66-Type, descargable en el link.',
        ano: 2018,
        mockup: mock10
    },
    {
        id: 4,
        categoria: 'Tipografía',
        src: tipo04,
        titulo: 'Love',
        descripcion: 'Amor, con pluma cailgráfica y en rojo pasión.',
        ano: 2018,
        mockup: mock11
    },
    {
        id: 5,
        categoria: 'Tipografía',
        src: tipo05,
        titulo: 'Oh shit!',
        descripcion: '¡Ops!, nos quedamos sin papel. Chiste gráfico utilizando Adobe Illustrator y Cinema4D',
        ano: 2019,
        mockup: mock12
    },
    {
        id: 6,
        categoria: 'Tipografía',
        src: tipo06,
        titulo: 'K66 Type',
        descripcion: 'Mi primera tipografía creada a base de rotulador y pruebas. Aplicada la proporción aurea y limpieza de vectores, ya tendriamos la font.',
        ano: 2019,
        mockup: mock13,
        pdf: ''
    },
])

const Ilustración = ref([
    {
        id: 1,
        categoria: 'Ilustración',
        src: ilustr01,
        titulo: 'Mr.Ruffles',
        descripcion: 'Retrato caricatura del dueño de un establecimiento de comida rápida.',
        ano: 2017,
        mockup: mock14

    },
    {
        id: 2,
        categoria: 'Ilustración',
        src: ilustr02,
        titulo: 'Camiseta Torete tattoo',
        descripcion: 'Ilustración para un concurso de Instagram. La cuenta que organizó el concurso fue Torete Tattoo.',
        ano: 2019,
        mockup: mock15
    },
    {
        id: 3,
        categoria: 'Ilustración',
        src: ilustr03,
        titulo: 'Camiseta Suburbia',
        descripcion: 'Ilustración para un concurso de Instagram. La cuenta que organizó el concurso fue Suburbia BCN.',
        ano: 2020,
        mockup: mock16

    },
])

const DiseñoGráfico = ref([
    {
        id: 1,
        categoria: 'DiseñoGráfico',
        src: dis01,
        titulo: 'Cartel de la fiesta mayor de la Garriga 2018',
        descripcion: 'Cartel de la fiesta mayor de la Garriga de 2018, donde querían enfatizar con el mensaje de "NO és NO"',
        ano: 2017,
        mockup: mock17
    },
    {
        id: 2,
        categoria: 'DiseñoGráfico',
        src: dis02,
        titulo: 'Cartel Viu la Música 2018 "Concert"',
        descripcion: 'Cartel promocional para la escuela Viu la Música de Cardedeu. Anunciaban talleres de teatro y la obra de "El petit princep"',
        ano: 2017,
        mockup: mock18
    },
    {
        id: 3,
        categoria: 'DiseñoGráfico',
        src: dis03,
        titulo: 'Cartel Viu la Música 2018 "El petit princep"',
        descripcion: 'Cartel promocional para la escuela Viu la Música de Cardedeu. Anunciaban el festival musical que recorrería el pueblo esos días.',
        ano: 2017,
        mockup: mock19
    },
    {
        id: 4,
        categoria: 'DiseñoGráfico',
        src: dis04,
        titulo: 'Tarjeta ATM Barcelona',
        descripcion: 'Propuesta de tarjeta-tiquet para la Autoridad de Transporte Metropolitano de Barcelona.',
        ano: 2017,
        mockup: mock20
    },
    {
        id: 5,
        categoria: 'DiseñoGráfico',
        src: dis05,
        titulo: 'Portada Kafka',
        descripcion: 'Propuesta editarial para la portada del libro de Kafka.',
        ano: 2017,
        mockup: mock21
    },
    {
        id: 6,
        categoria: 'DiseñoGráfico',
        src: dis06,
        titulo: 'Revista Sonorama',
        descripcion: 'Propuesta de portada para la revista musical Sonorama',
        ano: 2017,
        mockup: mock22
    },
    {
        id: 7,
        categoria: 'DiseñoGráfico',
        src: dis07,
        titulo: 'Cartel Tastautors',
        descripcion: 'Cartel promocional del festival Tastautors de Cardedeu que se celebra en El Tarambana, espacio gastro-musical de Cardedeu, todo de cercania.',
        ano: 2017,
        mockup: mock23
    },
])

const Audiovisual = ref([
    {
        id: 1,
        categoria: 'Audiovisual',
        url: 'https://player.vimeo.com/video/155425192?h=0a54af5c07autoplay=1&muted=1',
        titulo: 'Entrevista a Franela',
        descripcion: 'Les hice una entrevista a esta pareja, que aparte de ser unas cracks en lo suyo, son de las personas que más quiero.',
        ano: 2015,
        mockup: mock24
    },
    {
        id: 2,
        categoria: 'Audiovisual',
        url: 'https://player.vimeo.com/video/152186713?h=563088b3edautoplay=1&muted=1',
        titulo: 'Tutorial: Como sacarle punta al lápiz',
        descripcion: 'Trabajo experimental con un compañero del gremio',
        ano: 2016,
        mockup: mock25
    },
    {
        id: 3,
        categoria: 'Audiovisual',
        url: 'https://player.vimeo.com/video/155861926?h=04ae861d63autoplay=1&muted=1',
        titulo: 'Naranja',
        descripcion: 'Todo color tiene su significado, su olor, su sabor... El naranja lo veo así.',
        ano: 2016,
        mockup: mock26
    },
    {
        id: 4,
        categoria: 'Audiovisual',
        url: 'https://player.vimeo.com/video/164078951?h=a9a9bd8a32autoplay=1&muted=1',
        titulo: 'Jack Max',
        descripcion: 'Montaje Audiovisual analítico sobre un personaje ficticio. Grabo y edito el video.',
        ano: 2017,
        mockup: mock27
    },
    {
        id: 5,
        categoria: 'Audiovisual',
        url: 'https://player.vimeo.com/video/233809528?h=4850c0b4c2autoplay=1&muted=1',
        titulo: 'Mapping Nike',
        descripcion: 'En clase de Audiovisuales estuvimos experimentando con el mapping y este fue el resultado editado.',
        ano: 2018,
        mockup: mock28
    },
    {
        id: 6,
        categoria: 'Audiovisual',
        url: 'https://player.vimeo.com/video/302022028?h=5ee10f2b13autoplay=1&muted=1',
        titulo: 'Tampax',
        descripcion: 'A modo de juego, hice un anuncio para Tampax. Quise cambiar el roll repetitivo de los anuncios dirigidos a la menstruación.',
        ano: 2018,
        mockup: mock29
    },
    {
        id: 7,
        categoria: 'Audiovisual',
        url: 'https://player.vimeo.com/video/419561603?h=812acadb52autoplay=1&muted=1',
        titulo: 'Tipografía K66',
        descripcion: 'Este es el test que hize para mi primera tipografía. En la sección Tipografiía de mi portfolio podréis descargarla.',
        ano: 2019,
        mockup: mock30
    }
])

const categoria = ref('Logotipos'); // Categoria por defecto

function cambiarCategoria(nuevaCategoria) {
    categoria.value = nuevaCategoria;
}

function trabajosMostrados() {
    let trabajos = [];

    switch (categoria.value) {
        case 'Logotipos':
            trabajos = Logotipos.value;
            break;
        case 'Tipografía':
            trabajos = Tipografía.value;
            break;
        case 'Ilustración':
            trabajos = Ilustración.value;
            break;
        case 'DiseñoGráfico':
            trabajos = DiseñoGráfico.value;
            break;
        case 'Audiovisual':
            trabajos = Audiovisual.value;
            break;
    }

    return trabajos;
}

// const actualizarLikes = (id, likes) => {
//     const index = Logotipos.findIndex((logotipo) => logotipo.id === id)
//     Logotipos[index].likes = likes
// }

let mostrarIframe = ref(false)

function desactivarHover(mostrarIframe) {
    const elementosAbajo = document.querySelectorAll(':not(iframe)');
    elementosAbajo.forEach((elem) => {
        elem.style.pointerEvents = mostrarIframe ? 'none' : 'auto';
    });
}
</script>

<template>
    <!-- Botones de categoría -->
    <div class="portfolio">
        <div class="btn-portfolio">
            <button class="btn-categoria" :class="{ 'btn-active': categoria === 'Logotipos' }"
                @click="cambiarCategoria('Logotipos')">Logotipos</button>
            <button class="btn-categoria" :class="{ 'btn-active': categoria === 'Tipografía' }"
                @click="cambiarCategoria('Tipografía')">Tipografía</button>
            <button class="btn-categoria" :class="{ 'btn-active': categoria === 'Ilustración' }"
                @click="cambiarCategoria('Ilustración')">Ilustración</button>
            <button class="btn-categoria" :class="{ 'btn-active': categoria === 'DiseñoGráfico' }"
                @click="cambiarCategoria('DiseñoGráfico')">Diseño gráfico</button>
            <button class="btn-categoria" :class="{ 'btn-active': categoria === 'Audiovisual' }"
                @click="cambiarCategoria('Audiovisual')">Audiovisual</button>
        </div>
        <!-- Categoría -->
        <div class="trabajos">
            <div class="titulo">
                <!-- Título -->
                <h1>{{ categoria }}</h1>
                <!-- Descripción de la sección -->
                <p class="desc-seccion" v-for="(item, index) in descripcionSecciones" :key="index"
                    v-show="item.categoria === categoria">{{ item.seccion }}</p>
                <p class="desc-seccion" v-for="(item, index) in descripcionSecciones" :key="index"
                    v-show="item.categoria === Ilustración" style="margin-bottom: 50px;">{{ item.seccion }}</p>
            </div>
            <!-- Galeria -->
            <div
                :class="{ 'portfolio-galeria': categoria !== 'DiseñoGráfico' && categoria !== 'Ilustración', 'portfolio-galeria-vertical': categoria === 'DiseñoGráfico' || categoria === 'Ilustración' }">

                <!-- Cards -->
                <div :class="{ 'card': categoria !== 'DiseñoGráfico' && categoria !== 'Ilustración', 'card-vertical': categoria === 'DiseñoGráfico' || categoria === 'Ilustración' }"
                    v-for="(trabajo, index) in trabajosMostrados()" :key="index">

                    <!-- Imagen muestra -->
                    <img class="card-img fondo-logo" :src="trabajo.src" :alt="trabajo.titulo"
                        v-if="categoria === 'Logotipos'">
                    <img class="card-img fondo-logo" :src="trabajo.src" :alt="trabajo.titulo"
                        v-else-if="categoria === 'Tipografía'">
                    <img class="card-img-vertical fondo-logo" :src="trabajo.src" :alt="trabajo.titulo"
                        v-else-if="categoria === 'Ilustración'">
                    <img class="card-img-vertical fondo-logo" :src="trabajo.src" :alt="trabajo.titulo"
                        v-else-if="categoria === 'DiseñoGráfico'">
                    <img class="card-img fondo-logo" :src="trabajo.mockup" :alt="trabajo.titulo"
                        v-else-if="categoria === 'Audiovisual'">

                    <!-- Imagen :hover (card-overlay)-->
                    <div class="card-overlay">
                        <img class="card-img" :src="trabajo.mockup" :alt="trabajo.titulo" v-if="categoria === 'Logotipos'">
                        <img class="card-img" :src="trabajo.mockup" :alt="trabajo.titulo"
                            v-else-if="categoria === 'Tipografía'">
                        <img class="card-img-vertical" :src="trabajo.mockup" :alt="trabajo.titulo"
                            v-else-if="categoria === 'Ilustración'">
                        <img class="card-img-vertical" :src="trabajo.mockup" :alt="trabajo.titulo"
                            v-else-if="categoria === 'DiseñoGráfico'">
                        <a v-if="categoria === 'Audiovisual'" @click="mostrarIframe = true" class="icono-play card-img">
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-player-play"
                                width="39" height="39" viewBox="0 0 24 24" stroke-width="1" stroke="#F26241" fill="none"
                                stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M7 4v16l13 -8z"></path>
                            </svg>
                        </a>
                        <div v-if="mostrarIframe" class="iframe-container">
                            <button @click="mostrarIframe = false">
                                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x" width="24"
                                    height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none"
                                    stroke-linecap="round" stroke-linejoin="round">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <path d="M18 6l-12 12"></path>
                                    <path d="M6 6l12 12"></path>
                                </svg>
                            </button>
                            <iframe :src="trabajo.url" width="640" height="360" frameborder="0" allowfullscreen></iframe>
                        </div>
                    </div>

                    <!-- Caja info -->
                    <div
                        :class="{ 'card-text': categoria !== 'DiseñoGráfico' && categoria !== 'Ilustración', 'card-text-vertical': categoria === 'DiseñoGráfico' || categoria === 'Ilustración' }">
                        <h2>{{ trabajo.titulo }}</h2>
                        <p>{{ trabajo.descripcion }}</p>
                        <button v-show="trabajo.libro" class="btn-pdf"><a :href="trabajo.libro" target="_blank"
                                rel="noopener noreferrer">Libro de estilo</a></button>
                        <button v-show="trabajo.pdf" class="btn-pdf"><a :href="trabajo.pdf" target="_blank"
                                rel="noopener noreferrer">Mostrar PDF</a></button>
                        <button v-show="trabajo.url" class="btn-pdf"><a :href="trabajo.url" target="_blank"
                                rel="noopener noreferrer">Ver en Vimeo</a></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.portfolio {
    width: 100%;
    margin: 100px 0px 381px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.btn-portfolio {
    max-width: 1006px;
    width: 100%;
    margin: 0px 0px 76px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
}

.btn-categoria {
    padding: 29px;
    color: #c0ac9b;
    border: 0px solid #262626;
    text-transform: uppercase;
    padding: 29px 16px 29px;
    text-decoration: none;
}

.btn-categoria:hover {
    color: #262626;
    background: #FFFCF7;
}

.btn-active {
    color: #262626;
    width: auto;
    height: 30px;
    padding: 29px 16px 29px;
    margin: 0px 0px 0px;
    text-transform: uppercase;
    border-bottom: 2px solid #262626;
}

.btn-pdf {
    width: fit-content;
}

.trabajos {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.titulo {
    min-width: 381px;
    max-width: 728px;
    width: 100%;
    height: fit-content;
    padding: 29px;
    margin: 0px 0px 55px;
    border-radius: 3px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.titulo h1 {
    width: 100%;
    color: #262626;
    text-transform: uppercase;
}

.desc-seccion {
    width: 100%;
    padding: 15px 0px 0px;
    color: #262626;
    letter-spacing: 0.08rem;
}

.portfolio-galeria {
    display: flex;
    flex-wrap: wrap;
    gap: 29px;
    justify-content: center;
    align-items: center;
    justify-items: center;
}

.portfolio-galeria-vertical {
    display: flex;
    flex-wrap: wrap;
    gap: 29px;
    justify-content: center;
    align-items: center;
    justify-items: center;
}

.card {
    position: relative;
    overflow: visible;
    width: 275px;
    height: 275px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #262626;
    border-radius: 15px;
}

.card:hover {
    z-index: 4;
}

.card-vertical {
    position: relative;
    overflow: visible;
    width: 275px;
    height: 381px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #262626;
    border-radius: 15px;
}



.card:hover .card-overlay {
    opacity: 1;
}

.card-vertical:hover .card-overlay {
    opacity: 1;
}

.fondo-logo {
    border-radius: 10px;
    padding: 15px;
}

.card:hover .fondo-logo {
    border: 0px solid transparent;
}

.card-vertical:hover .fondo-logo {
    border: 0px solid transparent;
}

.card-overlay {
    position: absolute;
    opacity: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: 0.2s ease-out;
}


.card-img {
    width: 250px;
    height: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    object-position: center;
    background: #fff;
    margin: 15px;
}

.card-img-vertical {
    width: 250px;
    height: 356px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    object-position: center;
    background: #fff;
    margin: 15px;
}

.card-overlay .card-img {
    width: 275px;
    height: 275px;
    align-self: center;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    border-radius: 15px 15px 0px 0px;
    z-index: 3;
}

.card-overlay:hover .card-img {
    width: 275px;
    height: 275px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    z-index: 3;
}

.card-overlay .card-img-vertical {
    width: 275px;
    height: 381px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    border-radius: 15px 15px 0px 0px;
    z-index: 3;
}

.card-overlay:hover .card-img-vertical {
    width: 275px;
    height: 381px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    z-index: 3;
}


.card-text {
    position: absolute;
    top: 0px;
    background: #FFFCF7;
    opacity: 0;
    min-height: fit-content;
    min-width: 275px;
    padding: 29px 21px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-shadow: 3px 3px 9px #DBCFC550;
    border-radius: 0px 0px 15px 15px;
    z-index: 2;
}

.card-text h2 {
    color: #F26241;
    text-align: left;
    letter-spacing: 0.04rem;
}

.card-text p {
    color: #262626;
    text-align: left;
    letter-spacing: 0.04rem;

}

.card:hover .card-text {
    animation: card-text 0.4s ease-out forwards;
}

@keyframes card-text {
    50% {
        transform: translateY(0px);
        opacity: 0;
    }

    100% {
        transform: translateY(275px);
        opacity: 1;
    }

}

.card-text-vertical {
    position: absolute;
    top: 0px;
    background: #FFFCF7;
    opacity: 0;
    min-height: fit-content;
    min-width: 275px;
    padding: 29px 21px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-shadow: 3px 3px 9px #DBCFC550;
    border-radius: 0px 0px 15px 15px;
    z-index: 2;
}

.card-text-vertical h2 {
    color: #F26241;
    text-align: left;
    letter-spacing: 0.04rem;
}

.card-text-vertical p {
    color: #262626;
    text-align: left;
    letter-spacing: 0.04rem;
}

.card-vertical:hover .card-text-vertical {
    animation: card-text-vertical 0.4s ease-out forwards;
}

@keyframes card-text-vertical {
    50% {
        transform: translateY(0px);
        opacity: 0;
    }

    100% {
        transform: translateY(381px);
        opacity: 1;
    }

}

a {
    font-family: "Cairo";
    src:
        url("/fonts/cairo-vf.ttf") format("truetype");
    font-display: swap;
    font-size: 15px;
    letter-spacing: 0.1rem;
    line-height: 1.1rem;
    font-weight: 400;
    text-decoration: none;
    color: #262626;
    text-align: center;
}

a:hover {
    color: #FFFCF7;
}

.icono-play {
    background: #262626;
    width: 275px;
    height: 275px;
    display: flex;
    justify-content: center;
    align-items: center;
}


.icono-play svg path {
    transform-origin: center;
    transition: transform 0.3s ease-out;
}

.icono-play svg path:last-child {
    fill: #F2624150;
}

.icono-play:hover svg path:last-child {
    transform: scale(1.3);
    fill: #F26241;
}

.iframe-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 9999;
    background: #262626;
    display: flex;
    justify-content: center;
    align-items: center;
}

.iframe-container iframe {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 70%;
    height: 70%;
}

.iframe-container button {
    position: absolute;
    top: 20px;
    right: 30px;
    margin-top: 120px;
    background: transparent;
    color: #FFFCF7;
    border: 0px solid transparent;
    width: 30px;
    padding: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100%;
}

.iframe-container button:hover {
    position: absolute;
    top: 20px;
    right: 30px;
    margin-top: 120px;
    background: #F26241;
    color: #FFFCF7;
    border: 0px solid transparent;
    padding: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
}

@media only screen and (max-width: 425px) {
    .iframe-container iframe {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
    }

    .iframe-container button {
        position: absolute;
        top: -40px;
        right: 30px;
        margin-top: 120px;
        background: transparent;
        color: #FFFCF7;
        border: 0px solid transparent;
        width: 30px;
        padding: 0px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 100%;
    }

    .btn-portfolio {
        width: 100%;
        margin: 0px 0px 29px;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }

    .portfolio {
        width: 100%;
        margin: 76px 0px 381px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
}
</style>