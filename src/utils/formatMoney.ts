export default function formatMoney(
    locale: string,
    number: number,
    currency: string,
): string {
    return new Intl.NumberFormat(locale, {
        style: 'currency',
        currency,
    }).format(number);
}
