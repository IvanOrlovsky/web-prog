<?php
function findPhoneNumbers($fileOrUrl) {
    // Загружаем содержимое файла или URL
    $htmlContent = file_get_contents($fileOrUrl);
    if ($htmlContent === false) {
        return []; // Возвращаем пустой массив, если не удалось загрузить содержимое
    }

    // Регулярное выражение для поиска телефонных номеров
    $phonePattern = '/\+?\d{1,3}[-.\s]?\(?\d{1,4}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/';

    // Находим все совпадения
    preg_match_all($phonePattern, $htmlContent, $matches);

    // Возвращаем только уникальные телефонные номера
    return array_unique($matches[0]);
}

$fileOrUrl = 'example.html'; 
$phoneNumbers = findPhoneNumbers($fileOrUrl);

// Вывод найденных номеров
echo "Найденные телефонные номера:\n";
print_r($phoneNumbers);
?>
