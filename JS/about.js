let currentSlide = 0;
const slides = document.querySelectorAll('.item');
const slideContainer = document.querySelector('.slide');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
    });
    slides[index].classList.add('active');
    slideContainer.style.transform = `translateX(-${index * (100 / totalSlides)}%)`;
    currentSlide = index;
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
}

// Auto slide every 5 seconds
setInterval(nextSlide, 5000);

// Event listeners for arrows
document.querySelector('.arrow.left').addEventListener('click', prevSlide);
document.querySelector('.arrow.right').addEventListener('click', nextSlide);

// Modal functionality
const modal = document.getElementById('modal');
const closeBtn = document.querySelector('.close');
const modalImg = document.getElementById('modal-img');
const modalTitle = document.getElementById('modal-title');
const modalDesc = document.getElementById('modal-desc');

function openModal(index) {
    const slide = slides[index];
    const bgImage = slide.style.backgroundImage;
    const imageUrl = bgImage.slice(5, -2); // Remove 'url("...")'
    modalImg.src = imageUrl;
    modalTitle.textContent = slide.querySelector('.name').textContent;
    modalDesc.textContent = slide.querySelector('.des').textContent;
    modal.style.display = 'block';
}

// Event listeners for thumbnails
document.querySelectorAll('.thumbnail').forEach((thumb, index) => {
    thumb.addEventListener('click', () => {
        showSlide(index);
        openModal(index);
    });
});

// Close modal
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close modal when clicking outside
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Modal functionality for service items
const imageModal = document.getElementById('image-modal');
const modalImg = document.getElementById('modal-image');
const closeBtn = document.querySelector('.close');

document.querySelectorAll('.service-items').forEach(item => {
    item.addEventListener('click', () => {
        const img = item.querySelector('img');
        modalImg.src = img.src;
        imageModal.style.display = 'block';
    });
});

// Close modal
closeBtn.addEventListener('click', () => {
    imageModal.style.display = 'none';
});

// Close modal when clicking outside
window.addEventListener('click', (event) => {
    if (event.target === imageModal) {
        imageModal.style.display = 'none';
    }
});