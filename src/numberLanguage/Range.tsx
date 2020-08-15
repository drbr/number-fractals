export default function range(params: {
  start: number;
  end: number;
}): number[] {
  const { start, end } = params;
  return Array.from({ length: end - start + 1 }, (_, i) => start + i);
}
