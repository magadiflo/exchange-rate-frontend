export interface Conversion {
  base: Currency;
  quote: Currency;
  conversion: number;
}

export interface Currency {
  id: number;
  isoCode: string;
  name: string;
}
