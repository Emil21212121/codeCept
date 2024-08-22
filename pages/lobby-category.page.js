// lobby-category.page.js
const { I } = inject();

class LobbyCategoryList {
    async categoryList() {
        I.click({ role: 'button', name: 'Категории' });
    }

    async categoryListVisible() {
        const categories = [
            'Slots',
            'Live Games',
            'Jackpot',
            'Instant Win',
            'Roulette',
            'Blackjack',
            'Bonus Buy',
            'Virtual Sports'
        ];

        for (const category of categories) {
            I.seeElement({ role: 'button', name: category });
        }
    }
}

module.exports = new LobbyCategoryList();
