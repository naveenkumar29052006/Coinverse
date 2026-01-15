import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}

export const formatCurrency = (value) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
};

export const formatCompactNumber = (number) => {
  if (number < 0) return '-' + formatCompactNumber(-number);
  // For small numbers (less than 1 million), regular formatting might be preferred depending on context,
  // but for "B" and "T" request, we primarily care about large numbers.
  // Using compact notation for anything above 0 is fine, or we can handle < 1 specifically if needed.
  if (number === 0) return '0.00';

  return Intl.NumberFormat('en-US', {
    notation: "compact",
    maximumFractionDigits: 2
  }).format(number);
};
