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

>>
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



