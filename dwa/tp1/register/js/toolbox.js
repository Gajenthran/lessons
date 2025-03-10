function returnFileSize(number) {
    if(number < 1024) {
        return number + " octets";
    } else if(number >= 1024 && number < 1048576) {
        return (number/1024).toFixed(1) + " Ko";
    } else if(number >= 1048576) {
        return (number/1048576).toFixed(1) + " Mo";
    }
}

function newElement(nameElement, parent, x, y, w, h, attributs, styles) {
    var el = document.createElement(nameElement);
    if((x || y) == null) {
        el.style.position = "absolute";
        el.style.left = x + "px";
        el.style.top = y + "px";
        el.style.width = w + "px";
        el.style.height = h + "px";
    }
    for(var property in styles) el.style[property] = styles[property];
    for(var a in attributs) el.setAttribute(a, attributs[a]);
    parent.appendChild(el);

    return el;
}

function on(element, ev, funct) {
	element.addEventListener(ev, funct);
}