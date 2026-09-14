// Страница «Сообщения»: рендер ленты из хранилища и обработка отправки формы.
// В реальном проекте (Yii2) сохранение сообщения — это AJAX/POST к контроллеру,
// а лента — рендер по модели Message из БД.

document.addEventListener('DOMContentLoaded', function () {
  const list = document.getElementById('feed-list');
  const meta = document.getElementById('feed-meta');
  const emptyState = document.getElementById('feed-empty');
  const form = document.getElementById('compose-form');

  function render() {
    const messages = seedIfEmpty();

    list.innerHTML = '';

    if (messages.length === 0) {
      emptyState.style.display = 'block';
      list.style.display = 'none';
    } else {
      emptyState.style.display = 'none';
      list.style.display = '';
      messages.slice().reverse().forEach(function (m) {
        list.appendChild(buildFeedItem(m));
      });
    }

    meta.textContent = messages.length + ' ' + pluralizeRecords(messages.length);
  }

  function buildFeedItem(m) {
    const li = document.createElement('li');
    li.className = 'feed-item feed-item--' + m.type;
    li.innerHTML =
      '<span class="feed-item__rail"><span class="feed-item__dot"></span></span>' +
      '<div class="feed-item__body">' +
        '<div class="feed-item__top">' +
          '<span class="feed-item__contact">' + escapeHtml(m.contact) + '</span>' +
          '<span class="badge badge--' + m.type + '">' + (m.type === 'out' ? 'Отправлено' : 'Получено') + '</span>' +
          '<span class="feed-item__time mono">' + m.time + '</span>' +
        '</div>' +
        '<p class="feed-item__text">' + escapeHtml(m.text) + '</p>' +
      '</div>';
    return li;
  }

  function pluralizeRecords(n) {
    const mod10 = n % 10;
    const mod100 = n % 100;
    if (mod10 === 1 && mod100 !== 11) return 'запись';
    if ([2, 3, 4].includes(mod10) && ![12, 13, 14].includes(mod100)) return 'записи';
    return 'записей';
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const recipient = document.getElementById('recipient').value.trim();
    const text = document.getElementById('message-text').value.trim();

    if (!recipient || !text) {
      return;
    }

    addMessage({
      type: 'out',
      contact: recipient,
      text: text,
      time: nowTime(),
      date: today()
    });

    form.reset();
    render();
  });

  render();
});
