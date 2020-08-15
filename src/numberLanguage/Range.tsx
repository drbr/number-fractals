export type RangeParams = {
  start: number;
  end: number;
};

export default function range(params: RangeParams): number[] {
  const { start, end } = params;
  return Array.from({ length: end - start + 1 }, (_, i) => start + i);
}
