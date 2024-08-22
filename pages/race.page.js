// race.page.js
const { I } = inject();

class RacePage {
    async goto() {
        I.click({ role: 'button', name: 'Гонка' });
    }

    async assertRacePage() {
        I.seeInCurrentUrl(/.*race/);
    }

    async assertRaceVisible() {
        I.seeElement({ role: 'cell', name: 'Игрок' });
        I.seeElement({ role: 'cell', name: 'Сумма ставок' });
        I.seeElement({ role: 'cell', name: 'Приз' });
    }
}

module.exports = new RacePage();
