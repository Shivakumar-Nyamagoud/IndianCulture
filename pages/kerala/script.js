// script.js

// Your web app's Firebase configuration



// Initialize Firebase
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/apphttps://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getDatabase , ref, set, get, child  } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwM_b0TKzkd3sqD4V5k3k0H6antbm-9A8",
  authDomain: "indian-culture-97811.firebaseapp.com",
  databaseURL: "https://indian-culture-97811-default-rtdb.firebaseio.com",
  projectId: "indian-culture-97811",
  storageBucket: "indian-culture-97811.appspot.com",
  messagingSenderId: "136858617140",
  appId: "1:136858617140:web:3b9906d8713ad906051161"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db =getDatabase(app);
document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const journey = document.getElementById('journey').value;
    const date = document.getElementById('date').value;

    // Save data to Firebase
    database.ref('bookings').push({
        name: name,
        email: email,
        journey: journey,
        date: date
    }).then(() => {
        document.getElementById('message').innerText = 'Booking successful!';
        document.getElementById('bookingForm').reset();
    }).catch((error) => {
        document.getElementById('message').innerText = 'Error: ' + error.message;
    });
});
