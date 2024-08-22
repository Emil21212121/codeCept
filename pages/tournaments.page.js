// tournaments.page.js
const { I } = inject();

class TournamentsPage {
    async goto() {
        I.click({ role: 'button', name: 'Турниры' });
    }

    async assertTournamentPage() {
        I.seeInCurrentUrl(/.*tournaments/);
    }

    async assertTournamentVisible() {
        I.see('ТурнирыПоучаствуй в наших турнирах и забери свой приз');
    }
}

module.exports = new TournamentsPage();
