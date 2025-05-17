let allElements = document.querySelectorAll("*");  //get all HTML tags 


allElements.forEach(tag => {
    tag.addEventListener("mouseover", e => {
        const fontStyle = window.getComputedStyle(e.target, null).getPropertyValue("font-family"); 
        const clientY = e.clientY;
        const clientX = e.clientX;
        const fontDisplay = document.createElement("div");
        fontDisplay.id = "font-display"
        fontDisplay.textContent = fontStyle;
        fontDisplay.className = "get_font";
        document.body.appendChild(fontDisplay);
        fontDisplay.style.top = (clientY + 20) + "px";
        fontDisplay.style.left = (clientX + 20) + "px";
        e.stopPropagation(); // only parent - only child elements
    })
    tag.addEventListener("mouseout", () => {
        const showFont = document.getElementById("font-display");
        if (showFont) {
            showFont.remove();
        }
    })
})