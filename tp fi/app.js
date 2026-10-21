import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js"
import { getDatabase, ref, set, onValue, get } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js"


const firebaseConfig = {
  apiKey: "AIzaSyBptAmD9KcEgDYpUFl1mKMy4rdtAw6gJ3g",
  authDomain: "tpfb-jesusimm.firebaseapp.com",
  databaseURL: "https://tpfb-jesusimm-default-rtdb.firebaseio.com",
  projectId: "tpfb-jesusimm",
  storageBucket: "tpfb-jesusimm.firebasestorage.app",
  messagingSenderId: "88306962302",
  appId: "1:88306962302:web:456044d776ea12a3e9ed2f"
}


const app = initializeApp(firebaseConfig)
const db = getDatabase(app)


const botonagregar = document.getElementById('agregar')


botonagregar.addEventListener('click', () => {
    const id = document.getElementById('ID').value
    const titulo = document.getElementById('titulo').value
    const plataforma = document.getElementById('plataforma').value
    const genero = document.getElementById('genero').value
    const precio = document.getElementById('precio').value
    const portada = document.getElementById('portada').value
    
    if (id === "" || titulo === "" || plataforma === "" || genero === "" || precio === "" || portada === "") {
        alert("Por favor completa todos los campos antes de guardar.")
        return
    }


    const infojuego = ref(db, 'videojuegos/' + id)


    get(infojuego).then((verid) => {
        if (verid.exists()) {
            alert("El ID ingresado ya está en uso. Por favor ingresa un ID diferente.")
            return
        }