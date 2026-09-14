<?php

/** @var \yii\web\View $this */

$this->title = 'Статистика';
$this->registerJsFile('@web/js/stats.js', ['position' => \yii\web\View::POS_END]);
?>

<header class="topbar">
    <div>
        <h1 class="topbar__title">Статистика</h1>
        <p class="topbar__hint">Сводка по отправленным и полученным сообщениям</p>
    </div>
</header>

<main class="content">

    <section class="stat-grid">
        <div class="panel stat-card stat-card--total">
            <p class="stat-card__label">Всего сообщений</p>
            <p class="stat-card__value" id="stat-total">0</p>
        </div>

        <div class="panel stat-card stat-card--out">
            <p class="stat-card__label">Отправлено</p>
            <p class="stat-card__value" id="stat-sent">0</p>
        </div>

        <div class="panel stat-card stat-card--in">
            <p class="stat-card__label">Получено</p>
            <p class="stat-card__value" id="stat-received">0</p>
        </div>
    </section>

    <section class="panel">
        <div class="panel__header">
            <h2 class="panel__title">Активность по дням</h2>
        </div>

        <table class="activity-table" id="activity-table" style="display: none;">
            <thead>
                <tr>
                    <th>Дата</th>
                    <th>Отправлено</th>
                    <th>Получено</th>
                    <th>Итого</th>
                </tr>
            </thead>
            <tbody id="activity-body"></tbody>
        </table>

        <p class="feed__empty" id="activity-empty">
            Пока нет данных за какой-либо день. Статистика появится, как только пройдут первые сообщения.
        </p>
    </section>

</main>
