import { tableToAscii } from './ascii.ts'

export function logTable({
  title,
  columns,
  data,
  formatters = {}
}: {
  title: string;
  columns: { label: string; key: string }[];
  data: any[];
  formatters?: { [key: string]: (value: any) => string };
}) {
  console.log(tableToAscii({ title, columns, data, formatters }))
}
