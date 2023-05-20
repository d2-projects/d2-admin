import { isArray } from 'lodash-es'
import minimist from 'minimist'
import buildOptions from 'minimist-options'

const minimistOptions = buildOptions({
  // dev test prod
	mode: {
		type: 'string',
    alias: 'm',
		default: 'development'
	},
	projects: {
		type: 'string-array',
    alias: 'p',
		default: []
	},
  index: {
		type: 'boolean',
    alias: 'i',
		default: false
	}
})

function getArgs () {
  const args = minimist(process.argv.slice(2), minimistOptions)
  if (!isArray(args.projects)) {
    args.projects = args.projects ? [args.projects] : []
  }
  return args
}

export const options = getArgs()
