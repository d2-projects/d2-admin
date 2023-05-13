import { pick } from 'lodash-es'

export function test () {
  const obj = {
    a: 1,
    b: 2,
    c: 3
  }
  const obj2 = pick(obj, ['a', 'b'])
  console.log(obj2)
}

test()