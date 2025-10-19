// Configurações de cartão de crédito
export const CARD_CONFIG = {
  // Máscara para input
  mask: '9999 9999 9999 9999 999',

  // Dimensões do cartão visual
  cardWidth: '100%',
  cardHeight: 200,
  cardBorderRadius: 14,
  cardPadding: 20,

  // Dimensões do logo
  logoWidth: 80,
  logoHeight: 50,

  // Validações
  minLength: 13,
  maxLength: 19,

  // Espaçamentos
  inputHeight: 56,
  inputBorderRadius: 12,
  inputBorderWidth: 2,
} as const;

