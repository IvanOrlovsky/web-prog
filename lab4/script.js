$(document).ready(function () {
	// Функция переключения меню
	$("#toggleMenuBtn").on("click", function () {
		var menu = $("#mainMenu");
		menu.toggle();

		var btnText = $(this).text();
		$(this).text(
			btnText === "Открыть меню" ? "Закрыть меню" : "Открыть меню"
		);
	});

	// Функция загрузки изображений с Unsplash API
	function loadImages() {
		const unsplashAPI =
			"https://api.unsplash.com/photos/random/?client_id=CBtMIrjxvaJarv1h9Di_9oLWCmGktJjZ05DYOf-4IYc&count=5";

		$.ajax({
			url: unsplashAPI,
			method: "GET",
			success: function (images) {
				images.forEach(function (image) {
					var img = $("<img>")
						.attr({
							src: image.urls.thumb,
							alt: image.alt_description,
						})
						.on("click", function () {
							showImage(image.urls.full);
						});
					$("#gallery").append(img);
				});
			},
			error: function (error) {
				console.error("Ошибка при загрузке изображений:", error);
			},
		});
	}

	// Функция показа модального окна
	function showImage(src) {
		$("#modalImage").attr("src", src);
		$("#modal").show();
	}

	// Функция закрытия модального окна
	$("#modal span").on("click", function () {
		$("#modal").hide();
	});

	// Функция валидации контактной формы
	$("#contactForm").on("submit", function (e) {
		e.preventDefault();
		var name = $("#name").val().trim();
		var email = $("#email").val().trim();
		var message = $("#message").val().trim();

		if (name === "" || message === "") {
			alert("Пожалуйста, заполните все поля.");
			return false;
		}

		if (!email.includes("@")) {
			alert("Введите корректный email.");
			return false;
		}

		alert("Ваше сообщение отправлено!");
		return true;
	});

	// Вызов функции загрузки изображений при загрузке страницы
	loadImages();
});
