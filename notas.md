## PROYECTO REACT

Para crear un proyecto de React nuevo puedo utilizar el comando (desde la Terminal)
npx create-react-app FOLDER o npx create-react-app ./ (si ya tengo creada la carpeta)
    La diferencia entre npm y npx es que npm necesita tener instalada la librería que
    deseo usar (en este cao la librería sería la de create-react-app; en cambio con el npx
    solamente ejecuto esa librería y después libero el espacio de la memoria)
Algunos comandos npm para la Terminal:
    *npm start*: para abrir un servidor local que me muestre automaticamente los cambios que 
      voy realizando (si cree una carpeta nueva, antes de ejecutar npm start, me ubico en ella
      ejecutando: cd NAME) (si el servidor local no se abre automaticamente, voy a localhost:3000 
      desde el navegador). Para desconectar el proyecto del navegador ingreso CTRL + C en la
      Terminal, deja de ejecutarse.
    *npm run build*: este comando me genera una carpeta con archivos estáticos; es lo que se 
      utiliza para hostear el proyecto en un dominio 
    *npm test*: se ejecuta cuando hacemos testing de nuestro proyecto; nos permite, a través 
      de un código con una sintáxis distinta, ver cómo se comporta la app ante ciertos eventos
Puedo borrar líneas de código de [index.js] como: 
    -reportWebVitals (2 occurences + archivo en carpeta Src)
    -index.css (tmb elimino el archivo de la carpeta Src)
Y de [app.js] puedo borrar todo. Y dejar:
    function App() {
      return (
        <h2>Hola, mundo</h2>
      );
    }
    export default App;
Luego de [src] borro:
    -App.css
    -logo.svg
Puedo desde ya agregar una carpeta a [src] llamada "components"

>>SI ESCRIBO EN UN ARCHIVO .js ABAJO A LA DERECHA ME APARECE Javascript SI LO APRIETO PUEDO ELEGIR
>>EL LENGUAGE MODE Y PONER Jvascript React PARA QUE ME SUGIERA CÓDIGO COMO EN .jsx

# UNIDAD 2: ARMADO DEL LOGIN

## ARMADO DEL COMPONENTE LOGIN

El componente Login es un formulario que sirve para que la gente pueda ingresar a una página. Para sumarlo al código, vamos a crear un nuevo archivo en la carpeta /components con nombre Login.js. Para poder visualizarlo en pantalla, además del export al final de este archivo, voy a tener que hacer un import desde App.js 

**ELEMENTOS INDISPENSABLES**
    Un formulario con 2 campos input:
        -Campo de correo electrónico
        -Campo de contraseña

[*] Un componente es una función, por lo que voy a tener esta estructura:
    function Login(){
        <!-- javascript -->
        return(
            <!-- HTML -->
        );
    }
    export default Login;

**ELEMENTOS HTML INDISPENSABLES**
    -Formulario: <form> </form>
    -Correo electrónico: <input type="email" name="correo" />
    -Contraseña: <input type="password" name="contraseña" />
    -Botón submit: <button type="submit">Ingresar</button>

>>
>>

## VALIDACIÓN DEL FORMULARIO LOGIN

Proceso mediante el cual yo me fijo cuál es el tipo de información que me están suministrando a través de los campos del fromulario; y, a su vez, verifico si esa info es la que yo necesito para dejar entrar o no al usuario a mi sistema.

**TRABAJAR CON FORMULARIOS EN REACT**
    1-*Función submitHandler*: creo una función en una constante submitHandler:
    [*]const submitHandler = () => {} 
    que se va a ejecutar cuando quiera enviar el formulario. Esta función va a contener toda la lógica dentro, todo lo que queremos que se ejecute cuando enviamos el form. Luego, la pasamos como parámetro al <form>
    2-*Evento onSubmit*: lo usamos para pasarle al <form> la función submitHandler; y para que el formulario la ejecute durante este evento.
    3-*Método preventDefault()*: lo que hace este método es evitar que el evento desencadene su acción por defecto (default), que en este caso es enviar el formulario. Tenemos que ponerlo dentro de la función Handler.

**VALIDACIÓN DE CAMPOS**
A través de la función submitHandler vamos a validar los campos del formulario. 
    *Capturar los campos*: Para poder capturarlos, dentro de la función creamos una constante donde guardaremos los datos que nos provea el campo, por ejemplo, "email"; luego, llamamos al evento (e), de ese evento, a través del atributo .target (que hace referencia al objeto que desencadenó el evento), al formulario, y de ese formulario al elemento que desee (por su name):
    [*]const email = e.target.email;
    Ahora, para poder capturar el valor que tienen estos campos, debo agregarle .value:
    [*]const email = e.target.email.value;
    *Validar los campos*: como ya capturé el valor, para validar los campos solo necesito hacer un IF. Por ejemplo, si quiero validar que los campos no se envíen vacíos:
    [*]if(email === ''|| password === ''){
           console.log('Los campos no pueden estar vacíos');
           return;
       }
    Si yo quiero validar que el correo electrónico está bien escrito, lo que tengo que hacer es hacer uso de una **expresión regular**.
    Si quiero validar si el correo electrónico ingresado es igual al correo electrónico que se supone que estoy esperando también uso un IF: 

**EXPRESIONES REGULARES BÁSICAS**
Son un mundo. Lo que vamos a hacer es usar Google para tomar expresiones regulares según las necesitemos. Por ejemplo, para verificar que el string que estoy recibiendo tiene formato de correo electrónico:
    >> Googleo: regex email javascript
    >> Tomo un ejemplo claro y lo copio:
       [*]const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    >> Agrego una función que me devuelva un valor bool true por consola si pasó la validación. Para eso utilizo un console.log que me muestre del objeto regexEmail la función .test enviándole como parámetro la const email. O sea, le hago testing al valor que tenga email a través de la validación regexEmail:
       [*]console.log(regexEmail.test(email));
    Esta función me da un bool false cuando no cumple y un true cuando cumple con la validación
    >> Agrego el IF, diciendo si el email es distinto a un string vacío y no es un email válido:
       [*]if(email !== '' && !regexEmail.test(email)[*] <!-- lo que hago acá es revertir el valor que me devuelve la función regexEmail.test; si me devuelve false se vuelve true, entonces ejecuto lo que está dentro del IF; necesito que el valor se vuelva true para que se ejecute lo que está dentro del IF -->){
            console.log('El correo electrónico ingresado no es válido');
            return;
          }
       
>>
>>

## ENVÍO DEL FORMULARIO
Viene luego de la validación porque, de esta forma, evito hacer peticiones HTTP cuando tengo información errónea.

**PETICIONES HTTP**
Son aquellas a través de las cuales envío solicitudes a una determinada API desde mi app de React. Son protocolos mediante los cuales se hacen solicitudes y según la respuesta voy a obtener una determinada información. Para hacer estas peticiones utilizamos los métodos (CRUD):
    *Post*: create; sirve para enviar información. Para esto toma 2 parámetros: la URL del endponint de la API y la información que quiero enviarle a esa API (si es más de un elemento lo envío como un objeto encapsulándolos con {})
    *Get*: read
    *Put*: update
    *Delete*: delete
    [*Patch*: modify]
Estas peticiones son peticiones asincrónicas que están basadas en Promesas.

**LIBRERÍA AXIOS**
Para implementar la librería Axios: 
    >>Terminal > npm install axios
Luego debo importarla al archivo que desee usarla: 
    >>import axios from 'axios';
Para implementar esta librería, luego de las validaciones que ya debería haber codeado, incluyo: 
    >> axios.post()
Las peticiones de tipo post sirven para enviar información. En este momento, a mi me interesa enviar correo electrónico y contraseña. Para que axios.post funcione, necesito: URL del endpoint de la API a la cual me voy a conectar y, en formato Objeto (o sea entre {}), los datos que voy a enviar y que la API espera recibir:
    >> axios.post('http://challenge-react.alkemy.org', { email, password })
Axios es una librería basada en Promesas, y como tal, promete devolvernos alguna información al llamarla. Cuando la promesa se resuelve (ya sea porque fue cumplida o rechazada), entonces (.then) vamos a poder hacer algo con esa info.
A través del método .then, paso un callback (res) que va a tomar esa respuesta:
    >> .then (res =>{
                console.log(res);
            })
Al hacer esto, en la Consola vamos a ver la respuesta de la API. Puntualmente, la info que nos interesa está en [data], que es donde encontramos el token; para verlo con claridad:
    >> .then (res =>{
                console.log(res.data);
            })
[*]Si por alguna razón, yo enviara datos erróneos a la API, Axios me devolvería un error por pantalla directamente (401); la promesa fue rechazada. Por eso es tan importancia la parte de las validaciones, porque si nosotros permitimos que se haga el llamado a la API sin ellas, es muy probable que nuestra app estalle en mil pedazos.

>>
>>

## MANEJO DE ERRORES (SWEET ALERT)
Vamos a implementarle una capa adicional que nos permita visualizar los errores que nos vamos encontrando en la validación de una manera más amistosa. Para eso, vamos a implementar la librería Sweet Alert.

**MANEJO DE ERRORES**
El manejo de errores es crucial para la UX porque nos permite anunciarle al usuario que ha sucedido algo. Nosotros veníamos trabajando los errores desde la Consola, pero no es algo que los usuarios corrientes consulten. 

**SWEET ALERT**
Es una librería que nos permite hacer componentes alertas más bonitos. Lo que creas son elementos modales, los antiguos pop-ups que ahora se conocen como modal-boxs. 
    *Instalación*: 
        -npm install sweetalert (en la Terminal)
        -https://sweetalert.js.org/guides/ > Using with libraries (Using React) > SweetAlert with React (Install) > Copy:
            > npm i @sweetalert/with-react 
    *Importar la librería*:
        -+ > Using with libraries (Using React) > Copy: import swal from '@sweetalert/with-react'
        -En la variable [swal] ya tengo mi componente para hacer las Sweet Alert. Puedo cambiarle el nombre (swAlert)
    *Implementación*: 
        -Cada vez que quiera lanzar una alerta voy a tener que llamar al componente swAlert como una función. Dentro de la función utilizo código .js:
         > swAlert(
            <h2>Esto es una ALERTA</h2>
           );
        -Dentro del swAlert puedo poner lo que quiera. Puedo armar un div y a ese header agregarle un párrafo con recomendaciones, aclaraciones, etc.
        -Reemplazo los console.log que había generado en las Validaciones del formulario por swAlerts con los mismos mensajes que comunicaba por Consola, para que se comuniquen por pantalla. También implemento swAlert para avisar que está todo bien cuando la API me devuelva el token. 
    *Decoración*
    En la página (https://sweetalert.js.org/docs/) podemos adentrarnos en las distintas posibilidades que me ofrece la librería para poder implementar colores, animaciones, etc.

>>
>>

## PERSISTENCIA DEL TOKEN
Cuando nosotros ponemos nuestro usuario o correo electrónico y contraseña, la API nos devuelve un Token. En los sistemas normales, esto significa que efectivamente mandamos la info correcta que estaba esperando el servidor y el servidor, en consecuencia, nos envió el token. Para que persista, tenemos que guardarlo; de esta manera evitamos que el usuario tenga que estar enviando constantemente la info de logueo.

**TOKEN**
Es un identificador del correcto inicio de la sesión; como viene "encriptado", es bastante difícil saber quién fue el que se logueó, sus datos, etc. Es algo que le sirve al servidor para poder saber exactamente quién se logueó y a nosotros como usuarios nos va a permitir que, una vez logueados, podamos hacer peticiones desde nuestra sesión. 
    *¿Dónde lo veo?*: Usando console.log(res.data) dentro de mi función axios.then, voy a poder imprimir en la Consola el token que me envíe la API, si mi inicio de sesión es correcto.
    *Guardar*: Voy a guardar el Token en el almacenamiento local del navegador. [Existen otros caminos para guardar el Token, como puede ser un almacenamiento global que maneje los estados]. Para esto tenemos 2 opciones:
    [1] -Guardo en una constante el token: 
          const tokenRecibido = res.data.token;
        -Luego, almaceno el token en el navegador. Para eso, llamo al localStorage y seteo un ítem dentro, enviándole los 2 argumentos que pide: nombre de la propiedad bajo el cual quiero guardar la info y la info que quiero guardar (la constante en la que guarde el Token):
          localStorage.setItem('token', tokenRecibido)
    *Chequear*: Para verificar que el Token fue guardado correctamente, desde la Consola ingreso: localStorage y presiono Enter; debería aparecerme el Token. Una vez que lo tengo guardado en el localStorage, lo voy a poder utilizar desde cualquier componente desde el que esté trabajando.
    *Acceder*: Vamos a poder acceder al Token a través del método .getItem, pasándole como argumento solo el nombre de la propiedad que seteé en el .setItem (en este caso 'token'). Esto lo puedo hacer por Consola directamente:
      localStorage.getItem('token');
    *Borrar*: Lo que yo guardo en el storage queda ahí hasta que lo elimine. Para resetear, borrar, el storage: 
      localStorage.clear();
Este Token lo vamos a usar más adelante; cuando querramos validar si la persona esta logueada, vamos a preguntar si lo tenemos en nuestro almacenamiento local. Si no se hubiese logueado la persona, la consulta: localStorage.getItem('token'); me va dar como respuesta: null.

**ALMACENAMIENTO LOCAL**
    -Local Storage. Es un almacenamiento que el navegador nos provee para guardar información. Es un objeto que ya existe, no lo tengo que crear, simplemente lo llamo: localStorage. Como tal, tiene un montón de propiedades.
    -Puedo acceder a él a través de la Consola, ingresando localStorage.
    -Local Storage solamente almacena datos string; o sea que si yo tengo un array o un objeto, necesito pasarlo primero a un string. Esto lo puedo hacer a través de stringFAY??????. Lo mismo cuando obtengo algo que se guarda como stringDEFAY???, para poder trabajarlo voy a necesitar convertirlo en el objeto o array o lo que sea.

>> NO ES QUE YO ME LOGUEO EN LA API, UNA API NO HACE ESO. LA API NOS DA COMO UN TICKET QUE VALIDA QUE INGRESAMOS
>>

## REDIRECCIÓN AL COMPONENTE LISTADO
Una vez logueados, el servidor debería redireccionarme al listado de películas.

**REACT ROUTER DOM**
https://reactrouter.com/ El dom es el que está especificamente diseñado para el ámbito web. 
Para instalarlo: npm install react-router-dom (si no funciona, le agrego --force).
Luego, para poder utilizarlo, me voy a dirigir a index.js y voy a importar el comonente browser de la librería: 
   import { BrowserRouter } from 'react-router-dom';
Una vez importado, voy a utilizar este componente para encapsular al componente App, anidándolo:
   <React.StrictMode>
    <BrowserRouter>
      <App />   
    </BrowserRouter>
   </React.StrictMode>
Lo que me va a permitir esta librería es comenzar a gestionar todo lo que se conoce como el Simple Page Application; para poder ingresar a una ruta y otra.
En el archivo App.js vamos a empezar a definir cuáles componentes se van a cargar dependiendo la ruta. Para esto, necesitamos importar 2 componentes de React Router Dom:
  import { Routes, Route } from 'react-route-dom';
El Routes (ex Switch) servirá como un switcher que, dependiendo la ruta que haya en la barra de direcciones, cargará un componente u otro. El Route me va a permitir definir cuál es elcomponente que quiero cargar.

**COMPONENTE LISTADO**
[1] Creo un componente Listado.js; armo dentro una función con su respectivo export:
    function Listado(){
        return (
            <h2>Soy el componente Listado</h2>
        )
    }
    export default Listado;
[2] Importo el componente desde el archivo App.js:
    import Listado from './components/Listado';
[3] Como lo que yo quiero es que por un lado se cargue el componente Login.js y por el otro el componente Listado.js, lo que debo utilizar es el componente Routes que me provee la librería React Router Dom. Lo llamo dentro del return y me voy a traer dentro de este todos los componentes que quiera renderizar (Login y Listado). Para esto último, tengo que utilizar el componente Route; con este lo que hago es enviar dos propiedades: el path (cuando se cargará el componente) y el element (ex component; el componente que se cargará):
    <Routes>
        <Route exact path="/" element={<Login />} />
        <Route path="/listado" element={<Listado />} />
    </Routes>
[*] En el caso del Login, voy a querer que se cargue cuando yo estoy en la raíz de la url, para simbolizar esto debo indicar: exact path="/". Le agregamos el exact para que no me traiga esta página cada vez que detecte la url + / (o sea todo el tiempo) sino que me la traiga cuando esta sea exactamente eso, sin nada después. 
    *Redirección*: La redirección hacia el componente listado (ahora ruta listado) la voy a querer hacer cuando el usuario se loguee (correctamente, habiendo pasado todas las intancias de validación); o sea una vez que se haya guardado el token. Para esto voy a tener que trabajar sobre el archivo Login.js
    [1] Lo que necesito es realizar una redirección, pero desde la barra de direcciones. Para esto, el React Router Dom trae un hook que se conoce como el useNavigate y que me va a permitir hacer cosas como estas redirecciones:
        import { useNavigate } from 'react-router-dom';
    [2] Como es un hook, lo siguiente que tengo que hacer es guardar el useNavigate en una variable:
        const history = useNavigate();
    [3] Una vez que se haya completado el sistema de logueo, después de la línea en la que guardaba el token en el localStorage, voy a pedir, usando la variable history, que me redirija al componente /listado:
        history('/listado');
    [*] La importancia del token radica, justamente, en que yo no debería poder acceder/ver este componente Listado.js si no logré generarlo. De esta manera lo protejo. Para que esto funcione así, debo agregar en mi componente Listado.js algo que verifique la info que tengo en localStorage:
        [1] Creo una variable token desde la cual levanto la info del localStorage que había guardado como 'token': 
            const token= localStorage.getItem('token'); 
        [2] Lo que quiero es verificar si tengo o no el token; y si no lo tengo voy a necesitar otra redirección; por eso tengo que importar el useNavigate también en Listado.js:
            import { useNavigate } from 'react-router-dom';
            function Listado(){
            const history = useNavigate();
            ...
        [3] Debo preguntar si el token es null; en caso de que lo sea, redirijo al usuario al Login:
            if(token === null){
                history('/');
            }
            [*] Para que esto efectivamente funcione, tengo que agregarle el hook useEffect de React. Este recibe un callback (dentro del callback puedo hacer lo que yo quiera) y un array vacío, para que solo se ejecute una vez:
                import { useEffect } from 'react';
                useEffect(() => {} <!-- callback -->, [] <!-- array vacío -->);
        [4] Finalmente, enlazo esos 2 últimos paso y debería quedar así:
            useEffect(() => {
                const token= localStorage.getItem('token');
                    if(token === null){
                        history('/');
                    }
            }, []);

>>El useEffect es un componente de React que nos permite hacer cosas cuando un componente "se monta" y para estar >>pendientes de qué es lo que sucede cuando este componente se renderiza en pantalla

# UNIDAD 3: DISEÑO DE LA ESTRUCTURA BÁSICA

## ARMADO DEL ENCABEZADO Y LA NAVEGACIÓN
Al momento tengo 2 rutas en mi app: ruta raíz (que me está renderizando el login) y la ruta /listado (que me mostrará el listado de cosas)

**COMPONENTE HEADER**
-Creo un componente Header.js y creo la clásica función con su respectivo return y export
-Dentro del return, desarrollo la barra de navegación con HTML

**ELEMENTOS HTML PARA BARRA DE NAVEGACIÓN**
-Toda barra de navegación está constituida por enlaces; es un listado de enlaces. Por lo tanto necesitaremos:
    [1] Etiqueta <header />: encabezado
    [2] Etiqueta <nav />: la utilizo para definir una sección de una página cuyo propósito es proporcionar enlaces de navegación, ya sea dentro del documento actual o a otros documentos
    [3] Etiqueta <ul />: la utilizo para definir una lista "desordenada"
    [4] Etiqueta <li />: la utilizo para crear los distintos elementos, ítems, de la lista

**COMPONENTES REACT ROUTER**
-Dentro de una app de React, no podemos utilizar enlaces como los utilizábamos en HTML porque nos encontramos trabajando con una SPA (Simple Page Application). Si usamos la sintáxis de HTML vamos a lograr que se refresque toda la app
-Voy a utilizar un componente que nos da React Router (que es la librería que nos permite hacer todo el sistema de ruteo de una app de React) llamado Link:
    import { Link } from 'react-router-dom';
-El componente Link se comporta como un enlace, como una etiqueta <a /> de HTML (de hecho, cuando lo veamos renderizado en el HTML nos vamos a dar cuenta que es una etiqueta a). Pero lo que nos va a permitir es que no se refresque la página:
    <Link to="/">Home</Link>
    [*] Es muy parecida a la sintáxis de <a />, pero reemplazo esta etiqueta por <Link /> y el href="" por to=""

>>
>>

## ARMADO DEL PIE DE PÁGINA

**FOOTER**
Es la parte final de un sitio web. Se ha dejado un poco de lado porque no se le presta tanta atención. Sin embargo, es una buena herramienta para poner cosas interesantes como pueden ser los enlaces a nuestras redes sociales, enlaces de navegación de nuestra página, etc
    *Componente Footer.js*:
    -Creo un componente Footer.js y creo la clásica función con su respectivo return y export
    -Dentro del return, desarrollo el footer con HTML

**ELEMENTOS HTML PARA FOOTER**
    [1] Etiqueta <footer />: pie de página 
    [2] Etiqueta <nav />: la utilizo para definir una sección de una página cuyo propósito es proporcionar enlaces de navegación, ya sea dentro del documento actual o a otros documentos
    [3] Etiqueta <ul />: la utilizo para definir una lista "desordenada"
    [4] Etiqueta <li />: la utilizo para crear los distintos elementos, ítems, de la lista
    [5] Etiqueta <a />: la utilizo para generar enlaces a redes sociales o páginas que no sean particularmente de esta app; enlace tradicional
        [*] Siempre que usemos los enlaces tradicionales que nos lleven a una página distinta a la de mi app, React recomienda implementar el atributo [rel=""] y los valores: "noopener noreferrer". Con esto decimos que es un enlace que no nos importa hacerle seguimiento ni nada; es decir, evitamos que los enlaces estén como corruptos y te lleven a un lado que no es el especificado
    [6] Etiqueta <p />: para poner el Copyright o cualquier texto

>>
>>

## INTEGRACIÓN DEL HEADER Y EL FOOTER
Recordemos que los componentes son bloques de código reutilizables que a mi me gustaría que estén presentes en determinados lugares. El Header y el Footer tienen la curiosidad de estar presentes a lo largo de toda la aplicación; por eso debo integrarlos al flujo de la aplicación como omnipresentes

**INTEGRACIÓN HEADER Y FOOTER**
[1] En el archivo App.js, importo el componente Header y el componente Footer:
    import Header from './components/Header';
    import Footer from './components/Footer';
[2] Ubico el <Header /> antes de entrar al <Routes /> 
[3] Ubico el <Footer /> después del <Routes />
[*] El componente App.js tiene la estructura principal de la aplicación, por eso, para que el header y footer permanezcan "omnipresentes" a lo largo de nuestra app, debo importarlo acá

>>
>>

## INTERGACIÓN DE LIBRERÍA CSS

**MANERAS DE TRABAJAR CSS CON REACT**
Hay distintas formas de implementar CSS en React:
    -Stile Components: librería
    -SASS: pre-procesador
    -Bootstrap React: framework
    -Tailwind CSS: framework

**INTEGRACIÓN**
*Forma clásica*: CSS dentro de React trabaja de la misma manera que un CSS tradicional: escribís tu CSS, lo vinculás y listo.
    [1] Creo una carpeta de nombre [css] dentro de [src]
    [2] Creo un archivo [app.css] donde voy a trabajar los estilos de mi app
    [3] Importo la carpeta en mi archivo [app.js] directamente así: 
        import './css/app.css';
    [4] Si quiero escribir todo mi CSS a mano, de esta manera puedo hacerlo
*Forma Modular*: trabajo con CSS armando componentes
    [1] Ídem
    [2] Creo distintas hojas de estilo que funcionen como componentes dentro de esta carpeta. Por ejemplo, creo un componente que se llame footer.css, en el cual voy a darle estilo solamente al componente
    [3] Importo el archivo footer.css desde Footer.js:
        import '../css/footer.css'
        [*] utilizo '../' porque en ese archivo estoy dentro de la carpeta components y para acceder a la carpeta css tengo que ir para atrás; '../' indica que vaya para atrás 
*Librerías de CSS*: una librería de CSS es un conjunto de archivos que podemos descargarnos e implementar de manera fácil, rápida y cómoda

**LIBRERÍAS CSS**
*Bootstrap*: https://getbootstrap.com 
    [1] Descargo donde dice Compiled CSS and JS
    [2] Se me descarga un zip ocn 2 carpetas: css y js
        [*] Las cosas que te da Bootstrap en el nivel de funcionalidades de javascript no son muy amenas. Recomendamos no utilizar
    [3] Copio el archivo css > bootstrap.min (.css) en la carpeta src > css de mi aplicación
    [4] Importo la carpeta en mi archivo [app.js] así: 
        import './css/app.css';
    [*] Al hacer esto, Bootstrap pisará mucho de lo que yo pude haber hecho con otros archivos CSS
    [5] De aquí para adelante lo que queda por hacer es empezar a implementar las cosas que te da Bootstrap para darle estilos a tu aplicación. Por ejemplo:
        <div className="container">
*Tailwind*: https://tailwindcss.com ; en este caso no alcanza con descargarla. Es una librería muy poderosa, si nos gusta CSS es recomendable inspeccionarla
*Bulma*: https://bulma.io

>>RECORDAR: DENTRO DE REACT TODO LO QUE SE CONOCE COMO CLASS DEBE REMPLAZARSE POR CLASSNAME
>>

# UNIDAD 4: DESARROLLANDO LA VISTA "LISTADO"

## ARMADO DE LA VISTA
El componente Listado nos mostrará un listado de películas

**ELEMENTOS HTML**
Lo que vamos a tener es una estructura a partir de columnas. React trabaja con este tipo de implementación de la mano de Bootstrap. Para esto trabajaremos sobre el componente Listado.js:
    *HTML*:
        -<div />
    *Bootstrap*: voy a armar la estructura básica; no voy a agregarle la propiedad container porque ya la tengo implementada en App.js:
        -propiedad className="row": la agrego en el div y creo una fila (atajo: .row-)
        -propiedad className="col-4": la agrego en un div dentro del otro div y creo columnas (atajo: .col-). Como quiero generar 3 columnas, el tamaño que envío es 4; si quiero 4 columnas, envío tamaño 3 ¿por qué?[?]. En una fila pueden caber max 12
        -propiedad style={{border: '1px solid red'}}: le agrego bordes de color a mis celdas. No se recomienda trabajar con estilos de esta forma
        -https://getbootstrap.com/docs/5.1/components/card/ -> copio el código que me provee para armar una Card. 
            [*] No olvidarme de cambiar class x className; y de cerrar la etiqueta <img /> que en HTML no se cierra

**INFORMACIÓN DEL COMPONENTE**
Dentro de esta celda vamos a traer información de una API. Esta nos provee del título de la película, del póster y de una descripción
    [1] Importo el componente Link de React Router Dom para implementar links en un formato de SPA:
        import {Link} from 'react-router-dom';
    [2] Reemplazo la etiqueta <a /> por <Link /> y el href="" por to=""
    [3] Cambio la información del Título, párrafo, etc

>>
>>

## PROTECCIÓN DE LA RUTA "/LISTADO"
Es importante proteger las rutas porque eso nos permite hacer que todas las personas que no estén autenticadas en nuestra aplicación no puedan ver algún tipo de contenido

**PROTEGER LA RUTA**
Es relativamente sencillo. Voy a exigir algún tipo e información (ya sea que venga de una API o que esté en el localStorage) y lo que voy a hacer es un tipo de renderizado condicional, en el que lo primero que voy a decir es: si no tengo ESA información, quiero hacer una redirección

**REDIRECCIÓN**
La redirección que se ejecuta cuando intento acceder al Listado sin estar logueado puede ser mejorada para que no se renderice y haga como un parpadeo.
El history('/'); que realizábamos dentro del useEffect en el componente Listado.js es un proceso en el cual lo que hago es cambiar la ruta en la que me encuentro y yo no quiero hacer eso; no quieroo llegar hasta ahí para luego cambiarla, yo quiero ser redirigido:
    [1] Sacar const token= localStorage.getItem('token'); de adentro del useEffect y cambiar const x let (constante por variable) y localStorage por sessionStorage:
        let token= sessionStorage.getItem('token');
    [2] Borro todo lo que tengo dentro del useEffect (useEffect incluido)
    [3] Importo el componente Navigate de React Router Dom:
        import { Navigate } from 'react-router-dom';
    [4] Voy a utilizar un renderizado condicional (short circuit):
        [1] Luego voy a decir: si no tengo el token (!token) quiero hacer una redirección:
            { !token && <Navigate />}
            [*] Para abrir sentencias de javascript en el return necesito hacerlo dentro de: {}
            [*] Recordemos que la negación hace que todo aquello que sea falso se convierta en verdadero y todo aquello que sea verdadero se convierta en falso. Un valor null es un falso.
        [2] Indico hacia dónde quiero hacer la redirección con la propiedad replace to="":
            { !token && <Navigate replace to="/"/>}
        [3] Agrego <></> para encapsular todo

*Redirección en el login*: hago lo mismo para proteger la ruta del Login si ya estoy logueado:
    [1] Agrego la variable token antes del return:
        let token = sessionStorage.getItem('token');
    [2] Digo: si tengo el token quiero hacer una redirección hacia Listado, no quiero que se cargue el Login:
        {token && <Navigate replace to="/listado"/> }
    
>>CON EL USE NAVIGATE NO ESTABA MAL HECHO, PERO DE ESTA FORMA EVITO QUE SE RENDERICE TODO EL COMPONENTE LISTADO ANTES DE >>CAMBIAR LA RUTA Y QUEDA MÁS PROLIJO A LA VISTA

## OBTENCIÓN DE DATOS DESDE LA API
La API que vamos a utilizar es la de https://www.themoviedb.org/settings/api 
[*] documentación: https://developers.themoviedb.org/3/getting-started/introduction

**OBTENCIÓN DE LA API**
    [1] Debo loguearme y, en este caso y en muchos otros, debo enviar un reporte de cómo voy a usar esta API, para qué tipo de desarrollo, cómo es la app, etc
    [2] Por un lado tengo la Clave de la API que me generó el servidor. Por el otro un ejemplo de splicitud de API; cuando ingreso a esa dirección que me pone de ejemplo, lo que voy a ver es la info que me trae la API
    [3] Me interesa traerme las películas más recientes; para eso:
        >> https://developers.themoviedb.org/3/getting-started/introduction
        >> Discover > Movie Discover
        >> Try it out -> me va a traer un montón de info de las películas
        >> [abro el link que aparece al final, al lado de SEND REQUEST y le agrego la key en la url]
            [*] Me trae un objeto con un page, results, total_pages, total_results. En results viene un array con 20 elementos, cada uno representa una película; esto es lo que me interesa
        >> Chequeo el formato de la info que tiene la API
    [4] Copio la url del link que estaba chusmeando (https://api.themoviedb.org/3/discover/movie?api_key=6b6d4a8dd81647dcfeeb993329bfb039&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate) para hacer el llamado a la API desde mi componente Listado.js 

**LLAMADO A LA API**
En React los llamados a la API los hacemos dentro del hook useEffect
    [1] importo el useEffect:
        import { useEffect } from 'react';
    [2] En la función, antes del return, llamo al useEffect y le paso una constante con la url que copié anteriormente:
        useEffect(() => {
            const endPoint = 'https://api.themoviedb.org/3/discover/movie?api_key=6b6d4a8dd81647dcfeeb993329bfb039&language=es-ES&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate'
            }
        }, [])
        [*] el useEffect para que se ejecute una sola vez necesita tener un array vacío. 
    [3] Llamo a la API a través de axios con el método get pasando como parámetro el endpoint:
        import axios from 'axios';
        axios.get(endPoint);
    [4] Como axios nos devuelve una promesa, necesito implementar el método .then para obtener la rta:
        .then(response => {
            console.log(response)
        })
    [5] Si en la Consola me muestra un status 200 es que está todo OK. Ahí mismo voy a poder ver la info que trae expandiendo >data
        [*] Entonces, toda la info de la API la tengo en responde.data

**RESPUESTA DE LA API**
Lo más común es que pasemos la info que obtuve de la API a un State de React. Por eso es que son importantes los Estados, porque voy a poder tomar luego ese State que se actualizó al momento en que me llegó la info de la API, y trabajar con el mismo. Para esto: 
    [1] Importo el useState en mi componente Listado.js:
        import { useState } from 'react';
    [2] Creo un Estado con su correspondiente nombre y setter; y le doy como valor un array vacío:
        const [ moviesList, setMoviesList ] = useState([]);
        [*] El setter me va a permitir setear el listado de películas; el array vacío después va a contener la info que llegue de la API. El definir el array como vacío me va a servir también si tengo problemas para conectar con la API; de esta forma, cuando haga el map, no importará si no tengo información, lo devuelve así vacío y no crashea
        [*] Uso corchetes porque necesito declarar un array con las propiedades porque la función useState nos retorna un array con esas dos posiciones (indice 0: valor del estado moviesList, indice 1: la función que me permite actualizar setMoviesList)
    [3] Seteo el estado listado de películas dentro de la función .then:
        setMoviesList(apiData)
    [4] Le paso la dependencia setMoviesList al array vacío que quedaba luego del cierre de useEffect
    [5] Si le agrego un consoleLog, voy a ver que primero me trae el Array vacío y después me dice que es un objeto porque estoy guardando toda la respuesta de la API (page, results, total_pages, total_results)
    [6] A mi me interesa, en este caso, solo results; entonces:
        setMoviesList(apiData.results)

>>
>>

## RENDERIZACIÓN DE DATOS EN COMPONENTE
Renderizaremos la info que obtuvimos en nuestro .jsx. La primera parte ya la adelantamos (seteando el estado del array

**RENDERIZACIÓN DE DATOS DINÁMICOS**
El card es el que va a tener la información. Hasta el momento yo tengo un solo <div className="card" />, ¿cómo hago para que me entren 20 películas? Vamos a utilizar el método de iteración map
    *El método map*: usado de otra manera te devuelve un array nuevo. Acá, lo que va a hacer es permitirte iterar un array de información. El método map toma un callback, este callback es una función que toma dos parámetros
    [*] Recordar: dentro de los componentes de React no podemos usar otro tipo de iterador como el FOR u otro que no retorne nada
    [1] Dentro del <div className="row" /> vamos a abrir {} y vamos a hacer un map del array moviesList:
        {moviesList.map((oneMovie, idx));}
        Los parámetros representan:
        -oneMovie: cada uno de los elementos presentes en el array moviesList
        -idx: indice del array en el que se encuentra ese elemento [i]
    [2] El método map es una función, como tal tiene un return (creo que es una función). Dentro del return voy a enviar todo el resto de la info que tenía: columnas, cards, etc
    [3] Necesito generar una key única para cada uno de los elementos que estoy generando con la iteración. Para eso, tengo que agregar dentro del contenedor más general un key={idx}:
        <div className="col-4" key={idx}>

**IMPLEMENTAR LA INFO**
[*] Recordemos que guardé el objeto de cada película en la variable oneMovie
[*] De toda la info que me provee la API voy a tomar: title, poster_path y overview
    [1] Reemplazo el texto Movie Title por la info title:
        <h5 className="card-title">{ oneMovie.title }</h5>
    [2] Reemplazo la src de la img  por la info poster_path:
        <img src={ oneMovie.poster_path } className="card-img-top" alt="..." />
        [*] Si nos fijamos en la Consola confirmamos que img cargo la info del poster_path; pero esto no es una url desde donde yo pueda obtener la imagen. En su documentación, la API me dice que si yo quiero sacar las imagenes yo tengo que darle la URL que me provee en:
        https://developers.themoviedb.org/3/getting-started/images
        Para agregar esto voy a necesitar hacer uso de Plantillas Literales (Template Literal) a través de estos símbolos [``], de la URL que copio (sin el final que es un ejemplo) y de ${ oneMovie.poster_path }:
        <img src={ `https://image.tmdb.org/t/p/w500/${oneMovie.poster_path}` } className="card-img-top" alt="..." />
    [3] Reemplazo el texto Review de la movie por la info overview:
        <p className="card-text">{ oneMovie.overview }</p>
        [*] Para que las cards no me queden disparejas, voy a agregarle una condición al overview que se llama substring que le indique desde que caracter hasta que otro voy a mostrar:
        <p className="card-text">{ oneMovie.overview.substring(0, 100) }</p>
            [*] Puedo hacer lo mismo con los títulos
    
>>
>>

## MANEJO DE ERRORES
Nos interesa manipular los errores, si llegaran a existir

**MANEJO DE ERRORES**
Qué hacer si en algun momento, aunque no sea tan común, la API se rompiera:
    *Axios*: axios, al igual que fetch, viene con un método que se llama [.catch] que me va a permitir agarrar los errores que pudieran haber. El [.catch] necesita un callback que va a recibir como parametro un error:
    .catch(error => {
        console.log(error);
    })
    [*] De esta forma lo que vamos a lograr es que la app no crasheé y que solo se muestre en Consola el error
    [*] Para informarle a la persona del error vamos a hacer uso del Sweet Alert
    *Sweet alert*: función que recibe cualquier tipo de estructura .jsx
    [1] Lo importamos:
        import swAlert from '@sweetalert/with-react';
    [2] Reemplazo el console.log dentro del .catch por un sweetAlert con un mensaje para el usuario:
        .catch(error => {
            swAlert(<h2>Hubo errores.<br/> Intenta más tarde</h2>);
        })
    [3] Es importante, para este manejo de errores, haber definido el useState con un array vacío. Si lo hubiese definido como null, si la conexión a la API salía mal, crasheaba igual porque me iba a decir que no podía hacer el map de un null
        [*] Es importante que los Estados los declare con el tipo de dato que voy a tener finalmente; sobretodo cuando estoy mapeando

>>
>>

## INGRESO AL DETALLE DE CADA ÍTEM
Vamos a ingresar al detalle de cada película

**COMPONENTE DETALLE**
Ya habíamos preparado el botón View detail como un Link porque estaba pensado que nos llevara a algún otro lugar. Ese otro lugar va a ser un nuevo componente Detalle.js
    [1] Creo en la carpeta components el componente Detalle.js y creo su función:
        function Detalle() {
            return(
                <h2>Soy el componente Detalle</h2>
            )
        }
        export default Detalle;
    [2] En App.js importo el componente y preparo una ruta Detalle, a la cual el usuario pueda acceder, y en la cual, adicionalmente, viaje el ID puntual de la película escogida:
        import Detalle from './components/Detalle';
        <Route path="/detalle" element={<Detalle />} />
    [3] Desde el componente Lsitado.js, en el Link de View detail, voy a redireccionar a Detalle.js:
        <Link to="/detalle" className="btn btn-primary">View detail</Link>
    [4] Ahora necesito agregarle a la ruta el ID de la película que yo haya seleccionado. Para eso reemplazo el string de to="" por una sentencia de javascript (to={}), utilizo un Template Literal (``) y uno mi ruta /detalle a través de un ? con un identificador del dato que estoy requiriendo (movieID). Como este último identificador va a ser dinámico, debo asignarle una variable a través de =${}:
        <Link to={`/detalle?movieID=${oneMovie.id}`} className="btn btn-primary">View detail</Link>

**INFORMACIÓN**
La información que a mi me va a permitir ver el detalle la encuentro en la Documentación de la API:
    [1] https://developers.themoviedb.org/3/movies/get-movie-details > Try it out ; acá voy a encontrar el endpoint para acceder a los detalles de las películas (al lado de SEND REQUEST)
    [2] Este endpoint nos pide el ID de la película y la API key:
        https://api.themoviedb.org/3/movie/[{movie_id}]?api_key=[<<api_key>>]&language=es-ES
    [3] Si hacemos un console.log de mi variable moviesList, voy a ver que dentro del detalle de cada objeto hay un elemento que es el ID

>>
>>

# UNIDAD 5: DESARROLLANDO LA VISTA "DETALLE"

## REPASO DE VERIFICACIÓN DE USUARIO Y TOKEN
Por ahora, el componente Detalle.js no está protegido con el token. O sea si intento ingresar sin haberme logueado, puedo hacerlo

**TOKEN**
    *Funcionamiento*
        [1] Al igual que en el componente Listado.js, voy a hacer un renderizado condicional, con la declaración de la variable token:
            import { Navigate } from 'react-router-dom';
            let token= localStorage.getItem('token');
            return(
            { !token && <Navigate replace to="/"/>})
    *Eliminar automaticamente*: si quiero que el token se elimine al terminar la sesión del usuario del navegador, voy a tener que dejar de trabajar con el localStorage y voy a utilizar el sessionStorage:
        [1] Reemplazo todos los localStorage x sessionStorage
        [2] Para borrar forzosamente el token de sessionStorage, en la Consola desde el navegador:
            sessionStorage.clear()

>>
>>

## ARMADO DE LA VISTA "DETALLE"

**CAPTURAR INFO DE LA URL**
Nuestro objetivo puntual va a ser poder tomar el ID que viaja en la URL para luego capturar la info puntual de esa peli
    *URL Search Params*: la interfaz URLSearchParams define métodos útiles para trabajar con los parámetros de búsqueda de una URL; es una interfaz que nos provee javascript
        [1] La utilizamos a través de una variable objeto:
            let searchParams = new URLSearchParams(paramsString);
            [*] Dentro de los paréntesis especifíco de dónde es que yo quiero sacar los params; ahí le voy a pasar la ruta 
        [2] Para obtener la URL, javascript tiene un método que es:
            window.location
            [*] Si quiero obtener la parte específica de la URL que tiene el ID, que tradicionalmente se conoce como la [query-string] y que es todo lo que viaja después del "?":
                window.location.search >> <!-- movieID=616037 -->
        [3] A mi me sirve el número solamente; para obtener eso:
            let movieID = searchParams.get('movieID');
            [*] Dentro de los paréntesis tengo que poner el identificador que utilicé en el Link que yo armé:
                <Link to={`/detalle? [movieID] =${oneMovie.id}`}>View detail</Link>
        [4] Con este ID ahora voy a necesitar hacer un llamado a la API

**LLAMADOS ASINCRÓNICOS**
    *Llamado a la API*
        [1] Por sugerencia, se hacen siempre dentro del useEffect:
            useEffect(()=> {
                console.log(movieID)
            }, []);
        [2] Continúa en el prox ##

**ARMADO DE LA ESTRUCTURA**
Esqueleto. Luego la vamos a hacer dinámica
    *Elementos HTML*
        -<div />
        -<h5 />
        -<ul />
        -<li />
    *Porpiedades Bootstrap*
        -"row": fila para armar todo 
        -"col-4": columna para la imagen
        -"col-8": columna para el título

>>
>>

## OBTENER LOS DATOS DE LA API 

**LLAMADO A LA API**
    [1] Necesito usar axios; importo la librería en el componente Detalle.js:
        import axios from  'axios';
    [2] Dentro del useEffect, utilizo axios para hacer el llamado a la API a través del método .get:
        axios.get(<!-- endpoint -->)
    *Endpoint*: 
        [1] Recordemos que el endopint (el de los detalles de las películas) que necesito para hacer el llamado a la API lo encuentro acá:
            https://developers.themoviedb.org/3/movies/get-movie-details > Try it out > (abajo, al lado de SEND REQUEST)
        [2] Este endpoint nos pide el ID de la película y la API key:
            https://api.themoviedb.org/3/movie/[{movie_id}]?api_key=[<<api_key>>]&language=es-ES
        [3] Creo una constante endPoint dentro del useEffect y le doy como valor ese URL, reemplazando la API key (por ahora va a crashear porque me falta hacer el reemplazo de movie ID):
            const endPoint = 'https://api.themoviedb.org/3/movie/[{movie_id}]?api_key=6b6d4a8dd81647dcfeeb993329bfb039&language=es-ES'
        [4] El movie ID es un elemento dinámico        
            *Dinamicidad*:
            [1] Encapsulo toda la URL con los Template Literal [``]
            [2] Reemplazo [{movie_id}] x ${movieID} (que es la variable que ya habíamos declarado y dado valor con el .get del URLSearchParams)
        [5] Agrego endPoint como parámetro del .get
    [3] Agrego el método .then y el .catch:
        .then(response => {
            const movieData = response.data;
            console.log(movieData);
        })
        .catch(error => {
            console.log(error)
        })
    [4] Chequeo en la Consola si obtengo la info que le pedí a la API

>>
>>

## RENDERIZAR LOS DATOS OBTENIDOS DE LA API

**INFORMACIÓN DE LA API**
Para mostrar la información de la API dentro del componente, necesito hacer un Estado porque yo no sé en qué momento me va a llegar la info (recordemos que es un llamado asincrónico). Al principio voy a tener un State que es vacío y dsps voy a llenarlo con la info:
    [1] Importo el useState:
        import { useState } from 'react';
    [2] Dentro de mi función Detalle, antes del return, declaro un array que le doy valor llamando al useState:
        const [ movie, setMovie ] = useState(null);
        [*] setMovie lo voy a utilizar dentro de axios parar setear esta variable con la info que me traiga del endPoint
        [*] En principio ese valor que le doy es null, luego voy a cargarlo de info
    *Renderizado condicional*: para evitar tener errores, como podría pasar si en el return pidieramos un dato que no pudimos setear por problemas con la API
        [1] Meto toda la estructura del componente, todo lo que está en el return que se muestra en pantalla al usuario al solicitar la info, en un renderizado condicional que diga que si movie es true (o sea si no es null, si existe), que lo muestre:
            { movie && 
                <>
                <divs estructura />
                </>
            }
            [*] Tengo que encapsularlos en los <> </> porque la condición está diciendo que si movie tiene info retorne eso, y los retornos son siempre de un solo elemento
        [2] Puedo agregar una condición para cuando no tengo movie:
            { !movie && <p>Cargando...<p/> }
        [3] Voy pasando la info que obtengo a través del objeto movie en los <div> correspondientes según la información que tiene la API. Por ejemplo:
            <h2>{ movie.title }</h2> 
            <h5>Título original: { movie.original_title }</h5>
            <h5>Fecha de estreno: { movie.release_date }</h5>
        [4] Para pasar la imagen tengo que pasar como src="" la url que me da la API en su Documentación; como hicimos en Listado.js
            <img src={ `https://image.tmdb.org/t/p/w500/${movie.poster_path}` } className="img-fluid" alt="movie poster" />
        [5] Para los géneros, como la API los envía en un array y React no puede renderizar objetos, voy a tener que hacer algo distinto: mapear
            *Map*: es un método incorporado en los arrays para iterar a través de los elementos dentro de una colección de arreglos en JavaScript. Como un bucle para avanzar de un elemento a otro en una lista, manteniendo el orden y la posición de cada elemento
            [1] Reemplazo los 3 <li /> por un mapeo:
                { movie.genres.map(oneGenre => <li key={oneGenre.id}>{oneGenre.name}</li>) }
                [*] le agrego como key el id que me provee la API; lo agrgeo como propiedad del <li /> para que no se muestre en pantalla pero distinga cada hijo del mapeo

>>
>>

# UNIDAD 6: ARMANDO EL BUSCADOR Y LA SECCIÓN DE FAVORITOS

## ARMADO DEL COMPONENTE BUSCADOR
Desarrollaremos una barra de búsqueda

**BARRA DE BÚSQUEDA**
    [1] Creo un componente Buscador.js en mi carpeta components y desarrollo dentro la función básica:
        function Buscador(){
            return(
                <h2>Buscador</h2>
            )
        }
        export default Buscador;
    *Ubicación*: seguramente lo queramos en un lugar donde siempre pueda estar presente para que el usuario pueda utilizarlo cuando quiera facilmente; la barra e navegación es el lugar ideal
        [1] Llamo al componente Buscador desde el Header.js
            import Buscador from './Buscador';
        [2] Lo ubico en el return
            <Buscador />

**ELEMENTOS HTML**
Voy a armar un formulario con HTML y Bootstrap:
    [*] Copio el formulario que había armado para el Login
        [1] Le saco: el evento onSubmit (por el momento), el span de Correo electrónico, todo el segundo label, los 2 <br />, el d-block
        [2] Le reemplazo: el type="" x type="text", name="" x name="keyword", Ingresar x Buscar
        [3] Le agrego: className="d-flex align-items-center" a la etiqueta <form>, "mb-0 mx-2" a la etiqueta <label>, placeholder="Escribe aquí..." en <input>

**INFORMACIÓN**
*Para manejar la información*
    [1] Necesito un submitHandler, como usábamos en el Login; este va a recibir el evento de una función en la que voy a colocar un preventDefault() que evite que se ejecute si no envío nada para que no haga un envío de formulario si no es necesario:
        const submitHandler = e => {
            e.preventDefault();
        }
    [2] Le paso el submitHandler al formulario a través del onSubmit={}:
        <form className="d-flex align-items-center" onSubmit={submitHandler}>
*Para capturar la información*:
    [1] Necesito una constante keyword que tenga como valor, en principio, el currentTarget del evento (o sea, el formulario porque fue el que disparó el evento con el onSubmit={submitHandler}):
        const keyword = e.currentTarget
    [2] Pero dentro de este formulario, yo necesito el input, lo que ingresó el usuario; a esto puedo acceder a través de su atributo name="", que en este caso es name="keyword":
        const keyword = e.currentTarget.keyword;
    [3] Esto me devuelve todo el input completo, con etiqueta, atributos, etc. A mi me interesa solo su valor:
        const keyword = e.currentTarget.keyword.value; 
*Para prevenir errores*:
    [1] Importo la librería sweeetAlert:
        import swAlert from '@sweetalert/with-react';
    [2] Con un IF digo que si el keyword está vacío, si su longitud es 0, voy a lanzar una alerta:
        if(keyword.length === 0){
            swAlert({ text: "Escribe una palabra clave", icon: "error" })
        }

>>
>>

## VALIDACION DEL FORMULARIO DE BÚSQUEDA

**VALIDACIÓN**
Vamos a agregar algunas validaciones para evitar envíos de formulario innecesarios
    [1] Los espacios que puedan quedar en un input, javascript los considera como un caracter (por ende el swAlert que habíamos hecho no funcionaría). Para esto vamos a hacer un [trim]
        *Trim* (quitar, podar): es un método que sirve para eliminar los espacios en blanco de ambos extremos del string; no los del medio, solo los de ppo o final. Lo agrego:
            const keyword = e.currentTarget.keyword.value.trim();
    [2] La cantidad de caracteres también es interesante de limitar; puedo cambiar la condición en el IF:
        if(keyword.length < 2){...
    O puedo agregar un ELSE IF con un swAlert distinto dependiendo la situación:
        else if(keyword.length < 2){
            swAlert({ text: "Escribe más de un caracter", icon: "error" })
        }    

>>
>>

## REDIRECCIONAMIENTO A LA SECCIÓN RESULTADOS

**REDIRECCIONAMIENTO**
    [1] Creo el componente Resultados.js en la carpeta components con su función
    [2] Importo el componente a mi componente APP.js y lo agrego en el return de su función:
        import Resultado from './components/Resultado';
        <Route path="/resultado" element={<Resultado />} />
    [3] Tengo que hacer una redirección desde el componente Buscador.js a Resultado.js. Lo hago a través de un IF usando el hook [useNavigate]:
        [1] Importo el hook de la librería React Router Dom
            import { useNavigate } from 'react-router-dom';
        [2] Creo una constante history que va a tomar el valor del useNavigate:
            const history = useNavigate();
        [3] Dentro del IF, después de haber pasado todas las validaciones, hago el llamado a la constante history que cree y redirijo a /resultado
            history('/resultado');
    *Capturar la búsqueda*
        [1] Modifico la redirección utilizando los Template Literal [``] para poder enviar un Query String (cadena de consulta) donde incluya la info de la búsqueda que se haga:
            history(`/resultado?keyword=${keyword}`);
            [*] En este caso usamos el mismo término "keyword" en ambos casos, pero la primera keyword podría haberla llamado de cualquier otra forma; la segunda es la variable que definimos las clases anteriores

**LIMPIAR INPUT DE BÚSQUEDA**
Si quisieramos limpiar el formulario una vez que se envía para que el input quede vacío:
    [1] Agregamos dentro de este mismo else, antes de la redirección, un llamado al evento, al currentTarget (que sería el formulario) y al value de la keyword (que fue el name que le di al input) y le asignamos como valor un string vacío:
        e.currentTarget.keyword.value = '';

**CAPTURAR INFO QUE VIAJA EN LA URL**
Vamos a necesitar esta info para luego hacer la búsqueda propiamente dicha y traer la info que se solicita. Para extraer la keyword que viaja en la URL en el componente Resultado.js:
    [1] Defino una variable query (consulta) y le doy valor a través de la interfaz URLSearchParams, con la que capturo la URL a través del método window.location.search (.search es cuando querés obtener puntualmente la query-string):
        let query = new URLSearchParams(window.location.search);
    [2] Defino una varianle keyword y le doy valor con la variable anterior (query), a través del método .get, al que le paso como parámetro "keyword", que es la palabra que use en la URL para definir mi query:
        let keyword = query.get('keyword');
>>
>>

## LLAMADO A LA API CON KEYWORD

**LLAMADO A LA API**
La API nos provee de un sistema de búsqueda: https://developers.themoviedb.org/3/search/search-movies , ahí mismo nos dice qué Variables o Query Strings son necesarias (required)
    [1] Copiamos el endpoint que nos provee al final de la sección Try it out:
        https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=es-ES&page=1&include_adult=false
        [*] Reemplazo api_key: 
            https://api.themoviedb.org/3/search/movie?api_key=6b6d4a8dd81647dcfeeb993329bfb039&language=en-US&page=1&include_adult=false
    [2] Me fijo qué tengo que proveerle a este endpoint; en este caso me solicita el query:
        https://api.themoviedb.org/3/search/movie?api_key=6b6d4a8dd81647dcfeeb993329bfb039&language=en-US&page=1&include_adult=false&query=
        [*] Para proveer el valor del query voy a tener que hacer una Query String dinámica más adelante
    [3] Importo el useEffect y useState:
        import { useEffect, useState } from 'react';
    [4] Voy a tener que crear un Estado; para eso, declaro un array constante, con una variable que sea el dato y otra que sirva para setearlo, y le doy como valor un array vacío a través del useState
        const [moviesResult, setMoviesResult] = useState([]);
    [5] *Llamado a la API*: 
        [1] Lo hago a través de axios, así que importo la librería:
            import axios from 'axios';
        [2] Creo una función useEffect
        [3] Dentro declaro una variable endPoint a la cual le doy como valor el URL del enpoint que me da la API:
            useEffect(() => {
                const endPoint = 'https://api.themoviedb.org/3/search/movie?api_key=6b6d4a8dd81647dcfeeb993329bfb039&language=es-ES&page=1&include_adult=false&query='
            }, [])
            [*] Tengo que asignarle valor a [&query=]; esta tiene que tener como valor la keyword de la búsqueda, así que simplemente tengo que pasarla como parámetro (ya la había capturado en una constante) y cambiar '' x ``:
                `&query=${keyword}`
        [4] Llamo a la librería axios para pasarle el endpoint y pedir la respuesta:
            axios.get(endPoint)    
            .then(response => {
                const resultArray = response.data;
                console.log(resultArray)
            })
            .catch(error => {
                swAlert(<h2>Hubo errores.<br/> Intenta más tarde</h2>);
            })
            [*] De la respuesta del endpoint lo que me interesa es .results; lo agrego:
                const resultArray = response.data.results;
            [*] Reemplazo el console.log() x setMoviesResult(resultArray);

**MANEJO DE LA INFORMACIÓN**
Reutilizo todo el <div "row"/> del comonente Listado.js
    [*] Puedo cambiar algunas cosas de Bootstrap; por ej, la cantidad de columnas para que no se vea igual a Listado
    *Manejo de errores*: si escribiera algo que no me devuelve ningún resultado, puedo hacer una alerta. Para esto uso un IF:
        

