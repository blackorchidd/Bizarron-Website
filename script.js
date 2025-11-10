document.querySelectorAll(".toggle").forEach(button => {
    button.addEventListener("click", () => {
        const fold = button.closest(".fold");
        fold.classList.toggle("open")
    });
});
