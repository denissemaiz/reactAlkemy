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