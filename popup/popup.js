console.log("extention")

const btn = document.getElementById("replace_btn");

function replace() {
    const h1 = document.querySelector("h1");

    h1.innerHTML = "replace extention";

    console.log(h1)
}

btn.addEventListener("click" , replace)