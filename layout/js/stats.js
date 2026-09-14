// Страница «Статистика»: считает реальные цифры из хранилища сообщений
// (то же хранилище, что и на странице «Сообщения»). Пока сообщений нет —
// показывает нули и пустое состояние, а не выдуманные цифры.

document.addEventListener('DOMContentLoaded', function () {
  const messages = getMessages();

  const sent = messages.filter(function (m) { return m.type === 'out'; }).length;
  const received = messages.filter(function (m) { return m.type === 'in'; }).length;
  const total = messages.length;

  document.getElementById('stat-total').textContent = total;
  document.getElementById('stat-sent').textContent = sent;
  document.getElementById('stat-received').textContent = received;

  renderActivityTable(messages);
});

function renderActivityTable(messages) {
  const body = document.getElementById('activity-body');
  const emptyState = document.getElementById('activity-empty');
  const table = document.getElementById('activity-table');

  body.innerHTML = '';

  if (messages.length === 0) {
    table.style.display = 'none';
    emptyState.style.display = 'block';
    return;
  }

  table.style.display = '';
  emptyState.style.display = 'none';

  const byDate = {};
  messages.forEach(function (m) {
    if (!byDate[m.date]) {
      byDate[m.date] = { out: 0, in: 0 };
    }
    byDate[m.date][m.type] += 1;
  });

  Object.keys(byDate).sort(function (a, b) {
    return a.localeCompare(b);
  }).forEach(function (date) {
    const row = byDate[date];
    const tr = document.createElement('tr');
    tr.innerHTML =
      '<td>' + date + '</td>' +
      '<td class="mono">' + row.out + '</td>' +
      '<td class="mono">' + row.in + '</td>' +
      '<td class="mono">' + (row.out + row.in) + '</td>';
    body.appendChild(tr);
  });
}
