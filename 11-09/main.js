import { cardsData } from './data.js';

// Check if users exist in Local Storage, otherwise set default users
if (!localStorage.getItem("users")) {
    const users = [
      { email: "user1@example.com", password: "password1" },
      { email: "user2@example.com", password: "password2" }
    ];
    localStorage.setItem("users", JSON.stringify(users));
}

// DOM elements
const loginSection = document.getElementById("login-section");
const signupSection = document.getElementById("signup-section");
const loginForm = document.getElementById("login-form");
const signupForm = document.getElementById("signup-form");
const modal = document.getElementById("modal");
const modalMessage = document.getElementById("modal-message");
const closeModal = document.querySelector(".close-modal");
const themeToggleBtn = document.getElementById("theme-toggle-btn");
const logoutBtn = document.getElementById("logout-btn");
const navbar = document.getElementById("navbar");
const cardsContainer = document.querySelector('.cards');

// Check if user is logged in
if (localStorage.getItem("isLoggedIn") === "true") {
  showHomePage();
}

// Handle login form submission
loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const users = JSON.parse(localStorage.getItem("users"));
    const user = users.find(u => u.email === email && u.password === password);
    
    if (user) {
        localStorage.setItem("isLoggedIn", "true");
        showHomePage();
    } else {
        showModal("Incorrect email or password!");
    }
});

// Handle sign up form submission
signupForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("signup-email").value;
    const password = document.getElementById("signup-password").value;

    const users = JSON.parse(localStorage.getItem("users"));
    const userExists = users.some(u => u.email === email);

    if (userExists) {
        showModal("Email already registered! <a href='#' id='go-back-login'>Go back to login</a>");
        document.getElementById('go-back-login').addEventListener('click', goToLogin);
    } else {
        users.push({ email, password });
        localStorage.setItem("users", JSON.stringify(users));
        showModal("Registration successful! You can now log in.");
        setTimeout(() => {
            goToLogin(); 
        }, 3000);
    }
});

// Show modal with custom message
function showModal(message) {
    modalMessage.innerHTML = message;  
    modal.classList.remove("hidden");
    setTimeout(() => {
        modal.classList.add("hidden");
    }, 5000);
}

closeModal.addEventListener("click", () => {
    modal.classList.add("hidden");
});

// Show home page
function showHomePage() {
    loginSection.style.display = "none";
    signupSection.style.display = "none";
    navbar.classList.remove("hidden");
    renderCards();
}

// Theme toggle
themeToggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const theme = document.body.classList.contains("dark-mode") ? "dark" : "light";
    localStorage.setItem("theme", theme);
    themeToggleBtn.textContent = theme === "dark" ? "Light Mode" : "Dark Mode";
});

// Apply theme based on Local Storage
function applyTheme() {
    const theme = localStorage.getItem("theme") || "light";
    if (theme === "dark") {
        document.body.classList.add("dark-mode");
        themeToggleBtn.textContent = "Light Mode";
    } else {
        document.body.classList.remove("dark-mode");
        themeToggleBtn.textContent = "Dark Mode";
    }
}

// Render cards
function renderCards() {
    cardsContainer.innerHTML = '';
    cardsData.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');

        const cardTitle = document.createElement('h2');
        cardTitle.classList.add('card-title');
        cardTitle.textContent = card.title;

        const cardImage = document.createElement('img');
        cardImage.classList.add('card-image');
        cardImage.src = card.image;
        cardImage.alt = card.title;

        const cardDescription = document.createElement('p');
        cardDescription.classList.add('card-description');
        cardDescription.textContent = card.description;

        cardElement.appendChild(cardTitle);
        cardElement.appendChild(cardImage);
        cardElement.appendChild(cardDescription);
        cardsContainer.appendChild(cardElement);
    });
}

// Navigation between login and sign up
document.getElementById("go-to-signup").addEventListener("click", () => {
    loginSection.classList.add("hidden");
    signupSection.classList.remove("hidden");
});

document.getElementById("go-to-login").addEventListener("click", () => {
    goToLogin();
});

function goToLogin() {
    signupSection.classList.add("hidden");
    loginSection.classList.remove("hidden");
}

// Logout
logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("theme");
    location.reload(); 
});
