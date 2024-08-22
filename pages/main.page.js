const { I } = inject();

class LobbyPage {
    async goto() {
        I.click({ role: 'button', name: 'Лобби' });
        I.waitForNavigation(); // Ждем, пока произойдет переход на новую страницу
    }

    async assertLobbyPage() {
        I.seeInCurrentUrl(/.*lobby/); // Проверяем, что URL содержит "/lobby"
        I.see('Лобби'); // Проверяем, что на странице присутствует текст 'Лобби' или другой уникальный элемент
    }
}

module.exports = new LobbyPage();

