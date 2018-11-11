const controls = document.querySelectorAll("input");
controls.forEach(input => input.addEventListener("change", handleChange));
controls.forEach(input => input.addEventListener("mousemove", handleChange));


function handleChange(){
    const suffix = this.dataset.sizing || '';
    console.log(this.value);
    document.documentElement.style.setProperty(`--${this.name}`, this.value+suffix);
}