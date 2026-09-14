<?php

/** @var \yii\web\View $this */

$this->title = 'Сообщения';
$this->registerJsFile('@web/js/messages.js', ['position' => \yii\web\View::POS_END]);
?>

<header class="topbar">
    <div>
        <h1 class="topbar__title">Сообщения</h1>
        <p class="topbar__hint">Отправляйте новые сообщения и следите за входящими</p>
    </div>
</header>

<main class="content">
    <div class="messages-layout">

        <section class="panel compose">
            <h2 class="panel__title" style="margin-bottom: 16px;">Новое сообщение</h2>

            <form id="compose-form">
                <div class="field">
                    <label class="field__label" for="recipient">Получатель</label>
                    <input class="field__control" type="text" id="recipient" name="recipient" placeholder="Имя или номер" required>
                </div>

                <div class="field">
                    <label class="field__label" for="message-text">Текст сообщения</label>
                    <textarea class="field__control" id="message-text" name="message-text" rows="5" placeholder="Введите сообщение…" required></textarea>
                </div>

                <button class="btn btn--primary compose__submit" type="submit">Отправить сообщение</button>
            </form>
        </section>

        <section class="panel feed">
            <div class="panel__header">
                <h2 class="panel__title">Лента</h2>
                <span class="panel__meta" id="feed-meta">0 записей</span>
            </div>

            <ul class="feed__list" id="feed-list"></ul>

            <p class="feed__empty" id="feed-empty" style="display: none;">
                Пока нет ни одного сообщения. Отправьте первое или дождитесь входящего.
            </p>
        </section>

    </div>
</main>
