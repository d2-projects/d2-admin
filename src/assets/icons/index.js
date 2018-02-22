import alarm from './svg/alarm.svg'

console.log(alarm)

const requireAll = requireContext => requireContext.keys().map(requireContext)
const req = require.context('./svg', false, /\.svg$/)
const iconMap = requireAll(req)

console.log(iconMap)
