const accordionBtn = document.querySelectorAll(".accordion_btn");
const accordionItem = document.querySelectorAll(".accordion_item");

accordionBtn.forEach((button) => {
    button.addEventListener("click", () => {
        const parent = button.parentNode;

        if (parent.classList.contains("active")) {
            parent.classList.remove("active");
        } else {
            accordionItem.forEach((item) => {
                item.classList.remove("active");
            });
            parent.classList.add("active");
        }
    });
});
