// Общий слой хранения сообщений.
// Пока нет бэкенда — данные лежат в localStorage браузера.
// При переносе в Yii2 эти функции заменяются на реальные запросы к API/БД,
// а формат объекта { type, contact, text, time, date } — на модель Message.

const STORAGE_KEY = 'cabinet_messages';

function getMessages() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

function saveMessages(messages) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
}

function addMessage(message) {
  const messages = getMessages();
  messages.push(message);
  saveMessages(messages);
  return messages;
}

// Первый заход — лента пуста, кроме пары примеров входящих сообщений,
// чтобы было видно, как выглядит входящее. Реальные данные появятся,
// как только что-то отправят или подключат приём входящих.
function seedIfEmpty() {
  const messages = getMessages();
  if (messages.length > 0) {
    return messages;
  }

  const seed = [
    {
      type: 'in',
      contact: 'Мария Кузнецова',
      text: 'Добрый день! Подскажите, пожалуйста, актуальный статус моей заявки.',
      time: nowTime(),
      date: today()
    },
    {
      type: 'in',
      contact: 'Игорь Соколов',
      text: 'Спасибо, вопрос решён.',
      time: nowTime(),
      date: today()
    }
  ];

  saveMessages(seed);
  return seed;
}

function nowTime() {
  return new Date().toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' });
}

function today() {
  return new Date().toLocaleDateString('ru-RU');
}

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}
