export function add(a: number, b: number): number {
  return a + b;
}

export function subtract(a: number, b: number): number {
  return a - b;
}

export const multiple = (a: number, b: number): number => a * b;

export const divide = (a: number, b: number): number => {
  return b ? a / b : NaN;
}