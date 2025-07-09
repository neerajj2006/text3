// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-storage.js";

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAUH28vPcHUUh3QTtxTcD5pwwfygxDeAbc",
    authDomain: "ieee-sb-mcet.firebaseapp.com",
    projectId: "ieee-sb-mcet",
    storageBucket: "ieee-sb-mcet.firebasestorage.app",
    messagingSenderId: "766819770725",
    appId: "1:766819770725:web:c982dda76628d22042c18c",
    measurementId: "G-80QRYYPB1B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

// Function to upload an image to Firebase Storage
function uploadImage(file, destination) {
    const storageRef = ref(storage, `${destination}/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
        "state_changed",
        (snapshot) => {
            // Progress monitoring (optional)
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log(`Upload is ${progress}% done`);
        },
        (error) => {
            // Handle errors
            console.error("Error uploading file:", error);
            alert("Error uploading image.");
        },
        () => {
            // Upload completed successfully
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                console.log("File available at", downloadURL);
                alert("Image uploaded successfully!");
            });
        }
    );
}

// Event listener for the upload form in the dashboard
document.addEventListener("DOMContentLoaded", () => {
    const uploadForm = document.getElementById("uploadForm");
    if (uploadForm) {
        uploadForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const fileInput = document.getElementById("imageUpload");
            const destination = document.querySelector('input[name="destination"]:checked').value;

            if (fileInput.files.length > 0) {
                const file = fileInput.files[0];
                uploadImage(file, destination);
            } else {
                alert("Please select an image to upload.");
            }
        });
    }
});