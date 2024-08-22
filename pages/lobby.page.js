const { I } = inject();

module.exports = {
  walletVisible() {
    I.seeElement({ css: 'button[role="button"][name="Депозит"]' });
    I.seeElement({ css: 'button[role="button"][name="Вывод"]' });
    I.seeElement({ css: 'button[role="button"][name="История"]' });
    I.seeElement({ css: 'button[role="button"][name="Деньги"]' });
    I.seeElement({ css: 'button[role="button"][name="Криптовалюта"]' });
    I.seeElement({ xpath: '//text()[contains(., "Валюта пополнения")]/parent::*' });
    I.seeElement({ xpath: '//text()[contains(., "Выберите оператора")]/parent::*' });
    I.seeElement({ xpath: '//text()[contains(., "Сумма пополнения")]/parent::*' });
    I.seeElement({ css: '#inputDeposit' });
    I.seeElement({ css: 'button[role="button"][name="Перейти к оплате"]' });
  }
};
