<script setup>
import { ref, watch } from "vue";
//import tech
import portada from "@/components/portada.vue";
import tech01 from "@/assets/img/photshop.png";
import tech02 from "@/assets/img/illustrator.png";
import tech03 from "@/assets/img/indesign.png";
import tech04 from "@/assets/img/aftereffects.png";
import tech05 from "@/assets/img/premiere.png";
import tech06 from "@/assets/img/xd.png";
import tech07 from "@/assets/img/wordpress.png";
import tech08 from "@/assets/img/html.png";
import tech09 from "@/assets/img/css.png";
import tech10 from "@/assets/img/javascript.png";
import tech11 from "@/assets/img/visualstudiocode.png";
import tech12 from "@/assets/img/vue.png";
import steveJobs from "@/assets/img/steve-jobs.jpeg";

//CONTENIDO VIDALABORAL
const cvAndreu = ref([
  {
    id: 0,
    diseñador: "Antes",
    año: "2001",
    añoMin: "|",
    hasta: "2001",
    duracion: "2 meses",
    cargo: "Aprendiz de mécanico de compresores de aire",
    empresa: "DICELMAC AUTOMATISMES S.L.",
    descripcion:
      "Fue mi primer trabajo. Uno de esos trabajos de verano, durante las vacaciones del curso, donde aprovechas el tiempo para ganas tu primer salario. Mi función en la empresa fue limpiar piezas y servir herramientas al mecánico que montaba los compresores.",
    formacion: "ESO - Estudios Secundarios Obligatorios",
    centro: "IES El Suí",
    curso: "1996-1999",
    nota: "6,4",
    sSkills01: "Aprendizaje activo",
    sSkDesc01:
      "Nuevas tecnologias, nuevos tiempos. Se que un continuo aprendizaje me va a acompañar a lo largo de mi trayectoria. Por eso se que acomodarse no es una opción.",
    sSkills02: "",
    sSkDesc02: "",
    sSkills03: "",
    sSkDesc03: "",
    sSkills04: "",
    sSkDesc04: "",
    sSkills05: "",
    sSkDesc05: "",
    hSkills01: "",
    hSkTools01: "",
    hSkills02: "",
    hSkTools02: "",
    hSkills03: "",
    hSkTools03: "",
    hSkills04: "",
    hSkTools04: "",
  },
  {
    id: 1,
    diseñador: "Antes",
    año: "2002",
    añoMin: "|",
    hasta: "2002",
    duracion: "2 meses",
    cargo: "Operario en rebobinadora de papel de celulosa",
    empresa: "CRISWEN, S.A.",
    descripcion:
      "Mi función en la empresa era cargar la máquina de papel, rebobinar el papel y extraer el producto para su empaquetado.",
    formacion: "CFGM - Arte final en diseño gráfico",
    centro: "Escola Municipal d'Art i Diseny de la Garriga (EMAD)",
    curso: "2002-2004",
    nota: "7,6",
    sSkills01: "Aprendizaje activo",
    sSkDesc01:
      "Nuevas tecnologias, nuevos tiempos. Se que un continuo aprendizaje me va a acompañar a lo largo de mi trayectoria. Por eso se que acomodarse no es una opción.",
    sSkills02: "Analsis y resolución de problemas",
    sSkDesc02:
      "La revolución constante de la tecnología nos obliga a tener herramientas para saber gestionar los cambios.",
    sSkills03: "",
    sSkDesc03: "",
    sSkills04: "",
    sSkDesc04: "",
    sSkills05: "",
    sSkDesc05: "",
    hSkills01: "Diseño gráfico",
    hSkTools01: "Adobe Photoshop, Macromedia Flash y Macromedia Freehand",
    hSkills02: "",
    hSkTools02: "",
    hSkills03: "",
    hSkTools03: "",
    hSkills04: "",
    hSkTools04: "",
  },
  {
    id: 2,
    diseñador: "Antes",
    año: "2003",
    añoMin: "|",
    hasta: "2003",
    duracion: "2 meses",
    cargo: "Operario de carretilla",
    empresa: "ALMACENES DIA%",
    descripcion:
      "Estuve en el equipo de descarga de camiones con carretilla elevadora.",
    formacion: "CFGM - Arte final en diseño gráfico",
    centro: "Escola Municipal d'Art i Diseny de la Garriga (EMAD)",
    curso: "2002-2004",
    nota: "7,6",
    sSkills01: "Aprendizaje activo",
    sSkDesc01:
      "Nuevas tecnologias, nuevos tiempos. Se que un continuo aprendizaje me va a acompañar a lo largo de mi trayectoria. Por eso se que acomodarse no es una opción.",
    sSkills02: "Analsis y resolución de problemas",
    sSkDesc02:
      "La revolución constante de la tecnología nos obliga a tener herramientas para saber gestionar los cambios.",
    sSkills03: "",
    sSkDesc03: "",
    sSkills04: "",
    sSkDesc04: "",
    sSkills05: "",
    sSkDesc05: "",
    hSkills01: "Diseño gráfico",
    hSkTools01: "Adobe Photoshop, Macromedia Flash y Macromedia Freehand",
    hSkills02: "",
    hSkTools02: "",
    hSkills03: "",
    hSkTools03: "",
    hSkills04: "",
    hSkTools04: "",
  },
  {
    id: 3,
    diseñador: "Antes",
    año: "2004",
    añoMin: "|",
    hasta: "2005",
    duracion: "1 año",
    cargo: "Responsable de almacén y logística de equipos de montadores",
    empresa: "MOBLES PANORAMA S.A.",
    descripcion:
      "Después de completar mis estudios en la Escuela Municipal de Arte y Diseño de La Garriga (EMAD), tuve la oportunidad de embarcarme en mi primer trabajo significativo en el mundo laboral. Durante un año, trabajé para obtener mi carnet de conducir tipo B y continuar con mis estudios. Este trabajo no solo me brindó independencia financiera, sino que también me permitió crecer como profesional. En esta experiencia laboral, tuve la fortuna de ser asignado como responsable de una sección en una empresa. Tuve la responsabilidad de recibir los productos de los proveedores, optimizar el espacio de almacenamiento por clientes y organizar los grupos de trabajo junto con sus rutas de atención a clientes. Esta experiencia única, motivada por la necesidad y la casualidad, me permitió desarrollar habilidades de liderazgo, gestión y organización. A través de esta oportunidad, pude demostrar mi capacidad para asumir responsabilidades y coordinar eficientemente distintos aspectos del trabajo. Aprendí a adaptarme rápidamente a nuevas situaciones y a optimizar los recursos disponibles para lograr los objetivos establecidos. Este primer trabajo importante en mi vida laboral me ha dejado una valiosa lección sobre el crecimiento profesional y la capacidad de asumir roles de liderazgo. Estoy entusiasmado por aplicar estos aprendizajes y seguir avanzando en mi trayectoria profesional.",
    formacion: "CFGM - Arte final en diseño gráfico",
    centro: "Escola Municipal d'Art i Diseny de la Garriga (EMAD)",
    curso: "2002-2004",
    nota: "7,6",
    sSkills01: "Aprendizaje activo",
    sSkDesc01:
      "Nuevas tecnologias, nuevos tiempos. Se que un continuo aprendizaje me va a acompañar a lo largo de mi trayectoria. Por eso se que acomodarse no es una opción.",
    sSkills02: "Analsis y resolución de problemas",
    sSkDesc02:
      "La revolución constante de la tecnología nos obliga a tener herramientas para saber gestionar los cambios.",
    sSkills03: "",
    sSkDesc03: "",
    sSkills04: "",
    sSkDesc04: "",
    sSkills05: "",
    sSkDesc05: "",
    hSkills01: "Diseño gráfico",
    hSkTools01: "Adobe Photoshop, Macromedia Flash y Macromedia Freehand",
    hSkills02: "",
    hSkTools02: "",
    hSkills03: "",
    hSkTools03: "",
    hSkills04: "",
    hSkTools04: "",
  },
  {
    id: 4,
    diseñador: "Antes",
    año: "2005",
    añoMin: "|",
    hasta: "2008",
    duracion: "2 años",
    cargo: "Responsable de almacén",
    empresa: "SAURMIDECOR S.A.",
    descripcion:
      "Motivado por mi reciente emancipación de casa de mis padres, decidí dar un impulso a mi carrera profesional. Tras una experiencia gratificante en una empresa anterior, mis compañeros me recomendaron para un puesto en una empresa más grande del mismo sector, enfocada en la logística y el mobiliario. En esta nueva posición, asumí el rol de organizar el equipo de almacén, gestionar el inventario y coordinar la distribución de repartos a los transportistas. Mi enfoque se centró en garantizar una eficiente operativa logística, optimizando los procesos de almacenamiento y asegurando una entrega puntual y efectiva. Durante mi desempeño, demostré habilidades destacadas en la gestión del equipo y en el análisis de la cadena de suministro. Mi capacidad para tomar decisiones rápidas y resolver problemas de manera efectiva me permitió mantener un flujo constante y eficiente de mercancías. Estoy emocionado por continuar aplicando mi experiencia en logística y mobiliario, así como mis habilidades de organización y gestión, en futuras oportunidades profesionales.",
    formacion: "CFGM - Arte final en diseño gráfico",
    centro: "Escola Municipal d'Art i Diseny de la Garriga (EMAD)",
    curso: "2002-2004",
    nota: "7,6",
    sSkills01: "Aprendizaje activo",
    sSkDesc01:
      "Nuevas tecnologias, nuevos tiempos. Se que un continuo aprendizaje me va a acompañar a lo largo de mi trayectoria. Por eso se que acomodarse no es una opción.",
    sSkills02: "Analsis y resolución de problemas",
    sSkDesc02:
      "La revolución constante de la tecnología nos obliga a tener herramientas para saber gestionar los cambios.",
    sSkills03: "",
    sSkDesc03: "",
    sSkills04: "",
    sSkDesc04: "",
    sSkills05: "",
    sSkDesc05: "",
    hSkills01: "Diseño gráfico",
    hSkTools01: "Adobe Creative Suite, ilustración, tipografía y fotografía",
    hSkills02: "",
    hSkTools02: "",
    hSkills03: "",
    hSkTools03: "",
    hSkills04: "",
    hSkTools04: "",
  },
  {
    id: 5,
    diseñador: "Antes",
    año: "2006",
    añoMin: "|",
    hasta: "2008",
    duracion: "2 años",
    cargo: "Responsable de almacén",
    empresa: "SAURMIDECOR S.A.",
    descripcion:
      "Motivado por mi reciente emancipación de casa de mis padres, decidí dar un impulso a mi carrera profesional. Tras una experiencia gratificante en una empresa anterior, mis compañeros me recomendaron para un puesto en una empresa más grande del mismo sector, enfocada en la logística y el mobiliario. En esta nueva posición, asumí el rol de organizar el equipo de almacén, gestionar el inventario y coordinar la distribución de repartos a los transportistas. Mi enfoque se centró en garantizar una eficiente operativa logística, optimizando los procesos de almacenamiento y asegurando una entrega puntual y efectiva. Durante mi desempeño, demostré habilidades destacadas en la gestión del equipo y en el análisis de la cadena de suministro. Mi capacidad para tomar decisiones rápidas y resolver problemas de manera efectiva me permitió mantener un flujo constante y eficiente de mercancías. Estoy emocionado por continuar aplicando mi experiencia en logística y mobiliario, así como mis habilidades de organización y gestión, en futuras oportunidades profesionales.",
    formacion: "CFGM - Arte final en diseño gráfico",
    centro: "Escola Municipal d'Art i Diseny de la Garriga (EMAD)",
    curso: "2002-2004",
    nota: "7,6",
    sSkills01: "Aprendizaje activo",
    sSkDesc01:
      "Nuevas tecnologias, nuevos tiempos. Se que un continuo aprendizaje me va a acompañar a lo largo de mi trayectoria. Por eso se que acomodarse no es una opción.",
    sSkills02: "Analsis y resolución de problemas",
    sSkDesc02:
      "La revolución constante de la tecnología nos obliga a tener herramientas para saber gestionar los cambios.",
    sSkills03: "",
    sSkDesc03: "",
    sSkills04: "",
    sSkDesc04: "",
    sSkills05: "",
    sSkDesc05: "",
    hSkills01: "Diseño gráfico",
    hSkTools01: "Adobe Creative Suite, ilustración, tipografía y fotografía",
    hSkills02: "",
    hSkTools02: "",
    hSkills03: "",
    hSkTools03: "",
    hSkills04: "",
    hSkTools04: "",
  },
  {
    id: 6,
    diseñador: "Antes",
    año: "2007",
    añoMin: "|",
    hasta: "2008",
    duracion: "2 años",
    cargo: "Responsable de almacén",
    empresa: "SAURMIDECOR S.A.",
    descripcion:
      "Motivado por mi reciente emancipación de casa de mis padres, decidí dar un impulso a mi carrera profesional. Tras una experiencia gratificante en una empresa anterior, mis compañeros me recomendaron para un puesto en una empresa más grande del mismo sector, enfocada en la logística y el mobiliario. En esta nueva posición, asumí el rol de organizar el equipo de almacén, gestionar el inventario y coordinar la distribución de repartos a los transportistas. Mi enfoque se centró en garantizar una eficiente operativa logística, optimizando los procesos de almacenamiento y asegurando una entrega puntual y efectiva. Durante mi desempeño, demostré habilidades destacadas en la gestión del equipo y en el análisis de la cadena de suministro. Mi capacidad para tomar decisiones rápidas y resolver problemas de manera efectiva me permitió mantener un flujo constante y eficiente de mercancías. Estoy emocionado por continuar aplicando mi experiencia en logística y mobiliario, así como mis habilidades de organización y gestión, en futuras oportunidades profesionales.",
    formacion: "CFGM - Arte final en diseño gráfico",
    centro: "Escola Municipal d'Art i Diseny de la Garriga (EMAD)",
    curso: "2002-2004",
    nota: "7,6",
    sSkills01: "Aprendizaje activo",
    sSkDesc01:
      "Nuevas tecnologias, nuevos tiempos. Se que un continuo aprendizaje me va a acompañar a lo largo de mi trayectoria. Por eso se que acomodarse no es una opción.",
    sSkills02: "Analsis y resolución de problemas",
    sSkDesc02:
      "La revolución constante de la tecnología nos obliga a tener herramientas para saber gestionar los cambios.",
    sSkills03: "",
    sSkDesc03: "",
    sSkills04: "",
    sSkDesc04: "",
    sSkills05: "",
    sSkDesc05: "",
    hSkills01: "Diseño gráfico",
    hSkTools01: "Adobe Creative Suite, ilustración, tipografía y fotografía",
    hSkills02: "",
    hSkTools02: "",
    hSkills03: "",
    hSkTools03: "",
    hSkills04: "",
    hSkTools04: "",
  },
  {
    id: 7,
    diseñador: "Antes",
    año: "2008",
    añoMin: "|",
    hasta: "2008",
    duracion: "2 años",
    cargo: "Responsable de almacén",
    empresa: "SAURMIDECOR S.A.",
    descripcion:
      "Motivado por mi reciente emancipación de casa de mis padres, decidí dar un impulso a mi carrera profesional. Tras una experiencia gratificante en una empresa anterior, mis compañeros me recomendaron para un puesto en una empresa más grande del mismo sector, enfocada en la logística y el mobiliario. En esta nueva posición, asumí el rol de organizar el equipo de almacén, gestionar el inventario y coordinar la distribución de repartos a los transportistas. Mi enfoque se centró en garantizar una eficiente operativa logística, optimizando los procesos de almacenamiento y asegurando una entrega puntual y efectiva. Durante mi desempeño, demostré habilidades destacadas en la gestión del equipo y en el análisis de la cadena de suministro. Mi capacidad para tomar decisiones rápidas y resolver problemas de manera efectiva me permitió mantener un flujo constante y eficiente de mercancías. Estoy emocionado por continuar aplicando mi experiencia en logística y mobiliario, así como mis habilidades de organización y gestión, en futuras oportunidades profesionales.",
    formacion: "CFGM - Arte final en diseño gráfico",
    centro: "Escola Municipal d'Art i Diseny de la Garriga (EMAD)",
    curso: "2002-2004",
    nota: "7,6",
    sSkills01: "Aprendizaje activo",
    sSkDesc01:
      "Nuevas tecnologias, nuevos tiempos. Se que un continuo aprendizaje me va a acompañar a lo largo de mi trayectoria. Por eso se que acomodarse no es una opción.",
    sSkills02: "Analsis y resolución de problemas",
    sSkDesc02:
      "La revolución constante de la tecnología nos obliga a tener herramientas para saber gestionar los cambios.",
    sSkills03: "Flexibilidd y resiliencia",
    sSkDesc03:
      "Detectar las limitaciones y los problemas con los timings me lleva a ser, no solo resolutivo, sino a adaptar la solución al entorno de trabajo.",
    sSkills04: "",
    sSkDesc04: "",
    sSkills05: "",
    sSkDesc05: "",
    hSkills01: "Diseño gráfico",
    hSkTools01: "Adobe Creative Suite, ilustración, tipografía y fotografía",
    hSkills02: "Logística",
    hSkTools02:
      "El orden y la indexación de productos, estocaje y gestión del equipo.",
    hSkills03: "",
    hSkTools03: "",
    hSkills04: "",
    hSkTools04: "",
  },
  {
    id: 8,
    diseñador: "Antes",
    año: "2009",
    añoMin: "|",
    hasta: "2010",
    duracion: "2 temporadas de 6 meses",
    cargo: "Cocinero",
    empresa: "CAFÈ EL PILAR",
    descripcion:
      "Tras verse afectado por la crisis económica de 2008, aproveché mi tiempo en el paro para realizar un curso de Macromedia. Una vez finalizado, decidí buscar trabajo temporal en las Islas Baleares. Sorprendentemente, encontré empleo como cocinero, una experiencia totalmente nueva para mí a nivel laboral. Aunque siempre había tenido el hobby de cocinar en mi propia cocina, en este trabajo me encontré solo frente a los desafíos. Fui responsable de diseñar menús, gestionar la preparación y logística de los productos, y cocinar para servicios de mañana y tarde-noche. Esta experiencia me permitió desarrollar habilidades de aprendizaje activo y análisis de resolución de problemas en un entorno dinámico y exigente. Aprendí rápidamente sobre la marcha y me adapté a los desafíos diarios, demostrando mi capacidad para asumir responsabilidades y enfrentar situaciones nuevas. Mi disposición para aprender activamente y mi habilidad para analizar y resolver problemas se reflejan en mi capacidad para enfrentar y superar desafíos laborales de manera eficiente y efectiva. Estoy ansioso por aplicar estas habilidades y contribuir al éxito de futuros proyectos.",
    formacion: "CFGM - Arte final en diseño gráfico",
    centro: "Escola Municipal d'Art i Diseny de la Garriga (EMAD)",
    curso: "2002-2004",
    nota: "7,6",
    sSkills01: "Aprendizaje activo",
    sSkDesc01:
      "Nuevas tecnologias, nuevos tiempos. Se que un continuo aprendizaje me va a acompañar a lo largo de mi trayectoria. Por eso se que acomodarse no es una opción.",
    sSkills02: "Analsis y resolución de problemas",
    sSkDesc02:
      "La revolución constante de la tecnología nos obliga a tener herramientas para saber gestionar los cambios.",
    sSkills03: "Flexibilidd y resiliencia",
    sSkDesc03:
      "Detectar las limitaciones y los problemas con los timings me lleva a ser, no solo resolutivo, sino a adaptar la solución al entorno de trabajo.",
    sSkills04: "Gestión del cambio",
    sSkDesc04:
      "El cambio es algo constante en todos los escenarios de la vida. El cambio es positivo. El cambio nos hace crecer.",
    sSkills05: "",
    sSkDesc05: "",
    hSkills01: "Diseño gráfico",
    hSkTools01: "Adobe Creative Suite, ilustración, tipografía y fotografía",
    hSkills02: "Logística",
    hSkTools02:
      "El orden y la indexación de productos, estocaje y gestión del equipo.",
    hSkills03: "",
    hSkTools03: "",
    hSkills04: "",
    hSkTools04: "",
  },
  {
    id: 9,
    diseñador: "Antes",
    año: "2010",
    añoMin: "|",
    hasta: "2015",
    duracion: "5 años",
    cargo: "Oficial de primera en cartonaje para alimentación",
    empresa: "MEDIOAMBIENTE PACK S.A.",
    descripcion:
      "Un familiar me recomendó para un puesto en una empresa en Valencia. Desde mi llegada, asumí el rol de reemplazar a la persona a cargo de la impresora. A medida que ganaba experiencia, me familiaricé con la maquinaria de la empresa y llegué a supervisar los equipos de trabajo en las onduladoras de papel. Una de mis responsabilidades principales era estandarizar los procesos de producción de cuatro de las siete máquinas de la empresa.",
    formacion: "CFGM - Arte final en diseño gráfico",
    centro: "Escola Municipal d'Art i Diseny de la Garriga (EMAD)",
    curso: "2002-2004",
    nota: "7,6",
    sSkills01: "Aprendizaje activo",
    sSkDesc01:
      "Nuevas tecnologias, nuevos tiempos. Se que un continuo aprendizaje me va a acompañar a lo largo de mi trayectoria. Por eso se que acomodarse no es una opción.",
    sSkills02: "Analsis y resolución de problemas",
    sSkDesc02:
      "La revolución constante de la tecnología nos obliga a tener herramientas para saber gestionar los cambios.",
    sSkills03: "Flexibilidd y resiliencia",
    sSkDesc03:
      "Detectar las limitaciones y los problemas con los timings me lleva a ser, no solo resolutivo, sino a adaptar la solución al entorno de trabajo.",
    sSkills04: "Gestión del cambio",
    sSkDesc04:
      "El cambio es algo constante en todos los escenarios de la vida. El cambio es positivo. El cambio nos hace crecer.",
    sSkills05: "Inteligencia emocional y empatía",
    sSkDesc05:
      "A lo largo de mi vida labral y personal he aprendido que el trabajo en equipo es esencial para lograr ejecutar cualquier proyecto.",
    hSkills01: "Diseño gráfico",
    hSkTools01: "Adobe Creative Suite, ilustración, tipografía y fotografía",
    hSkills02: "Logística",
    hSkTools02:
      "El orden y la indexación de productos, estocaje y gestión del equipo.",
    hSkills03: "",
    hSkTools03: "",
    hSkills04: "",
    hSkTools04: "",
  },
  {
    id: 10,
    diseñador: "Antes",
    año: "2011",
    añoMin: "|",
    hasta: "2015",
    duracion: "5 años",
    cargo: "Oficial de primera en cartonaje para alimentación",
    empresa: "MEDIOAMBIENTE PACK S.A.",
    descripcion:
      "Un familiar me recomendó para un puesto en una empresa en Valencia. Desde mi llegada, asumí el rol de reemplazar a la persona a cargo de la impresora. A medida que ganaba experiencia, me familiaricé con la maquinaria de la empresa y llegué a supervisar los equipos de trabajo en las onduladoras de papel. Una de mis responsabilidades principales era estandarizar los procesos de producción de cuatro de las siete máquinas de la empresa.",
    formacion: "CFGM - Arte final en diseño gráfico",
    centro: "Escola Municipal d'Art i Diseny de la Garriga (EMAD)",
    curso: "2002-2004",
    nota: "7,6",
    sSkills01: "Aprendizaje activo",
    sSkDesc01:
      "Nuevas tecnologias, nuevos tiempos. Se que un continuo aprendizaje me va a acompañar a lo largo de mi trayectoria. Por eso se que acomodarse no es una opción.",
    sSkills02: "Analsis y resolución de problemas",
    sSkDesc02:
      "La revolución constante de la tecnología nos obliga a tener herramientas para saber gestionar los cambios.",
    sSkills03: "Flexibilidd y resiliencia",
    sSkDesc03:
      "Detectar las limitaciones y los problemas con los timings me lleva a ser, no solo resolutivo, sino a adaptar la solución al entorno de trabajo.",
    sSkills04: "Gestión del cambio",
    sSkDesc04:
      "El cambio es algo constante en todos los escenarios de la vida. El cambio es positivo. El cambio nos hace crecer.",
    sSkills05: "Inteligencia emocional y empatía",
    sSkDesc05:
      "A lo largo de mi vida labral y personal he aprendido que el trabajo en equipo es esencial para lograr ejecutar cualquier proyecto.",
    hSkills01: "Diseño gráfico",
    hSkTools01: "Adobe Creative Suite, ilustración, tipografía y fotografía",
    hSkills02: "Logística",
    hSkTools02:
      "El orden y la indexación de productos, estocaje y gestión del equipo.",
    hSkills03: "",
    hSkTools03: "",
    hSkills04: "",
    hSkTools04: "",
  },
  {
    id: 11,
    diseñador: "Antes",
    año: "2012",
    añoMin: "|",
    hasta: "2015",
    duracion: "5 años",
    cargo: "Oficial de primera en cartonaje para alimentación",
    empresa: "MEDIOAMBIENTE PACK S.A.",
    descripcion:
      "Un familiar me recomendó para un puesto en una empresa en Valencia. Desde mi llegada, asumí el rol de reemplazar a la persona a cargo de la impresora. A medida que ganaba experiencia, me familiaricé con la maquinaria de la empresa y llegué a supervisar los equipos de trabajo en las onduladoras de papel. Una de mis responsabilidades principales era estandarizar los procesos de producción de cuatro de las siete máquinas de la empresa.",
    formacion: "CFGM - Arte final en diseño gráfico",
    centro: "Escola Municipal d'Art i Diseny de la Garriga (EMAD)",
    curso: "2002-2004",
    nota: "7,6",
    sSkills01: "Aprendizaje activo",
    sSkDesc01:
      "Nuevas tecnologias, nuevos tiempos. Se que un continuo aprendizaje me va a acompañar a lo largo de mi trayectoria. Por eso se que acomodarse no es una opción.",
    sSkills02: "Analsis y resolución de problemas",
    sSkDesc02:
      "La revolución constante de la tecnología nos obliga a tener herramientas para saber gestionar los cambios.",
    sSkills03: "Flexibilidd y resiliencia",
    sSkDesc03:
      "Detectar las limitaciones y los problemas con los timings me lleva a ser, no solo resolutivo, sino a adaptar la solución al entorno de trabajo.",
    sSkills04: "Gestión del cambio",
    sSkDesc04:
      "El cambio es algo constante en todos los escenarios de la vida. El cambio es positivo. El cambio nos hace crecer.",
    sSkills05: "Inteligencia emocional y empatía",
    sSkDesc05:
      "A lo largo de mi vida labral y personal he aprendido que el trabajo en equipo es esencial para lograr ejecutar cualquier proyecto.",
    hSkills01: "Diseño gráfico",
    hSkTools01: "Adobe Creative Suite, ilustración, tipografía y fotografía",
    hSkills02: "Logística",
    hSkTools02:
      "El orden y la indexación de productos, estocaje y gestión del equipo.",
    hSkills03: "",
    hSkTools03: "",
    hSkills04: "",
    hSkTools04: "",
  },
  {
    id: 12,
    diseñador: "Antes",
    año: "2013",
    añoMin: "|",
    hasta: "2015",
    duracion: "5 años",
    cargo: "Oficial de primera en cartonaje para alimentación",
    empresa: "MEDIOAMBIENTE PACK S.A.",
    descripcion:
      "Un familiar me recomendó para un puesto en una empresa en Valencia. Desde mi llegada, asumí el rol de reemplazar a la persona a cargo de la impresora. A medida que ganaba experiencia, me familiaricé con la maquinaria de la empresa y llegué a supervisar los equipos de trabajo en las onduladoras de papel. Una de mis responsabilidades principales era estandarizar los procesos de producción de cuatro de las siete máquinas de la empresa.",
    formacion: "CFGM - Arte final en diseño gráfico",
    centro: "Escola Municipal d'Art i Diseny de la Garriga (EMAD)",
    curso: "2002-2004",
    nota: "7,6",
    sSkills01: "Aprendizaje activo",
    sSkDesc01:
      "Nuevas tecnologias, nuevos tiempos. Se que un continuo aprendizaje me va a acompañar a lo largo de mi trayectoria. Por eso se que acomodarse no es una opción.",
    sSkills02: "Analsis y resolución de problemas",
    sSkDesc02:
      "La revolución constante de la tecnología nos obliga a tener herramientas para saber gestionar los cambios.",
    sSkills03: "Flexibilidd y resiliencia",
    sSkDesc03:
      "Detectar las limitaciones y los problemas con los timings me lleva a ser, no solo resolutivo, sino a adaptar la solución al entorno de trabajo.",
    sSkills04: "Gestión del cambio",
    sSkDesc04:
      "El cambio es algo constante en todos los escenarios de la vida. El cambio es positivo. El cambio nos hace crecer.",
    sSkills05: "Inteligencia emocional y empatía",
    sSkDesc05:
      "A lo largo de mi vida labral y personal he aprendido que el trabajo en equipo es esencial para lograr ejecutar cualquier proyecto.",
    hSkills01: "Diseño gráfico",
    hSkTools01: "Adobe Creative Suite, ilustración, tipografía y fotografía",
    hSkills02: "Logística",
    hSkTools02:
      "El orden y la indexación de productos, estocaje y gestión del equipo.",
    hSkills03: "",
    hSkTools03: "",
    hSkills04: "",
    hSkTools04: "",
  },
  {
    id: 13,
    diseñador: "Antes",
    año: "2014",
    añoMin: "|",
    hasta: "2015",
    duracion: "5 años",
    cargo: "Oficial de primera en cartonaje para alimentación",
    empresa: "MEDIOAMBIENTE PACK S.A.",
    descripcion:
      "Un familiar me recomendó para un puesto en una empresa en Valencia. Desde mi llegada, asumí el rol de reemplazar a la persona a cargo de la impresora. A medida que ganaba experiencia, me familiaricé con la maquinaria de la empresa y llegué a supervisar los equipos de trabajo en las onduladoras de papel. Una de mis responsabilidades principales era estandarizar los procesos de producción de cuatro de las siete máquinas de la empresa.",
    formacion: "CFGM - Arte final en diseño gráfico",
    centro: "Escola Municipal d'Art i Diseny de la Garriga (EMAD)",
    curso: "2002-2004",
    nota: "7,6",
    sSkills01: "Aprendizaje activo",
    sSkDesc01:
      "Nuevas tecnologias, nuevos tiempos. Se que un continuo aprendizaje me va a acompañar a lo largo de mi trayectoria. Por eso se que acomodarse no es una opción.",
    sSkills02: "Analsis y resolución de problemas",
    sSkDesc02:
      "La revolución constante de la tecnología nos obliga a tener herramientas para saber gestionar los cambios.",
    sSkills03: "Flexibilidd y resiliencia",
    sSkDesc03:
      "Detectar las limitaciones y los problemas con los timings me lleva a ser, no solo resolutivo, sino a adaptar la solución al entorno de trabajo.",
    sSkills04: "Gestión del cambio",
    sSkDesc04:
      "El cambio es algo constante en todos los escenarios de la vida. El cambio es positivo. El cambio nos hace crecer.",
    sSkills05: "Inteligencia emocional y empatía",
    sSkDesc05:
      "A lo largo de mi vida labral y personal he aprendido que el trabajo en equipo es esencial para lograr ejecutar cualquier proyecto.",
    hSkills01: "Diseño gráfico",
    hSkTools01: "Adobe Creative Suite, ilustración, tipografía y fotografía",
    hSkills02: "Logística",
    hSkTools02:
      "El orden y la indexación de productos, estocaje y gestión del equipo.",
    hSkills03: "",
    hSkTools03: "",
    hSkills04: "",
    hSkTools04: "",
  },
  {
    id: 14,
    diseñador: "Antes",
    año: "2015",
    añoMin: "|",
    hasta: "2015",
    duracion: "5 años",
    cargo: "Oficial de primera en cartonaje para alimentación",
    empresa: "MEDIOAMBIENTE PACK S.A.",
    descripcion:
      "Un familiar me recomendó para un puesto en una empresa en Valencia. Desde mi llegada, asumí el rol de reemplazar a la persona a cargo de la impresora. A medida que ganaba experiencia, me familiaricé con la maquinaria de la empresa y llegué a supervisar los equipos de trabajo en las onduladoras de papel. Una de mis responsabilidades principales era estandarizar los procesos de producción de cuatro de las siete máquinas de la empresa.",
    formacion: "CFGM - Arte final en diseño gráfico",
    centro: "Escola Municipal d'Art i Diseny de la Garriga (EMAD)",
    curso: "2002-2004",
    nota: "7,6",
    sSkills01: "Aprendizaje activo",
    sSkDesc01:
      "Nuevas tecnologias, nuevos tiempos. Se que un continuo aprendizaje me va a acompañar a lo largo de mi trayectoria. Por eso se que acomodarse no es una opción.",
    sSkills02: "Analsis y resolución de problemas",
    sSkDesc02:
      "La revolución constante de la tecnología nos obliga a tener herramientas para saber gestionar los cambios.",
    sSkills03: "Flexibilidd y resiliencia",
    sSkDesc03:
      "Detectar las limitaciones y los problemas con los timings me lleva a ser, no solo resolutivo, sino a adaptar la solución al entorno de trabajo.",
    sSkills04: "Gestión del cambio",
    sSkDesc04:
      "El cambio es algo constante en todos los escenarios de la vida. El cambio es positivo. El cambio nos hace crecer.",
    sSkills05: "Inteligencia emocional y empatía",
    sSkDesc05:
      "A lo largo de mi vida labral y personal he aprendido que el trabajo en equipo es esencial para lograr ejecutar cualquier proyecto.",
    hSkills01: "Diseño gráfico",
    hSkTools01: "Adobe Creative Suite, ilustración, tipografía y fotografía",
    hSkills02: "Logística",
    hSkTools02:
      "El orden y la indexación de productos, estocaje y gestión del equipo.",
    hSkills03: "Estandarizar procesos de producción",
    hSkTools03:
      "Optimizar y contabilizar en timings los procesos para rentabilizar los proyectos.",
    hSkills04: "",
    hSkTools04: "",
  },
  {
    id: 15,
    diseñador: "Después",
    año: "2016",
    añoMin: "|",
    hasta: "2018",
    duracion: "2 años",
    cargo: "Diseñador gráfico",
    empresa: "VIENTO NORTE SUR",
    descripcion:
      "Mi primer empleo como diseñador gráfico fue en Viento Norte Sur, una organización dedicada a la coordinación de viajes solidarios en todo el mundo. Me encargaron rediseñar su imagen de marca y mejorar la experiencia de usuario en su sitio web. Trabajé en este proyecto mientras cursaba el Grado Superior en Gráfica Interactiva.",
    formacion: "CFGS - Gráfica Interactiva",
    centro: "Escola Municipal d'Art i Diseny de la Garriga (EMAD)",
    curso: "2016-2018",
    nota: "7,9",
    sSkills01: "Aprendizaje activo",
    sSkDesc01:
      "Nuevas tecnologias, nuevos tiempos. Se que un continuo aprendizaje me va a acompañar a lo largo de mi trayectoria. Por eso se que acomodarse no es una opción.",
    sSkills02: "Analsis y resolución de problemas",
    sSkDesc02:
      "La revolución constante de la tecnología nos obliga a tener herramientas para saber gestionar los cambios.",
    sSkills03: "Flexibilidd y resiliencia",
    sSkDesc03:
      "Detectar las limitaciones y los problemas con los timings me lleva a ser, no solo resolutivo, sino a adaptar la solución al entorno de trabajo.",
    sSkills04: "Gestión del cambio",
    sSkDesc04:
      "El cambio es algo constante en todos los escenarios de la vida. El cambio es positivo. El cambio nos hace crecer.",
    sSkills05: "Inteligencia emocional y empatía",
    sSkDesc05:
      "A lo largo de mi vida labral y personal he aprendido que el trabajo en equipo es esencial para lograr ejecutar cualquier proyecto.",
    hSkills01: "Diseño gráfico",
    hSkTools01: "Adobe Creative Suite, ilustración, tipografía y fotografía",
    hSkills02: "Logística",
    hSkTools02:
      "El orden y la indexación de productos, estocaje y gestión del equipo.",
    hSkills03: "Estandarizar procesos de producción",
    hSkTools03:
      "Optimizar y contabilizar en timings los procesos para rentabilizar los proyectos.",
    hSkills04: "",
    hSkTools04: "",
  },
  {
    id: 16,
    diseñador: "Después",
    año: "2017",
    añoMin: "|",
    hasta: "2018",
    duracion: "2 años",
    cargo: "Diseñador gráfico",
    empresa: "VIENTO NORTE SUR",
    descripcion:
      "Mi primer empleo como diseñador gráfico fue en Viento Norte Sur, una organización dedicada a la coordinación de viajes solidarios en todo el mundo. Me encargaron rediseñar su imagen de marca y mejorar la experiencia de usuario en su sitio web. Trabajé en este proyecto mientras cursaba el Grado Superior en Gráfica Interactiva.",
    formacion: "CFGS - Gráfica Interactiva",
    centro: "Escola Municipal d'Art i Diseny de la Garriga (EMAD)",
    curso: "2016-2018",
    nota: "7,9",
    sSkills01: "Aprendizaje activo",
    sSkDesc01:
      "Nuevas tecnologias, nuevos tiempos. Se que un continuo aprendizaje me va a acompañar a lo largo de mi trayectoria. Por eso se que acomodarse no es una opción.",
    sSkills02: "Analsis y resolución de problemas",
    sSkDesc02:
      "La revolución constante de la tecnología nos obliga a tener herramientas para saber gestionar los cambios.",
    sSkills03: "Flexibilidd y resiliencia",
    sSkDesc03:
      "Detectar las limitaciones y los problemas con los timings me lleva a ser, no solo resolutivo, sino a adaptar la solución al entorno de trabajo.",
    sSkills04: "Gestión del cambio",
    sSkDesc04:
      "El cambio es algo constante en todos los escenarios de la vida. El cambio es positivo. El cambio nos hace crecer.",
    sSkills05: "Inteligencia emocional y empatía",
    sSkDesc05:
      "A lo largo de mi vida labral y personal he aprendido que el trabajo en equipo es esencial para lograr ejecutar cualquier proyecto.",
    hSkills01: "Diseño gráfico",
    hSkTools01:
      "Adobe Creative Suite, ilustración, tipografía, fotografía y audiovisuales.",
    hSkills02: "Logística",
    hSkTools02:
      "El orden y la indexación de productos, estocaje y gestión del equipo.",
    hSkills03: "Estandarizar procesos de producción",
    hSkTools03:
      "Optimizar y contabilizar en timings los procesos para rentabilizar los proyectos.",
    hSkills04: "Diseño gráfico Frontend",
    hSkTools04: "Mis herramientas frontend: UX, html5, css3",
  },
  {
    id: 17,
    diseñador: "Después",
    año: "2018",
    añoMin: "|",
    hasta: "2019",
    duracion: "1 año",
    cargo: "Diseñador gráfico",
    empresa: "SIMBÒLIC COMUNICACIÓ",
    descripcion:
      "Tras finalizar el primer Ciclo Formativo de Grado Superior en diseño, tuve la oportunidad de quedarme en la empresa donde realicé mis prácticas. Mi labor se centró en el branding de diversos clientes, abarcando el diseño y rediseño de logotipos, maquetación editorial y algunos proyectos audiovisuales. Trabajé en esta empresa mientras cursaba mi segundo año del Grado Superior en Gráfica Publicitaria.",
    formacion: "CFGS - Gráfica Publicitaria.",
    centro: "Escola Municipal d'Art i Diseny de la Garriga (EMAD)",
    curso: "2017-2018",
    nota: "8,4",
    sSkills01: "Aprendizaje activo",
    sSkDesc01:
      "Nuevas tecnologias, nuevos tiempos. Se que un continuo aprendizaje me va a acompañar a lo largo de mi trayectoria. Por eso se que acomodarse no es una opción.",
    sSkills02: "Analsis y resolución de problemas",
    sSkDesc02:
      "La revolución constante de la tecnología nos obliga a tener herramientas para saber gestionar los cambios.",
    sSkills03: "Flexibilidd y resiliencia",
    sSkDesc03:
      "Detectar las limitaciones y los problemas con los timings me lleva a ser, no solo resolutivo, sino a adaptar la solución al entorno de trabajo.",
    sSkills04: "Gestión del cambio",
    sSkDesc04:
      "El cambio es algo constante en todos los escenarios de la vida. El cambio es positivo. El cambio nos hace crecer.",
    sSkills05: "Inteligencia emocional y empatía",
    sSkDesc05:
      "A lo largo de mi vida labral y personal he aprendido que el trabajo en equipo es esencial para lograr ejecutar cualquier proyecto.",
    hSkills01: "Diseño gráfico",
    hSkTools01:
      "Adobe Creative Suite, ilustración, tipografía, fotografía y audiovisuales.",
    hSkills02: "Logística",
    hSkTools02:
      "El orden y la indexación de productos, estocaje y gestión del equipo.",
    hSkills03: "Estandarizar procesos de producción",
    hSkTools03:
      "Optimizar y contabilizar en timings los procesos para rentabilizar los proyectos.",
    hSkills04: "Diseño gráfico Frontend",
    hSkTools04: "Mis herramientas frontend: UX, html5, css3",
  },
  {
    id: 18,
    diseñador: "Después",
    año: "2019",
    añoMin: "|",
    hasta: "2020",
    duracion: "1 año",
    cargo: "Diseñador gráfico",
    empresa: "PHOENIX TEEFACTORY S.L.",
    descripcion:
      "Después de mi formación final como diseñador gráfico, fui contratado en una empresa de serigrafía y estampación de camisetas en el departamento de diseño gráfico. Realicé tareas de tratamiento de imágenes, preparación de archivos para fotolitos y brindé soporte en el laboratorio de insolación.",
    formacion: "CFGS - Gráfica Publicitaria",
    centro: "Escola Municipal d'Art i Diseny de la Garriga (EMAD)",
    curso: "2017-2018",
    nota: "8,4",
    sSkills01: "Aprendizaje activo",
    sSkDesc01:
      "Nuevas tecnologias, nuevos tiempos. Se que un continuo aprendizaje me va a acompañar a lo largo de mi trayectoria. Por eso se que acomodarse no es una opción.",
    sSkills02: "Analsis y resolución de problemas",
    sSkDesc02:
      "La revolución constante de la tecnología nos obliga a tener herramientas para saber gestionar los cambios.",
    sSkills03: "Flexibilidd y resiliencia",
    sSkDesc03:
      "Detectar las limitaciones y los problemas con los timings me lleva a ser, no solo resolutivo, sino a adaptar la solución al entorno de trabajo.",
    sSkills04: "Gestión del cambio",
    sSkDesc04:
      "El cambio es algo constante en todos los escenarios de la vida. El cambio es positivo. El cambio nos hace crecer.",
    sSkills05: "Inteligencia emocional y empatía",
    sSkDesc05:
      "A lo largo de mi vida labral y personal he aprendido que el trabajo en equipo es esencial para lograr ejecutar cualquier proyecto.",
    hSkills01: "Diseño gráfico",
    hSkTools01:
      "Adobe Creative Suite, ilustración, tipografía, fotografía y audiovisuales.",
    hSkills02: "Logística",
    hSkTools02:
      "El orden y la indexación de productos, estocaje y gestión del equipo.",
    hSkills03: "Estandarizar procesos de producción",
    hSkTools03:
      "Optimizar y contabilizar en timings los procesos para rentabilizar los proyectos.",
    hSkills04: "Diseño gráfico Frontend",
    hSkTools04: "Mis herramientas frontend: UX, html5, css3",
  },
  {
    id: 19,
    diseñador: "Después",
    año: "2020",
    añoMin: "|",
    hasta: "2022",
    duracion: "2 años",
    cargo: "Diseñador gráfico y soporte en taller de serigrafía",
    empresa: "GLOBAL MANAGING S.L.U.",
    descripcion:
      "La pandemia afectó a las empresas, pero tuve la suerte de ser contratado por Global Managing para liderar el proyecto de ecommerce. Antes de eso, estuve a cargo del taller de entelaje.",
    formacion: "CFGS - Gráfica Publicitaria",
    centro: "Escola Municipal d'Art i Diseny de la Garriga (EMAD)",
    curso: "2017-2018",
    nota: "8,4",
    sSkills01: "Aprendizaje activo",
    sSkDesc01:
      "Nuevas tecnologias, nuevos tiempos. Se que un continuo aprendizaje me va a acompañar a lo largo de mi trayectoria. Por eso se que acomodarse no es una opción.",
    sSkills02: "Analsis y resolución de problemas",
    sSkDesc02:
      "La revolución constante de la tecnología nos obliga a tener herramientas para saber gestionar los cambios.",
    sSkills03: "Flexibilidd y resiliencia",
    sSkDesc03:
      "Detectar las limitaciones y los problemas con los timings me lleva a ser, no solo resolutivo, sino a adaptar la solución al entorno de trabajo.",
    sSkills04: "Gestión del cambio",
    sSkDesc04:
      "El cambio es algo constante en todos los escenarios de la vida. El cambio es positivo. El cambio nos hace crecer.",
    sSkills05: "Inteligencia emocional y empatía",
    sSkDesc05:
      "A lo largo de mi vida labral y personal he aprendido que el trabajo en equipo es esencial para lograr ejecutar cualquier proyecto.",
    hSkills01: "Diseño gráfico",
    hSkTools01:
      "Adobe Creative Suite, ilustración, tipografía, fotografía y audiovisuales.",
    hSkills02: "Logística",
    hSkTools02:
      "El orden y la indexación de productos, estocaje y gestión del equipo.",
    hSkills03: "Estandarizar procesos de producción",
    hSkTools03:
      "Optimizar y contabilizar en timings los procesos para rentabilizar los proyectos.",
    hSkills04: "Diseño gráfico Frontend",
    hSkTools04: "Mis herramientas frontend: UX, html5, css3",
  },
  {
    id: 20,
    diseñador: "Después",
    año: "2021",
    añoMin: "|",
    hasta: "2022",
    duracion: "2 años",
    cargo: "Diseñador gráfico y soporte en taller de serigrafía",
    empresa: "GLOBAL MANAGING S.L.U.",
    descripcion:
      "La pandemia afectó a las empresas, pero tuve la suerte de ser contratado por Global Managing para liderar el proyecto de ecommerce. Antes de eso, estuve a cargo del taller de entelaje.",
    formacion: "CFGS - Gráfica Publicitaria",
    centro: "Escola Municipal d'Art i Diseny de la Garriga (EMAD)",
    curso: "2017-2018",
    nota: "8,4",
    sSkills01: "Aprendizaje activo",
    sSkDesc01:
      "Nuevas tecnologias, nuevos tiempos. Se que un continuo aprendizaje me va a acompañar a lo largo de mi trayectoria. Por eso se que acomodarse no es una opción.",
    sSkills02: "Analsis y resolución de problemas",
    sSkDesc02:
      "La revolución constante de la tecnología nos obliga a tener herramientas para saber gestionar los cambios.",
    sSkills03: "Flexibilidd y resiliencia",
    sSkDesc03:
      "Detectar las limitaciones y los problemas con los timings me lleva a ser, no solo resolutivo, sino a adaptar la solución al entorno de trabajo.",
    sSkills04: "Gestión del cambio",
    sSkDesc04:
      "El cambio es algo constante en todos los escenarios de la vida. El cambio es positivo. El cambio nos hace crecer.",
    sSkills05: "Inteligencia emocional y empatía",
    sSkDesc05:
      "A lo largo de mi vida labral y personal he aprendido que el trabajo en equipo es esencial para lograr ejecutar cualquier proyecto.",
    hSkills01: "Diseño gráfico",
    hSkTools01:
      "Adobe Creative Suite, ilustración, tipografía, fotografía y audiovisuales.",
    hSkills02: "Logística",
    hSkTools02:
      "El orden y la indexación de productos, estocaje y gestión del equipo.",
    hSkills03: "Estandarizar procesos de producción",
    hSkTools03:
      "Optimizar y contabilizar en timings los procesos para rentabilizar los proyectos.",
    hSkills04: "Diseño gráfico Frontend",
    hSkTools04: "Mis herramientas frontend: UX, html5, css3",
  },
  {
    id: 21,
    diseñador: "Después",
    año: "2022",
    añoMin: "|",
    hasta: "2022",
    duracion: "2 años",
    cargo: "Diseñador UX/UI y soporte en taller de serigrafía",
    empresa: "GLOBAL MANAGING S.L.U.",
    descripcion:
      "La pandemia afectó a las empresas, pero tuve la suerte de ser contratado por Global Managing para liderar el proyecto de ecommerce.",
    formacion: "CFGS - Gráfica Publicitaria",
    centro: "Escola Municipal d'Art i Diseny de la Garriga (EMAD)",
    curso: "2017-2018",
    nota: "8,4",
    sSkills01: "Aprendizaje activo",
    sSkDesc01:
      "Nuevas tecnologias, nuevos tiempos. Se que un continuo aprendizaje me va a acompañar a lo largo de mi trayectoria. Por eso se que acomodarse no es una opción.",
    sSkills02: "Analsis y resolución de problemas",
    sSkDesc02:
      "La revolución constante de la tecnología nos obliga a tener herramientas para saber gestionar los cambios.",
    sSkills03: "Flexibilidd y resiliencia",
    sSkDesc03:
      "Detectar las limitaciones y los problemas con los timings me lleva a ser, no solo resolutivo, sino a adaptar la solución al entorno de trabajo.",
    sSkills04: "Gestión del cambio",
    sSkDesc04:
      "El cambio es algo constante en todos los escenarios de la vida. El cambio es positivo. El cambio nos hace crecer.",
    sSkills05: "Inteligencia emocional y empatía",
    sSkDesc05:
      "A lo largo de mi vida labral y personal he aprendido que el trabajo en equipo es esencial para lograr ejecutar cualquier proyecto.",
    hSkills01: "Diseño gráfico",
    hSkTools01:
      "Adobe Creative Suite, ilustración, tipografía, fotografía y audiovisuales.",
    hSkills02: "Logística",
    hSkTools02:
      "El orden y la indexación de productos, estocaje y gestión del equipo.",
    hSkills03: "Estandarizar procesos de producción",
    hSkTools03:
      "Optimizar y contabilizar en timings los procesos para rentabilizar los proyectos.",
    hSkills04: "Diseño gráfico Frontend",
    hSkTools04: "Mis herramientas frontend: UX, html5, css3",
  },
  {
    id: 22,
    diseñador: "Después",
    año: "2023",
    añoMin: "|",
    hasta: "hoy",
    duracion: "trabajando",
    cargo: "Diseñador UX/UI",
    empresa: "www.esdeveniments.cat",
    descripcion:
      "Con toda mi trayectoria y conocimientos, me especializo en diseño UX/UI. Aporto valores a equipos de diseño en empresas tecnológicas. Actualmente trabajo en pequeños proyectos reales como autónomo, pero mi objetivo es unirme a un equipo. Estoy listo para colaborar en desafíos del diseño digital y crear experiencias visuales impactantes. Si buscas un diseñador gráfico Frontend creativo y resolutivo, contáctame.",
    formacion: "Curso de especialización - Frontend web developer",
    centro: "Universitat Autónoma de Barcelona",
    curso: "2022-2023",
    nota: "7",
    sSkills01: "Aprendizaje activo",
    sSkDesc01:
      "Nuevas tecnologias, nuevos tiempos. Se que un continuo aprendizaje me va a acompañar a lo largo de mi trayectoria. Por eso se que acomodarse no es una opción.",
    sSkills02: "Analsis y resolución de problemas",
    sSkDesc02:
      "La revolución constante de la tecnología nos obliga a tener herramientas para saber gestionar los cambios.",
    sSkills03: "Flexibilidd y resiliencia",
    sSkDesc03:
      "Detectar las limitaciones y los problemas con los timings me lleva a ser, no solo resolutivo, sino a adaptar la solución al entorno de trabajo.",
    sSkills04: "Gestión del cambio",
    sSkDesc04:
      "El cambio es algo constante en todos los escenarios de la vida. El cambio es positivo. El cambio nos hace crecer.",
    sSkills05: "Inteligencia emocional y empatía",
    sSkDesc05:
      "A lo largo de mi vida labral y personal he aprendido que el trabajo en equipo es esencial para lograr ejecutar cualquier proyecto.",
    hSkills01: "Diseño gráfico",
    hSkTools01:
      "Adobe Creative Suite, ilustración, tipografía, fotografía y audiovisuales.",
    hSkills02: "Logística",
    hSkTools02:
      "El orden y la indexación de productos, estocaje y gestión del equipo.",
    hSkills03: "Estandarizar procesos de producción",
    hSkTools03:
      "Optimizar y contabilizar en timings los procesos para rentabilizar los proyectos.",
    hSkills04: "Diseño gráfico Frontend",
    hSkTools04:
      "Mis herramientas frontend: UX, html5, css3, Javascript(Vue3), Figma.",
  },
]);

//CONTENIDO TECH
const tech = {
  photoshop: tech01,
  illustrator: tech02,
  indesign: tech03,
  aftereffects: tech04,
  premiere: tech05,
  xd: tech06,
  wordpress: tech07,
  html: tech08,
  css: tech09,
  javascript: tech10,
  vsc: tech11,
  vue: tech12,
};

//VALOR INPUT ToolsE
const valorSelect = ref(22);

//CAMBIAR VALOR INPUT CON BOTON
const clickYear = (yearId) => {
  valorSelect.value = yearId;
};

//boton para mostrar contenido del array de objetos cvAndreu

const mostrarInfo = (propiedad, defaultValue) => {
  const info = ref(cvAndreu.value[22][propiedad] || defaultValue);
  const mostrar = () => {
    info.value = cvAndreu.value[valorSelect.value][propiedad] || defaultValue;
  };
  watch(valorSelect, mostrar);
  return { info };
};

const descripcion = mostrarInfo("descripcion", "descripcion");
const cargo = mostrarInfo("cargo", "");
const disenador = mostrarInfo("diseñador", "");
const duracion = mostrarInfo("duracion", "");
const empresa = mostrarInfo("empresa", "");
const year = mostrarInfo("año", "");
const hasta = mostrarInfo("hasta", "");
const curso = mostrarInfo("curso", "");
const formacion = mostrarInfo("formacion", "");
const centro = mostrarInfo("centro", "");
const nota = mostrarInfo("nota", "");

const sSkills01 = mostrarInfo("sSkills01", "");
const sSkDesc01 = mostrarInfo("sSkDesc01", "");
const sSkills02 = mostrarInfo("sSkills02", "");
const sSkDesc02 = mostrarInfo("sSkDesc02", "");
const sSkills03 = mostrarInfo("sSkills03", "");
const sSkDesc03 = mostrarInfo("sSkDesc03", "");
const sSkills04 = mostrarInfo("sSkills04", "");
const sSkDesc04 = mostrarInfo("sSkDesc04", "");
const sSkills05 = mostrarInfo("sSkills05", "");
const sSkDesc05 = mostrarInfo("sSkDesc05", "");

const hSkills01 = mostrarInfo("hSkills01", "");
const hSkTools01 = mostrarInfo("hSkTools01", "");
const hSkills02 = mostrarInfo("hSkills02", "");
const hSkTools02 = mostrarInfo("hSkTools02", "");
const hSkills03 = mostrarInfo("hSkills03", "");
const hSkTools03 = mostrarInfo("hSkTools03", "");
const hSkills04 = mostrarInfo("hSkills04", "");
const hSkTools04 = mostrarInfo("hSkTools04", "");
</script>

<template>
  <portada />
  <div class="range">
    <h1>currículum</h1>
    <p>desliza para ver el contenido de cada año</p>
    <h2>{{ year.info.value }}</h2>
    <input
      class="select"
      type="range"
      :min="cvAndreu[0]"
      :max="cvAndreu.length - 1"
      v-model="valorSelect"
      @input="mostrarInfo"
    />
  </div>
  <div class="container">
    <!-- vida laboral -->
    <div class="vida-laboral">
      <div class="items-vida">
        <div class="titulo">
          <h1>vida laboral</h1>
          <h2>{{ year.info.value }} - {{ hasta.info.value }}</h2>
        </div>
        <div class="items-vidalaboral">
          <span>
            <h3>
              {{ duracion.info.value }}
              en
            </h3>
            <h3>
              <a
                class="empresa"
                href="https://www.esdeveniments.cat/"
                alt="esdeveniments-cat"
                target="_blank"
                >{{ empresa.info.value }}</a
              >
            </h3>
          </span>
          <span>
            <h3>cargo:</h3>
            <h3 style="font-weight: 575">{{ cargo.info.value }}</h3>
          </span>
        </div>
      </div>
      <div class="items">
        <span>{{ descripcion.info.value }}</span>
      </div>
    </div>
    <!-- formacion -->
    <div class="form-academica">
      <div class="items-vida">
        <div class="titulo">
          <h1>formación</h1>
          <h2>{{ curso.info.value }}</h2>
        </div>
        <div class="items">
          <h3>{{ formacion.info.value }}</h3>
          <h2>{{ centro.info.value }}</h2>
        </div>
        <div class="items-nota">
          <h2>
            <h3>calificación:</h3>
            {{ nota.info.value }}
          </h2>
        </div>
      </div>
    </div>
  </div>
  <!-- soft skills -->
  <div class="skills">
    <div class="soft-skills">
      <div class="titulo">
        <h1>soft skills</h1>
      </div>
      <div class="items-skills">
        <div class="fondo" v-if="sSkills01.info.value && sSkDesc01.info.value">
          <h2>{{ sSkills01.info.value }}</h2>
          <div>{{ sSkDesc01.info.value }}</div>
        </div>
        <div class="fondo" v-if="sSkills02.info.value && sSkDesc02.info.value">
          <h2>{{ sSkills02.info.value }}</h2>
          <div>{{ sSkDesc02.info.value }}</div>
        </div>
        <div class="fondo" v-if="sSkills03.info.value && sSkDesc03.info.value">
          <h2>{{ sSkills03.info.value }}</h2>
          <div>{{ sSkDesc03.info.value }}</div>
        </div>
        <div class="fondo" v-if="sSkills04.info.value && sSkDesc04.info.value">
          <h2>{{ sSkills04.info.value }}</h2>
          <div>{{ sSkDesc04.info.value }}</div>
        </div>
        <div class="fondo" v-if="sSkills05.info.value && sSkDesc05.info.value">
          <h2>{{ sSkills05.info.value }}</h2>
          <div>{{ sSkDesc05.info.value }}</div>
        </div>
      </div>
    </div>
    <div class="hard-skills">
      <div class="titulo">
        <h1>hard skills</h1>
      </div>
      <div class="items-skills">
        <div class="fondo" v-if="hSkills01.info.value && hSkTools01.info.value">
          <h2>{{ hSkills01.info.value }}</h2>
          <div>{{ hSkTools01.info.value }}</div>
          <div class="tools">
            <img :src="tech.photoshop" alt="photoshop" />
            <img :src="tech.illustrator" alt="illustrator" />
            <img :src="tech.indesign" alt="indesign" />
            <img :src="tech.premiere" alt="premiere" />
            <img :src="tech.aftereffects" alt="aftereffects" />
            <img :src="tech.xd" alt="xd" />
          </div>
        </div>
        <div class="fondo" v-if="hSkills02.info.value && hSkTools02.info.value">
          <h2>{{ hSkills02.info.value }}</h2>
          <div>{{ hSkTools02.info.value }}</div>
        </div>
        <div class="fondo" v-if="hSkills03.info.value && hSkTools03.info.value">
          <h2>{{ hSkills03.info.value }}</h2>
          <div>{{ hSkTools03.info.value }}</div>
        </div>
        <div class="fondo" v-if="hSkills04.info.value && hSkTools04.info.value">
          <h2>{{ hSkills04.info.value }}</h2>
          <div>{{ hSkTools04.info.value }}</div>
          <div class="tools">
            <img :src="tech.wordpress" alt="wordpress" />
            <img :src="tech.html" alt="html" />
            <img :src="tech.css" alt="css" />
            <img :src="tech.javascript" alt="javascript" />
            <img :src="tech.vsc" alt="vsc" />
            <img :src="tech.vue" alt="vue" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="cita">
    <img :src="steveJobs" alt="steve-jobs" />
    <p>
      “El diseño no es solo lo que parece y se siente. El diseño es cómo
      funciona“
    </p>
    <p>Steve Jobs</p>
  </div>
</template>

<style scoped>
.container {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  gap: 39px;
  padding: 0px 8px 55px;
}

.vida-laboral {
  width: 100%;
  background: #fff;
  padding: 15px;
  border-radius: 15px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;
}
.empresa {
  font-weight: 575;
}
.form-academica {
  width: 100%;
  background: #fff;
  padding: 15px;
  border-radius: 15px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;
}

.skills {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 23px;
  padding: 0px 23px;
}

.soft-skills {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.soft-skills .titulo {
  margin-bottom: 29px;
}

.hard-skills {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.hard-skills .titulo {
  margin-bottom: 29px;
}

.fondo {
  width: 100%;
  border-radius: 10px;
  padding-bottom: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
}
.fondo h2 {
  width: 100%;
  background: #fff100;
  padding-top: 15px;
}
.tools {
  display: flex;
  flex-wrap: wrap;
  gap: 21px;
}

.tools img {
  height: 30px;
}

.items-skills {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 23px;
  text-align: left;
  color: #403833;
}

.card-skill {
  min-width: 275px;
  max-width: 381px;
  width: 100%;
  height: 200px;
  background: #403833;
  color: #403833;
  padding: 15px;
  border-radius: 15px;
  display: flex;
  justify-content: center;
}

.card-skill .fondo {
  background: #fffcf7;
  border-radius: 10px;
  padding: 29px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 15px;
}

.items {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
  text-align: left;
  color: #403833;
}

.items h3 {
  padding-bottom: 15px;
  border-bottom: 1px solid #403833;
}

.items h2 {
  padding-bottom: 15px;
  border-bottom: 1px solid #403833;
}
.items-vidalaboral {
  width: 300px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  text-align: left;
  color: #403833;
}
.items-vidalaboral span {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 5px;
  padding: 0px;
}
.items-nota {
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  gap: 15px;
  justify-content: flex-end;
  align-items: center;
}
.items-nota h2 {
  display: flex;
  flex-wrap: nowrap;
  gap: 15px;
  justify-content: flex-end;
  align-items: center;
}
.items-vida {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
  text-align: left;
  color: #403833;
}

.cita {
  width: 100%;
  padding: 50px 23px 125px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
}

.cita p {
  width: 100%;
  text-align: center;
  font-style: italic;
}
.cita img {
  width: 100px;
  border: 3px solid #403833;
  border-radius: 50px;
  padding: 4px;
  margin: auto;
  filter: sepia(40%) saturate(90%);
}
.titulo {
  width: 100%;
  color: #403833;
  display: flex;
  flex-direction: column;
}

.titulo h2 {
  background: #fff100;
  color: #403833;
  padding-top: 15px;
}

.range {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  margin: 0px 15px 15px;
}
.select:focus {
  outline: none;
}

.select::-webkit-slider-runnable-track,
.select::-webkit-slider-thumb {
  -webkit-appearance: none;
}

/*FONDO ETIQUETA INPUT RANGE*/
.select {
  width: 100%;
  background: transparent;
  display: flex;
  justify-content: space-between;
  appearance: none;
  -webkit-appearance: none;
  cursor: pointer;
}

/*SELECTOR INPUT RANGE*/
.select::-webkit-slider-thumb {
  background-color: #403833;
  width: 15px;
  height: 15px;
  margin: -6px 0px;
  border-radius: 15px;
  transition: 162ms ease;
}

.select:hover::-webkit-slider-thumb {
  transform: scale(1.4);
  border-radius: 25px;
}

/*BARRA RANGE INPUT RANGE*/
.select::-webkit-slider-runnable-track {
  background-color: #403833;
  height: 2px;
  margin: 10px 10px;
  padding: 0px 0px;
  border-radius: 3px;
}

/*ONFOCUS INPUT RANGE*/
.select:focus::-webkit-slider-runnable-track {
  outline: none;
}
@media only screen and (max-width: 768px) {
  .container {
    min-width: 350px;
    max-width: 600px;
    padding: 0px 8px 55px;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 39px;
  }
  .range {
    min-width: 350px;
    max-width: 600px;
    padding: 0px 23px;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
  }
  .skills {
    min-width: 350px;
    max-width: 600px;
    padding: 0px 23px;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 23px;
  }
  .hard-skills {
    max-width: 600px;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .cita {
    max-width: 350px;
    padding: 50px 23px 125px;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
  }
}
@media only screen and (min-width: 768px) {
  .container {
    max-width: 600px;
    padding: 0px 8px 55px;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 39px;
  }
  .range {
    max-width: 600px;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
  }
  .skills {
    max-width: 600px;
    padding: 0px 23px;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 23px;
  }
  .hard-skills {
    max-width: 600px;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .cita {
    max-width: 350px;
    padding: 50px 23px 125px;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
  }
}
@media only screen and (min-width: 1024px) {
  .container {
    max-width: 1024px;
    padding: 0px 8px 55px;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 39px;
  }
  .range {
    max-width: 1024px;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
  }
  .skills {
    max-width: 1024px;
    padding: 0px 23px;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 23px;
  }
  .hard-skills {
    max-width: 1024px;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .cita {
    width: 350px;
    padding: 50px 23px 125px;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
  }
}
</style>
