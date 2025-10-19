function identificarBandeira(numero: string): string {
  const sanitized = numero.replace(/[\s-]/g, '');

  const bandeiras: { [key: string]: RegExp } = {
    amex: /^3[47][0-9]{13}$/,
    aura: /^50[0-9]/,
    banese: /^636117/,
    cabal: /^(60420[1-9]|6042[1-9][0-9]|6043[0-9]{2}|604400)/,
    diners: /^(36[0-8][0-9]{3}|369[0-8][0-9]{2}|3699[0-8][0-9]|36999[0-9])/,
    discover: /^6(?:011|5[0-9]{2})[0-9]{12}/,
    elo: /^4011(78|79)|^43(1274|8935)|^45(1416|7393|763[12])|^50(4175|6699|67[0-6][0-9]|677[0-8]|9[0-8][0-9]{2}|99[0-8][0-9]|999[0-9])|^627780|^63(6297|6368|6369)|^65(0(0(3([1-3]|[5-9])|4[0-9]|5[0-1])|4(0[5-9]|[1-3][0-9]|8[5-9]|9[0-9])|5([0-2][0-9]|3[0-8]|4[1-9]|[5-8][0-9]|9[0-8])|7(0[0-9]|1[0-8]|2[0-7])|9(0[1-9]|[1-6][0-9]|7[0-8]))|16(5[2-9]|[6-7][0-9])|50(0[0-9]|1[0-9]|2[1-9]|[3-4][0-9]|5[0-8]))/,
    fortbrasil: /^628167/,
    grandcard: /^605032/,
    hipercard: /^606282|^3841[046]0/,
    jcb: /^(?:2131|1800|35\d{3})\d{11}/,
    mastercard: /^((5(([1-2]|[4-5])[0-9]{8}|0((1|6)[0-9]{7})|3(0(4((0|[2-9])[0-9]{5})|([0-3]|[5-9])[0-9]{6})|[1-9][0-9]{7})))|((508116)\d{4,10})|((502121)\d{4,10})|((589916)\d{4,10})|(2[0-9]{15})|(67[0-9]{14})|(506387)\d{4,10})/,
    personalcard: /^636085/,
    sorocred: /^627892|^636414/,
    valecard: /^606444|^606458|^606482/,
    visa: /^4[0-9]{15}$/
  };

  for (const bandeira in bandeiras) {
    if (bandeiras[bandeira].test(sanitized)) {
      return bandeira.toUpperCase();
    }
  }

  return 'Bandeira não identificada';
}


function getBrandColor(brand: string): string {
  const colors: { [key: string]: string } = {
    'AMEX': '#006FCF',
    'AURA': '#FE6B01',
    'BANESE': '#0066CC',
    'CABAL': '#6C1D7D',
    'DINERS': '#0079BE',
    'DISCOVER': '#FF6000',
    'ELO': '#FFCB05',
    'FORTBRASIL': '#E31E24',
    'GRANDCARD': '#002B5C',
    'HIPERCARD': '#D9182E',
    'JCB': '#0E4C96',
    'MASTERCARD': '#EB001B',
    'PERSONALCARD': '#00A859',
    'SOROCRED': '#E31E24',
    'VALECARD': '#00A859',
    'VISA': '#1A1F71',
  };
  
  return colors[brand] || '#011110'; // retorna sua cor padrão se não encontrar
};

export { getBrandColor, identificarBandeira };

