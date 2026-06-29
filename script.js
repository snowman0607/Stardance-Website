const projects = document.querySelectorAll(".project");

projects.forEach(project => {

project.addEventListener("mouseenter", () => {

project.style.boxShadow = "0 0 25px #00bfff";

});

project.addEventListener("mouseleave", () => {

project.style.boxShadow = "none";

});

});
