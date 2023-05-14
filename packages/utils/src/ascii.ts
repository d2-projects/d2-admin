
import AsciiTable from 'ascii-table'

interface Column {
  label: string;
  key: string;
}

interface Formatter {
  [key: string]: (value: any) => string;
}

interface TableToAsciiParams {
  title: string;
  columns: Column[];
  data: any[];
  formatters?: Formatter;
}

interface ObjectToAsciiParams {
  title: string;
  data: { [key: string]: any };
}

export function tableToAscii({
  title,
  columns,
  data,
  formatters = {}
}: TableToAsciiParams): string {
  const table = new AsciiTable(title)
  table.setHeading(...columns.map(c => c.label))
  for (const row of data) {
    table.addRow(...columns.map(column => {
      const value = row[column.key]
      const formatter = formatters[column.key]
      return formatter ? formatter(value) : value
    }))
  }
  return table.toString()
}

export function objectToAscii({
  title,
  data,
}: ObjectToAsciiParams): string {
  const table = new AsciiTable(title)
  table.setHeading('key', 'value')
  for (const key in data) {
    table.addRow(key, data[key])
  }
  return table.toString()
}
