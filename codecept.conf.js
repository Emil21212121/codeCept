const { setHeadlessWhen } = require('@codeceptjs/configure');
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: './tests/*.js',
  output: './output',
  helpers: {
    Playwright: {
      url: 'https://selector322.gg/', 
      show: true,
      browser: 'chromium',
      // Настройка локали и заголовков
      contextOptions: {
        locale: 'ru-RU',
        extraHTTPHeaders: {
          'Accept-Language': 'ru-RU'
        }
      },
      // Добавляем настройки для замедления
      launchOptions: {
        slowMo: 2000 // Замедление на 1000 миллисекунд (1 секунда)
      }
    }
  },
  include: {
    I: './steps_file.js', // Файл с шагами
    mainPage: './pages/main.page.js',
    lobbyPage: './pages/lobby.page.js',
    lobbyCategoryList: './pages/lobby-category.page.js',
    lobbyProviderList: './pages/lobby-provider.page.js',
    racePage: './pages/race.page.js',
    promotionsPage: './pages/promotions.page.js',
    tournamentsPage: './pages/tournaments.page.js',
  },
  bootstrap: null,
  mocha: {},
  name: 'my-codeceptjs-project'
}
