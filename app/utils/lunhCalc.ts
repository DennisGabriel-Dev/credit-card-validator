function validateCardNumber(number: string): boolean {
  if (!number) return false;
  // Remove espaços e traços
  const sanitized = number.replace(/[\s-]/g, '');
  
  // Verifica se o número contém apenas dígitos
  if (!/^\d+$/.test(sanitized)) {
    return false;
  }

  let sum = 0;
  let shouldDouble = false;

  // Percorre os dígitos de trás para frente
  for (let i = sanitized.length - 1; i >= 0; i--) {
    let digit = parseInt(sanitized.charAt(i), 10);

    if (shouldDouble) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }

    sum += digit;
    shouldDouble = !shouldDouble;
  }

  return sum % 10 === 0;
}


export { validateCardNumber };
