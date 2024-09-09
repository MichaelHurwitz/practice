const title = document.getElementById('h1');

// שינוי טקסט בכותרת עם מעבר עכבר
title.addEventListener('mouseover', () => {
    title.innerText = 'In Mouse';
});

title.addEventListener('mouseout', () => {
    title.innerText = 'Out Mouse';
});

// שינוי צבע כותרת בלחיצה
title.addEventListener('click', () => {
    title.style.color = 'white';
    title.style.backgroundColor = getRandomColor();
    title.style.textDecoration = 'underline';
});

// שינוי צבע הקופסה בלחיצה
const colorBox = document.getElementById('color-change-btn');
const box = document.getElementById('box');

colorBox.addEventListener('click', () => {
    box.style.backgroundColor = getRandomColor();
});

// פונקציה לקבלת צבע רנדומלי
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// כפתור להעלים ולהחזיר את הקופסה
const toggleBtn = document.getElementById('toggle-btn');
toggleBtn.addEventListener('click', () => {
    if (box.style.display === 'none') {
        box.style.display = 'block';
    } else {
        box.style.display = 'none';
    }
});

// שינוי צבע הקופסה לפי בחירת צבע
const applyColorBtn = document.getElementById('apply-color');
const colorSelect = document.getElementById('color-select');

applyColorBtn.addEventListener('click', () => {
    const selectedColor = colorSelect.value;
    box.style.backgroundColor = selectedColor;
});

// הוספת צבע חדש לרשימת הצבעים
const addColorBtn = document.getElementById('add-color-btn');
const newColorInput = document.getElementById('new-color');

addColorBtn.addEventListener('click', () => {
    const newColor = newColorInput.value.trim();
    if (newColor) {
        const newOption = document.createElement('option');
        newOption.value = newColor;
        newOption.text = newColor;
        colorSelect.add(newOption);
        newColorInput.value = ''; 
    }
});

// שינוי מיקום הטקסט בתוך הקופסה
const textElement = document.getElementById('text');

// מיקום בפינה שמאלית עליונה
document.getElementById('top-left-btn').addEventListener('click', () => {
    textElement.style.top = '0';
    textElement.style.left = '0';
    textElement.style.right = 'auto';
    textElement.style.bottom = 'auto';
});

// מיקום במרכז הצלע העליונה
document.getElementById('top-center-btn').addEventListener('click', () => {
    textElement.style.top = '0';
    textElement.style.left = '50%';
    textElement.style.transform = 'translateX(-50%)';
    textElement.style.right = 'auto';
    textElement.style.bottom = 'auto';
});

// מיקום בפינה ימנית עליונה
document.getElementById('top-right-btn').addEventListener('click', () => {
    textElement.style.top = '0';
    textElement.style.right = '0';
    textElement.style.left = 'auto';
    textElement.style.bottom = 'auto';
});

// מיקום במרכז הצלע השמאלית
document.getElementById('center-left-btn').addEventListener('click', () => {
    textElement.style.top = '50%';
    textElement.style.left = '0';
    textElement.style.transform = 'translateY(-50%)';
    textElement.style.right = 'auto';
    textElement.style.bottom = 'auto';
});

// מיקום במרכז הדיב
document.getElementById('center-btn').addEventListener('click', () => {
    textElement.style.top = '50%';
    textElement.style.left = '50%';
    textElement.style.transform = 'translate(-50%, -50%)';
    textElement.style.right = 'auto';
    textElement.style.bottom = 'auto';
});

// מיקום במרכז הצלע הימנית
document.getElementById('center-right-btn').addEventListener('click', () => {
    textElement.style.top = '50%';
    textElement.style.right = '0';
    textElement.style.transform = 'translateY(-50%)';
    textElement.style.left = 'auto';
    textElement.style.bottom = 'auto';
});

// מיקום בפינה שמאלית תחתונה
document.getElementById('bottom-left-btn').addEventListener('click', () => {
    textElement.style.bottom = '0';
    textElement.style.left = '0';
    textElement.style.right = 'auto';
    textElement.style.top = 'auto';
});

// מיקום במרכז הצלע התחתונה
document.getElementById('bottom-center-btn').addEventListener('click', () => {
    textElement.style.bottom = '0';
    textElement.style.left = '50%';
    textElement.style.transform = 'translateX(-50%)';
    textElement.style.right = 'auto';
    textElement.style.top = 'auto';
});

// מיקום בפינה ימנית תחתונה
document.getElementById('bottom-right-btn').addEventListener('click', () => {
    textElement.style.bottom = '0';
    textElement.style.right = '0';
    textElement.style.left = 'auto';
    textElement.style.top = 'auto';
});
