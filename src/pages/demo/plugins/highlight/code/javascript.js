export default `[].forEach.call($$("*"), a => {
  a.style.outline="1px solid #"+(~~(Math.random()*(1<<24))).toString(16)
})`
