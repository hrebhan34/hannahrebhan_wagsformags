function showSection(sectionId) {
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.scrollIntoView({ behavior: 'smooth' });
    }
}

function openModal(modalId) {
    document.getElementById(modalId).style.display = 'flex';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Close modal when clicking outside the modal content
window.onclick = function(event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
}

// Form submission handler
function submitForm(event) {
    event.preventDefault();
    const formData = new FormData(document.getElementById('joinForm'));
    const data = {
        name: formData.get('name'),
        year: formData.get('year'),
        involvement: formData.get('involvement'),
        living: formData.get('living')
    };
    console.log("Form Submitted:", data);
    alert("Thank you for joining!");
    closeModal('join-form-modal');
    document.getElementById('joinForm').reset();
}

function openVolunteerForm() {
    document.getElementById('volunteerFormModal').style.display = 'flex';
}


// Scroll to the Donations Section
function scrollToDonations() {
    showSection('donations');
}

// Open the Events Modal
function openEventsModal() {
    openModal('eventsModal');
}

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
}

