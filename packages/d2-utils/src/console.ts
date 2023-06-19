import {
  tableToAscii,
  objectToAscii,
  TableToAsciiParams,
  ObjectToAsciiParams
} from './ascii.ts'

export function printAsciiTable(params: TableToAsciiParams) {
  const text: string = tableToAscii(params)
  console.log(text)
}

export function printAsciiObject(params: ObjectToAsciiParams) {
  const text: string = objectToAscii(params)
  console.log(text)
}
