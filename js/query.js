const date = new Date()

// Styles
document.querySelector("#stylecss").href = `styles/style.css?${date.getTime()}=${Math.random()}`
// js
document.querySelector("#mainjs").src = `js/main.js?${date.getTime()}=${Math.random()}`