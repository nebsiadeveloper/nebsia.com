import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBP9mewwpv-EsYEmqh0cZWQX37hcmVIru0",
    authDomain: "nebsia-cb1f4.firebaseapp.com",
    projectId: "nebsia-cb1f4",
    storageBucket: "nebsia-cb1f4.appspot.com",
    messagingSenderId: "794829689740",
    appId: "1:794829689740:web:0dab5dbb858c0bb1513ca9",
    measurementId: "G-Y7G6PPVMPT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Add form submission handler
document.getElementById('contactForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    try {
        await addDoc(collection(db, 'contacts'), {
            name,
            email,
            message,
            timestamp: new Date()
        });
        toastr.success('Message sent successfully!');
        document.getElementById('contactForm').reset(); // Clear the form
    } catch (e) {
        console.error('Error adding document: ', e);
        toastr.error('Failed to send message. Please try again.');
    }
});
