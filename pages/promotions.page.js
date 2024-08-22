// promotions.page.js
const { I } = inject();

class PromotionsPage {
    async goto() {
        I.click({ role: 'button', name: 'Акции' });
    }

    async assertPromotionsPage() {
        I.seeInCurrentUrl(/.*promotions/);
    }

    async assertPromotionsVisible() {
        I.see('Акции и предложенияНе пропустите возможность получить бонус в наших текущих акци');
    }
}

module.exports = new PromotionsPage();
