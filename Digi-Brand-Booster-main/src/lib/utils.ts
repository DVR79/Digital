export function cn(...classes: (string | false | null | undefined)[]) {
  return classes.filter(Boolean).join(' ')
}

export function formatCurrency(value: number, currency: 'USD' | 'INR') {
  const symbol = currency === 'USD' ? '$' : '₹'
  const locale = currency === 'USD' ? 'en-US' : 'en-IN'
  return `${symbol}${value.toLocaleString(locale)}`
}
