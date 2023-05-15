import { isArray } from 'lodash'
import minimist from 'minimist'
import buildOptions from 'minimist-options'

const minimistOptions = buildOptions({
  // dev test prod
	mode: {
		type: 'string',
    alias: 'm',
		default: 'development'
	},
	project: {
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
  if (!isArray(args.project)) {
    args.project = args.project ? [args.project] : []
  }
  return args
}

export const options = getArgs()
