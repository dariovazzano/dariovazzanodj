document.addEventListener('DOMContentLoaded', () => {
	const imgLightBox = document.querySelectorAll('.materialboxed');
	M.Materialbox.init(imgLightBox, {
		inDuration: 500,
		outDuration: 500
	});
});

// --------------NAVBAR


// const navToggle = document.querySelector(".nav-toggle");
// const navMenu = document.querySelector(".nav-menu");

// navToggle.addEventListener("click", () => {
//   navMenu.classList.toggle("nav-menu_visible");

//   if (navMenu.classList.contains("nav-menu_visible")) {
//     navToggle.setAttribute("aria-label", "Cerrar menú");
//   } else {
//     navToggle.setAttribute("aria-label", "Abrir menú");
//   }
// });
