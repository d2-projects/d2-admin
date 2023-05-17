import { tableToAscii, objectToAscii, TableToAsciiParams, ObjectToAsciiParams } from './ascii.ts'

export function logTableAsAscii(params: TableToAsciiParams) {
  const text: string = tableToAscii(params)
  console.log(text)
}

export function logObjectAsAscii(params: ObjectToAsciiParams) {
  const text: string = objectToAscii(params)
  console.log(text)
}
