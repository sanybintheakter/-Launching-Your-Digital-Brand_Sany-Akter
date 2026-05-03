// Portfolio interactions

document.addEventListener("DOMContentLoaded", function () {
  console.log("Portfolio loaded");

  const projects = document.querySelectorAll(".project");

  projects.forEach((project) => {
    project.addEventListener("mouseover", () => {
      project.style.transform = "scale(1.03)";
      project.style.transition = "0.3s ease";
    });

    project.addEventListener("mouseout", () => {
      project.style.transform = "scale(1)";
    });
  });
});