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
firebase.initializeApp(firebaseConfig);

// Reference to Firebase Storage
const storage = firebase.storage();

// Fetch and display images from the "events" folder
document.addEventListener("DOMContentLoaded", () => {
    fetchImages("gallery-container", "events");
});

function fetchImages(containerClass, folder) {
    const galleryContainer = document.querySelector(`.${containerClass}`);
    if (!galleryContainer) return;

    const storageRef = storage.ref(folder);
    storageRef
        .listAll()
        .then((result) => {
            result.items.forEach((imageRef) => {
                imageRef.getDownloadURL().then((url) => {
                    const galleryItem = document.createElement("div");
                    galleryItem.classList.add("gallery-item");

                    const img = document.createElement("img");
                    img.src = url;
                    img.alt = "Gallery Image";
                    img.onclick = () => openLightbox(url);

                    galleryItem.appendChild(img);
                    galleryContainer.appendChild(galleryItem);
                });
            });
        })
        .catch((error) => {
            console.error("Error fetching images:", error);
        });
}

// Function to open the lightbox with the clicked image
function openLightbox(imageUrl) {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");

    if (lightbox && lightboxImg) {
        lightbox.style.display = "block";
        lightboxImg.src = imageUrl;
    }
}

// Function to close the lightbox
function closeLightbox() {
    const lightbox = document.getElementById("lightbox");
    if (lightbox) {
        lightbox.style.display = "none";
    }
}