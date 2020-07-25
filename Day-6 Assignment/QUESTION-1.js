let bg_color = ["red", "yellow", "white", "orange", "blue", "green", "black"];

// console.log(Math.floor(Math.random() * b_color.length));

let setColor = () => {
    let index = Math.floor(Math.random() * bg_color.length);

    document.body.style.backgroundColor = bg_color[index];
}

setInterval(setColor, 2000); 