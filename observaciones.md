# Observaciones

Rebe, Carla, felicitaciones por su trabajo. Estoy muy contenta recorriendo su TP. El funcionamiento es prácticamente impecable, y se nota muchísimo la atención al detalle en el código. Todo es claro, fácil de leer y entender. Las funciones están muy bien resueltas y es evidente que hubo mucho esfuerzo en hacer código claro y comprensible. Este es un trabajo para compartir, publicar, mostrarle a potenciales empleadores y del que estar muy, muy orgullosa. 

## Estructura correcta de documento HTML

Cumplido. 

## Respeta el diseño dado

Cumplido, me encantó como quedó!

## Respeta el funcionamiento

Algunos detalles incumplidos, 

- El fondo transparente no funciona como deberia, la imagen queda tapada si previamente le agregué un color de fondo a la imagen. Fijense que estan agregando la imagen de fondo del gatito en dos divs diferentes... si no saben como arreglarlo, escribanme. 

- Los filtros funcionan uno a uno en lugar de aplicarse todos a la vez. En el archivo de JS les cuento por qué. 


## Responsive funciona correctamente

No cumplido, y no puedo enfatizar lo suficiente lo importante que es esto. Nuestra web no está completa si no se puede navegar desde celulares: la inmensa mayoría de nuestros usuarios van a entrar a nuestra web desde dispositivos móviles. El responsive no es un opcional, ni un agregado: es un requisito ineludible de toda web. 

## Buena estructura de proyecto

Cumplido.

## Código bien indentado

Cumplido. 

## Comentarios que permiten mejorar la legibilidad del código

Cumplido. 

## Uso correcto de etiquetas semánticas

No acuerdo con usar titulos en lugar de label. Los lectores de pantalla necesitan el label. 

## Buenos nombres de clases

Cumplido. 

## Buenos nombres de funciones y variables

Cumplido. 

## Reutilización de estilos

Cumplido

## Funciones pequeñas

Cumplido, con algunos comentarios. 

## Accesibilidad

Cumplido a medias, hay decisiones aquí que impactan muy negativamente en la accesibilidad del sitio. 

- Le dieron "outline: none" a algunos de los inputs. No puedo insistir lo suficiente en lo pernicioso que es esto: le quitaron a los usuarios la posibilidad de navegar tu web por teclado. Cualquier persona que por dificultades motrices no pueda usar el mouse, no va a poder navegar tu web. No quiero ser dramática, pero es nuestro deber y responsabilidad como desarrolladoras web permitir que todos puedan usar nuestros sitios. Quitar el outline que viene por defecto es como comprar un edificio que tiene rampas para sillas de ruedas y reemplazarlas a todas por escaleras. Nunca, nunca, nunca quitamos el outline **a menos** que lo reemplacemos con una alternativa clara toda vez que un elemento está en foco. Ante la duda, mejor dejar el outline que viene por defecto. 

- Los label del formulario deben o bien rodear al elemento, o bien tener el atributo "for". Eso es asi para que el lector de pantalla pueda identificar a que elemento se esta describiendo. 
- Esto tambien impacta en la usabilidad. Cuando el label rodea al elemento, el click en el label es un click en el elemento. Esto ayuda por ejemplo a usuarios con dificultades motrices: es dificil hacer click en un checkbox chiquitito, pero mas facil hacer click en el label. Eso no ocurre en tu pagina. 
Para que el lector de pantalla y el navegador puedan saber que un label y un elemento de formulario estan relacionados, el label debe 
- o bien rodear al elemento
- o bien contar con un atributo "for" que haga referencia al **id** del elemento. 
En muchisimas ocasiones esto no se cumple en su trabajo y eso impacta en la accesibilidad. 

- Los titulos no son label, ni viceversa. Un titulo es el encabezado de una seccion. Un elemento de formulario es descripto por un label. El lector de pantalla separa los titulos de los elementos de formulario - como puede saber el usuario del lector de pantalla para que sirve el input de tipo color si no tiene ni label, ni aria-label?

- Faltan aria label en todos los elementos que en el diseño original no tienen label, como los botones de alineacion de texto y los select. 

## Commits con mensajes adecuados

Cumplido.

# Nota final: 8

