export const r = (add = 0) => {
  return Math.round(Math.random() * 100) + add
}

export const returnMaker = (data = []) => {
  return {
    code: 0,
    msg: '请求成功',
    data
  }
}
