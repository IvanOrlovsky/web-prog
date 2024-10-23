function toggleMenu() {
	var menu = document.getElementById("mainMenu");
	menu.style.display = menu.style.display === "none" ? "block" : "none";
	var btn = document.getElementById("toggleMenuBtn");
	if (btn.innerText === "Открыть меню") {
		btn.innerText = "Закрыть меню";
	} else {
		btn.innerText = "Открыть меню";
	}
}
