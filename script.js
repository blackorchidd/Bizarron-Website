const toggles = document.querySelectorAll(".toggle")

toggles.forEach(btn => {
    btn.addEventListener("click", ()=> {
        const content = btn.nextElementSibling;
        content.classList.toggle("open")
    });
});
