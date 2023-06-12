<script setup>
import { ref } from 'vue'
import firebase from 'firebase/compat/app'
import 'firebase/compat/database'

// Configura la conexión a la base de datos de Firebase
const firebaseConfig = {
    apiKey: "AIzaSyD_TZlM1DbrqLKmeUGyTwokOPPLAtSvou8",
    authDomain: "andreubemo1984.firebaseapp.com",
    databaseURL: "https://andreubemo1984-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "andreubemo1984",
    storageBucket: "andreubemo1984.appspot.com",
    messagingSenderId: "536929472325",
    appId: "1:536929472325:web:91f0df1f364be12923782c",
    measurementId: "G-FXNMJZ34WJ"
}

firebase.initializeApp(firebaseConfig)

// Crea una referencia a la base de datos de Firebase
const database = firebase.database()

// Crea una referencia al nodo "submissions" en la base de datos
const submissionsRef = database.ref('submissions')

// Controla la visibilidad del formulario
const showForm = ref(true)

// Variables reactivas para capturar la información del formulario
const name = ref('')
const company = ref('')
const email = ref('')
const comentario = ref('')
const acepto = ref(false)

// Valida que el campo email sea una dirección correcta
function isValidEmail(email) {
    const emailRegex = /\S+@\S+\.\S+/
    return emailRegex.test(email)
}

// Función para enviar los datos del formulario a la base de datos
function submitForm() {
    if (name.value.length > 2 && company.value.length > 4 && isValidEmail(email.value) && acepto.value) {
        // Guarda los datos del formulario en la base de datos de Firebase
        const newSubmission = {
            name: name.value,
            company: company.value,
            email: email.value,
            comentario: comentario.value,
            acepto: acepto.value
        }
        submissionsRef.push(newSubmission)
        // Limpia los campos del formulario
        name.value = ''
        company.value = ''
        email.value = ''
        comentario.value = ''
        acepto.value = false
    } else {
        alert('Debes rellenar correctamente el formulario para poder ver el contenido del portfolio')
    }
}
</script>

<template>
    <div class="general">
        <div class="titulo">
            <h1>contacto</h1>
            <h3>Andreu Benítez Moreno</h3>
            <span>600363140</span>
            <span>andreu.bemo@gmail.com</span>
            <ul class="rrss">
                <li>
                    <a href="https://www.linkedin.com/in/andreu-bemo/" target="_blank"><img src="@/assets/img/linkedin.png"
                            alt="linkedin"></a>
                    <p>LinkedIn</p>
                </li>
                <li>
                    <a href="https://github.com/andreubemo/portfolio/tree/master" target="_blank"><img src="@/assets/img/github.png"
                            alt="github"></a>
                    <p>GitHub</p>
                </li>
                <li>
                    <a href="https://www.instagram.com/andreubemo_com/" target="_blank"><img
                            src="@/assets/img/instagram.png" alt="instagram"></a>
                    <p>Instagram</p>
                </li>
                <li>
                    <a href="https://open.spotify.com/user/andreubenitez?si=e2d9a3c3a9344668" target="_blank"><img
                            src="@/assets/img/spotify.png" alt="spotify"></a>
                    <p>Spotify</p>
                </li>
            </ul>
        </div>
        <h2>Puedes enviarme un mensaje</h2>
        <form class="form">
            <label for="name">Nombre:</label>
            <input id="name" v-model="name" type="text" required placeholder="+ 3 caracteres (requerido)">
            <label for="company">Empresa:</label>
            <input id="company" v-model="company" type="text" required placeholder="+ 5 caracteres (requerido)">
            <label for="email">Email:</label>
            <input id="email" v-model="email" type="email" required placeholder="email válido (requerido)">
            <label for="comentario">Dime cosas</label>
            <input id="comentario" v-model="comentario" type="text" placeholder="Dime si tienes alguna duda">
            <div class="acepto">
                <input id="acepto" v-model="acepto" type="checkbox" required>
                <label for="acepto" class="acepto">Acepto los términos y condiciones</label>
            </div>
            <button type="submit" @click.prevent="submitForm">Registrarse</button>
        </form>
        <div class="titulo">
            <p>Los datos suministrados en el presente formulario serán empleados exclusivamente con la finalidad de realizar un análisis del feedback proveniente de las empresas potencialmente afines a mi perfil profesional. Es importante destacar que no actúo como empresa y que sus datos personales no serán empleados para ningún otro propósito. Al enviar este formulario, usted consiente la recopilación y utilización de sus datos personales con el fin mencionado previamente.</p>
        </div>
    </div>
</template>

<style scoped>
.general {
    width: 100%;
    margin: 120px 0px 120px 0px;
    display: flex;
    flex-direction: column;
    place-content: top;
    place-items: center;
}

.general h2 {
    width: 526px;
    color: #737373;
    font-weight: 300;
}

.titulo {
    width: 62%;
    height: fit-content;
    padding: 29px;
    margin: 0px 0px 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
}

.titulo h1 {
    text-align: center;
    width: 100%;
    color: #262626;
    text-transform: uppercase;
}

.titulo h3 {
    text-align: center;
    width: 100%;
    color: #262626;
    text-transform: uppercase;
}

.titulo span {
    text-align: center;
    width: 100%;
    padding: 0px 0px 0px;
    color: #262626;
    letter-spacing: 0.06rem;
}

.titulo p {
    width: 526px;
    padding: 0px 0px 0px;
    color: #262626;
    font-size: 0.7rem;

}

.rrss {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    list-style: none;
    padding-inline-start: 0px;
}

.rrss li {
    width: fit-content;
    text-align: center;
}

.rrss li img {
    width: 29px;
    filter: grayscale(1);
    transition: 0.3s ease;
}

.rrss li img:hover {
    filter: none;
    transform: scale(1.3);
}

.rrss li p {
    width: 100%;
    text-align: center;
    transition: 0.3s ease;
    color: #262626;
    font-size: 15px;
}

.form {
    width: 526px;
    padding: 29px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-end;
    box-sizing: content-box;
}

.form button {
    margin-top: 28px;
    width: 38%;

}

label {
    width: 100%;
    height: 33px;
    color: #262626;
    margin: 0px;
    padding: 6px 0px;
    font-size: 1rem;
    line-height: 1rem;
    letter-spacing: 0.005rem;
    border-bottom: 2px solid #262626;
}

.acepto {
    font-family: 'Cairo';
    font-size: 15px;
    letter-spacing: 0.04rem;
    line-height: 1.04rem;
    font-weight: 400;
    height: 55px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    background: #262626;
    padding: 9px 15px;
    width: 100%;
    color: #FFFCF7;
}

input {
    font-family: 'Cairo';
    height: 38px;
    background: #FFFCF7;
    border: 0px solid transparent;
    width: 100%;
    margin-bottom: 17px;
    padding: 15px;
}

input::placeholder {
    font-size: 0.9rem;
    color: #DBD4C5;
}

input,
focus {
    font-size: 1rem;
    letter-spacing: 0.04rem;
    line-height: 1.04rem;
    font-weight: 400;
    padding: 0px 10px;
    min-height: 30px;
    outline: none;
    color: #F26241;
}

/* Estilo base para el input de tipo checkbox */
input[type="checkbox"] {
    height: 20px;
    width: 20px;
    background-color: #FFFCF7;
    border: 1px solid #262626;
    border-radius: 3px;
    margin: 9px 9px 9px 15px;
}

/* Estilo para cuando el input está seleccionado */
input[type="checkbox"]:checked {
    background-color: #F26241;
}

/* Estilo para el indicador del input */
input[type="checkbox"]::before {
    content: '';
    display: block;
    width: 8px;
    height: 14px;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
    position: relative;
    left: 6px;
    top: 5px;
}

/* Estilo para el indicador cuando el input está seleccionado */
input[type="checkbox"]:checked::before {
    border-color: #FFFCF7;
}

@media only screen and (max-width: 768px) {
    .form {
        width: 90%;
        padding: 29px;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: flex-end;
        box-sizing: content-box;
    }

    .general h2 {
        width: 90%;
        color: #737373;
        font-weight: 300;
    }

    .titulo {
        width: 100%;
    }

    .titulo p {
        width: 100%;
        padding: 0px 0px 0px;
        color: #262626;
        font-size: 0.7rem;

    }
}

@media only screen and (max-width: 425px) {
    .form {
        width: 90%;
        padding: 29px;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        box-sizing: content-box;
    }

    .general h2 {
        width: 90%;
        color: #737373;
        font-weight: 300;
    }

    .titulo {
        width: 100%px;
        height: fit-content;
        padding: 29px;
        margin: 0px 0px 0px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 15px;
    }

    .titulo p {
        width: 90%;
        padding: 0px 0px 0px;
        color: #262626;
        font-size: 0.7rem;
    }

    .rrss li img {
        width: 39px;
        transition: 0.3s ease;
    }

    .rrss li img:hover {
        filter: none;
        transform: none;
    }

    .rrss li p {
        display: none;
    }

}</style>
