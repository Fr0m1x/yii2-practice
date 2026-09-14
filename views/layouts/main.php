<?php

/** @var \yii\web\View $this */
/** @var string $content */

use yii\helpers\Html;
use yii\helpers\Url;

$this->registerCssFile('@web/css/cabinet.css');
$this->registerCssFile('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@500;600&display=swap');
$this->registerJsFile('@web/js/storage.js', ['position' => \yii\web\View::POS_END]);

$currentRoute = Yii::$app->controller->id . '/' . Yii::$app->controller->action->id;

$this->beginPage();
?>
<!doctype html>
<html lang="ru">
<head>
    <meta charset="<?= Yii::$app->charset ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?= Html::csrfMetaTags() ?>
    <title><?= Html::encode($this->title) ?> — Личный кабинет</title>
    <?php $this->head() ?>
</head>
<body>
<?php $this->beginBody() ?>

<div class="shell">

    <aside class="sidebar">
        <div class="sidebar__brand">
            <span class="sidebar__mark" aria-hidden="true"></span>
            <span>
                <span class="sidebar__title">Личный кабинет</span>
                <span class="sidebar__subtitle">Сервис сообщений</span>
            </span>
        </div>

        <nav class="sidebar__nav" aria-label="Основная навигация">
            <a class="sidebar__link<?= $currentRoute === 'site/index' ? ' is-active' : '' ?>" href="<?= Url::to(['site/index']) ?>">
                <svg class="sidebar__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 5h16v11H7l-3 3V5z"/></svg>
                Сообщения
            </a>
            <a class="sidebar__link<?= $currentRoute === 'site/stats' ? ' is-active' : '' ?>" href="<?= Url::to(['site/stats']) ?>">
                <svg class="sidebar__icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 20V10M12 20V4M20 20v-7"/></svg>
                Статистика
            </a>
        </nav>

        <div class="sidebar__footer">
            <span class="sidebar__avatar">ВТ</span>
            <span class="sidebar__user">
                <span class="sidebar__name">Валерия Тюменцева</span>
                <span class="sidebar__role">Оператор</span>
            </span>
        </div>
    </aside>

    <div class="main">
        <?= $content ?>
    </div>
</div>

<?php $this->endBody() ?>
</body>
</html>
<?php $this->endPage() ?>
