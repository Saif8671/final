// Change theme dynamically
function setDarkMode() {
    document.documentElement.style.setProperty('--background-color', '#0E1117');
    document.documentElement.style.setProperty('--text-color', 'white');
    document.documentElement.style.setProperty('--chat-bg-color', '#1E1E1E');
    document.documentElement.style.setProperty('--chat-text-color', 'white');
}

function setLightMode() {
    document.documentElement.style.setProperty('--background-color', '#FFFFFF');
    document.documentElement.style.setProperty('--text-color', '#000000');
    document.documentElement.style.setProperty('--chat-bg-color', '#F9F9F9');
    document.documentElement.style.setProperty('--chat-text-color', '#000000');
}
