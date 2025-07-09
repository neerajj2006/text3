document.addEventListener('DOMContentLoaded', () => {
    const eventSlidesData = [
        { src: 'events/event (16).jpg', description: 'BLS' },
        { src: 'events/event (1).png', description: 'RISE' },
        { src: 'events/event (2).png', description: 'GFX Workshop' },
        { src: 'events/event (3).png', description: 'GPT 101' },
        { src: 'events/event (4).png', description: 'Empower Her' },
        { src: 'events/event (5).png', description: 'CommConnect' },
        { src: 'events/event (6).png', description: 'Valorant Scrims' }
    ];

    const eventCarouselTrack = document.querySelector('#events .carousel-track');

    const createSlide = ({ src, description }) => {
        const slideElement = document.createElement('div');
        slideElement.className = 'slide';

        const imgElement = document.createElement('img');
        imgElement.src = src;
        imgElement.alt = description;

        const overlayElement = document.createElement('div');
        overlayElement.className = 'overlay';
        overlayElement.textContent = description;

        slideElement.append(imgElement, overlayElement);

        return slideElement;
    };

    const populateCarouselTrack = (slides, carouselTrack) => {
        const fragment = document.createDocumentFragment();
        slides.forEach(slide => fragment.appendChild(createSlide(slide)));

        // Duplicate slides to create a seamless loop effect
        slides.forEach(slide => fragment.appendChild(createSlide(slide)));

        carouselTrack.appendChild(fragment);

        const slideWidth = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--slide-width'));
        const gapWidth = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--gap-width'));
        const totalWidth = (slideWidth + gapWidth) * slides.length;
        const duplicatedTotalWidth = totalWidth * 2;
        const halfTotalWidth = duplicatedTotalWidth / 2;

        carouselTrack.style.setProperty('--total-width', `${halfTotalWidth}px`);

        const baseDuration = 40; // change this to change the speed... of events carousal
        const baseWidth = 5000; // px | default = 5000
        const scrollDuration = (halfTotalWidth / baseWidth) * baseDuration;

        carouselTrack.style.setProperty('--scroll-duration', `${scrollDuration}s`);
    };

    populateCarouselTrack(eventSlidesData, eventCarouselTrack);
});


document.addEventListener('DOMContentLoaded', () => {
    const gallerySlidesData = [
        { src: 'gallery/gallery (1).jpg', description: 'Gallery Image 1' },
        { src: 'gallery/gallery (2).jpg', description: 'Gallery Image 2' },
        { src: 'gallery/gallery (3).jpg', description: 'Gallery Image 3' },
        { src: 'gallery/gallery (4).jpg', description: 'Gallery Image 4' },
        { src: 'gallery/gallery (5).jpg', description: 'Gallery Image 5' },
        { src: 'gallery/gallery (6).jpg', description: 'Gallery Image 6' },
        { src: 'gallery/gallery (7).jpg', description: 'Gallery Image 7' },
        { src: 'gallery/gallery (8).jpg', description: 'Gallery Image 8' },
        { src: 'gallery/gallery (9).jpg', description: 'Gallery Image 9' },
        { src: 'gallery/gallery (10).jpg', description: 'Gallery Image 10' }
    ];

    const galleryCarouselTrack = document.querySelector('#gallery .carousel-track');

    const createSlide = ({ src, description }) => {
        const slideElement = document.createElement('div');
        slideElement.className = 'slide';

        const imgElement = document.createElement('img');
        imgElement.src = src;
        imgElement.alt = description;

        const overlayElement = document.createElement('div');
        overlayElement.className = 'overlay';
        overlayElement.textContent = description;

        slideElement.append(imgElement, overlayElement);

        return slideElement;
    };

    const populateCarouselTrack = (slides, carouselTrack) => {
        const fragment = document.createDocumentFragment();
        slides.forEach(slide => fragment.appendChild(createSlide(slide)));

        // Duplicate slides to create a seamless loop effect
        slides.forEach(slide => fragment.appendChild(createSlide(slide)));

        carouselTrack.appendChild(fragment);

        const slideWidth = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--slide-width'));
        const gapWidth = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--gap-width'));
        const totalWidth = (slideWidth + gapWidth) * slides.length;
        const duplicatedTotalWidth = totalWidth * 2;
        const halfTotalWidth = duplicatedTotalWidth / 2;

        carouselTrack.style.setProperty('--total-width', `${halfTotalWidth}px`);

        const baseDuration = 50; // change this to change the speed... of gallery carousal
        const baseWidth = 5000; // px | default = 5000
        const scrollDuration = (halfTotalWidth / baseWidth) * baseDuration;

        carouselTrack.style.setProperty('--scroll-duration', `${scrollDuration}s`);
    };

    populateCarouselTrack(gallerySlidesData, galleryCarouselTrack);
});

// Lightbox Functionality
function openLightbox(src) {
    document.getElementById("lightbox").style.display = "block";
    document.getElementById("lightbox-img").src = src;
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

// Optional: Auto-shift Carousel (Uncomment to enable)
/*
let autoShiftInterval;

function startAutoShift() {
    autoShiftInterval = setInterval(() => {
        shiftEvent(1); // Shift events
        shiftGallery(1); // Shift gallery
    }, 5000); // Shift every 5 seconds
}

function stopAutoShift() {
    clearInterval(autoShiftInterval);
}

// Start auto-shift on page load
document.addEventListener('DOMContentLoaded', () => {
    startAutoShift();
});

// Pause auto-shift on hover
document.querySelector('.event-carousel').addEventListener('mouseenter', stopAutoShift);
document.querySelector('.event-carousel').addEventListener('mouseleave', startAutoShift);

document.querySelector('.gallery-carousel').addEventListener('mouseenter', stopAutoShift);
document.querySelector('.gallery-carousel').addEventListener('mouseleave', startAutoShift);
*/
