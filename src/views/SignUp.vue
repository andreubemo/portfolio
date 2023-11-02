<script setup>
import { ref } from "vue";
import firebase from "firebase/compat/app";
import "firebase/compat/database";

// Configura la conexión a la base de datos de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyD_TZlM1DbrqLKmeUGyTwokOPPLAtSvou8",
  authDomain: "andreubemo1984.firebaseapp.com",
  databaseURL:
    "https://andreubemo1984-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "andreubemo1984",
  storageBucket: "andreubemo1984.appspot.com",
  messagingSenderId: "536929472325",
  appId: "1:536929472325:web:91f0df1f364be12923782c",
  measurementId: "G-FXNMJZ34WJ",
};

firebase.initializeApp(firebaseConfig);

// Crea una referencia a la base de datos de Firebase
const database = firebase.database();

// Crea una referencia al nodo "submissions" en la base de datos
const submissionsRef = database.ref("submissions");

// Controla la visibilidad del formulario
const showForm = ref(true);

// Variables reactivas para capturar la información del formulario
const name = ref("");
const company = ref("");
const email = ref("");
const comentario = ref("");
const acepto = ref(false);

// Valida que el campo email sea una dirección correcta
function isValidEmail(email) {
  const emailRegex = /\S+@\S+\.\S+/;
  return emailRegex.test(email);
}

// Función para enviar los datos del formulario a la base de datos
function submitForm() {
  if (
    name.value.length > 2 &&
    company.value.length > 4 &&
    isValidEmail(email.value) &&
    acepto.value
  ) {
    // Guarda los datos del formulario en la base de datos de Firebase
    const newSubmission = {
      name: name.value,
      company: company.value,
      email: email.value,
      comentario: comentario.value,
      acepto: acepto.value,
    };
    submissionsRef.push(newSubmission);
    // Limpia los campos del formulario
    name.value = "";
    company.value = "";
    email.value = "";
    comentario.value = "";
    acepto.value = false;
  } else {
    alert(
      "Debes rellenar correctamente el formulario para poder ver el contenido del portfolio"
    );
  }
}
</script>

<template>
  <div class="general">
    <div class="titulo">
      <h1>contacto</h1>
      <p>andreu benítez</p>
      <span>600363140</span>
      <span>andreu.bemo@gmail.com</span>
      <ul class="rrss">
        <li>
          <a href="https://www.linkedin.com/in/andreu-bemo/" target="_blank"
            ><img src="@/assets/img/linkedin.png" alt="linkedin"
          /></a>
        </li>
        <li>
          <a
            href="https://github.com/andreubemo/portfolio/tree/master"
            target="_blank"
            ><img src="@/assets/img/github.png" alt="github"
          /></a>
        </li>
        <li>
          <a
            href="https://open.spotify.com/user/andreubenitez?si=e2d9a3c3a9344668"
            target="_blank"
            ><img src="@/assets/img/spotify.png" alt="spotify"
          /></a>
        </li>
      </ul>
    </div>
    <form class="form">
      <label for="name">nombre</label>
      <input
        id="name"
        v-model="name"
        type="text"
        required
        placeholder="+ 3 caracteres (requerido)"
      />

      <label for="email">e-mail</label>
      <input
        id="email"
        v-model="email"
        type="email"
        required
        placeholder="e-mail válido (requerido)"
      />
      <label for="comentario">Dime cosas</label>
      <input
        id="comentario"
        v-model="comentario"
        type="text"
        placeholder="Dime si tienes alguna duda"
      />
      <div class="acepto">
        <input id="acepto" v-model="acepto" type="checkbox" required />
        <label for="acepto" class="acepto"
          >Acepto los términos y condiciones</label
        >
      </div>
    </form>
    <div class="btn">
      <button type="submit" @click.prevent="submitForm">enviar</button>
    </div>
    <span class="legal">
      Los datos suministrados en el presente formulario serán empleados
      exclusivamente con la finalidad de realizar un análisis del feedback
      proveniente de las empresas potencialmente afines a mi perfil profesional.
      Es importante destacar que no actúo como empresa y que sus datos
      personales no serán empleados para ningún otro propósito. Al enviar este
      formulario, usted consiente la recopilación y utilización de sus datos
      personales con el fin mencionado previamente.
    </span>
  </div>
</template>

<style scoped>
.general {
  width: 100%;
  height: 100%;
  padding: 100px 23px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.titulo {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex;
  align-items: flex-start;
  gap: 15px;
}

.titulo p {
  width: 100%;
  font-weight: 575;
  background: #fff100;
  padding-top: 15px;
}

.titulo span {
  width: 100%;
  padding: 0px 0px 0px;
  color: #403833;
  letter-spacing: 0.06rem;
}

.rrss {
  width: 100%;
  padding: 7px 0px 30px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 30px;
  list-style: none;
}

.rrss li {
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
  color: #403833;
  font-size: 15px;
}

.form {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
}

label {
  width: 200px;
  background: #fff100;
  color: #403833;
  margin: 0px;
  padding: 15px 0px 0px;
}
.btn {
  width: 100%;
  padding: 15px 0px;
  display: flex;
  justify-content: flex-end;
}
button {
  width: 200px;
  padding-top: 15px;
  margin: 30px 0px;
  background: #fff100;
  display: flex;
  justify-content: flex-start;
  transition: 3ms ease-out;
}
.acepto {
  width: 100%;
  background: #fff100;
  padding: 9px 15px;
  font-size: 15px;
  letter-spacing: 0.04rem;
  line-height: 1.04rem;
  font-weight: 400;
  height: 62px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  color: #403833;
  border: 0px;
}

input {
  height: 50px;
  background: #fff;
  border: 0px solid transparent;
  width: 100%;
  margin-bottom: 17px;
  padding: 15px;
}

input::placeholder {
  font-size: 0.9rem;
  color: #bfbdba;
  border-bottom: 1px solid #bfbdba;
}

input,
focus {
  font-size: 1rem;
  letter-spacing: 0.04rem;
  line-height: 1.04rem;
  font-weight: 400;
  padding: 0px 10px;
  outline: none;
}

/* Estilo base para el input de tipo checkbox */
input[type="checkbox"] {
  height: 20px;
  width: 20px;
  background-color: #fff;
  margin: 9px 9px 9px 15px;
}
.legal {
  padding: 0px 0px 125px;
  color: #403833;
  font-size: 0.7rem;
}
/* Estilo para cuando el input está seleccionado */
input[type="checkbox"]:checked {
  border: 1px solid #403833;
}

@media only screen and (max-width: 768px) {
  .general {
    min-width: 350px;
    max-width: 600px;
    padding: 100px 23px 0px;
    margin: auto;
  }
}

@media only screen and (min-width: 768px) {
  .general {
    max-width: 600px;
    padding: 100px 23px 0px;
    margin: auto;
  }
}
</style>
