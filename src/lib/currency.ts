const FORMATTER = new Intl.NumberFormat('en-us', {
    currency: 'SEK',
    style: 'currency'
  });
  
  export function formatCurrency(number: number): string {
    return FORMATTER.format(number);
  }