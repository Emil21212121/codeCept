Feature('Тесты навигации');

Before(async ({ I }) => {
    I.amOnPage('https://selector322.gg/');
  
});

Scenario('Переход на главную', ({ I, mainPage }) => {
    I.click('button')
    mainPage.assertMainVisible();
});

Scenario('Переход на страницу Лобби', ({ I, lobbyPage }) => {
    lobbyPage.goto();
    lobbyPage.assertLobbyPage();
});

Scenario('Выпадающий список Категорий игр', ({ I, lobbyCategoryList }) => {
    lobbyCategoryList.categoryList();
    lobbyCategoryList.categoryListVisible();
});

Scenario('Выпадающий список Провайдеров', ({ I, lobbyProviderList }) => {
    lobbyProviderList.providerList();
    lobbyProviderList.providerListVisible();
});

Scenario('Переход на страницу Гонка', ({ I, racePage }) => {
    racePage.goto();
    racePage.assertRacePage();
    racePage.assertRaceVisible();
});

Scenario('Переход на страницу Промоакций', ({ I, promotionsPage }) => {
    promotionsPage.goto();
    promotionsPage.assertPromotionsPage();
    promotionsPage.assertPromotionsVisible();
});

Scenario('Переход на страницу Турниры', ({ I, tournamentsPage }) => {
    tournamentsPage.goto();
    tournamentsPage.assertTournamentPage();
    tournamentsPage.assertTournamentVisible();
});
