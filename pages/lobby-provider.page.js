// lobby-provider.page.js
const { I } = inject();

class LobbyProviderList {
    async providerList() {
        I.click({ role: 'button', name: 'Провайдеры' });
    }

    async providerListVisible() {
        I.seeElement({ placeholder: 'Например: Novomatic' });
    }
}

module.exports = new LobbyProviderList();
