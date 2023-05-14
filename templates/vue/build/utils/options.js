import { isArray } from 'lodash'
import minimist from 'minimist'
import buildOptions from 'minimist-options'

const minimistOptions = buildOptions({
  // dev test beta prod
	mode: {
		type: 'string',
    alias: 'm',
		default: 'development'
	},
	app: {
		type: 'string-array',
    alias: 'a',
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
  if (!isArray(args.app)) {
    args.app = args.app ? [args.app] : []
  }
  return args
}

export const options = getArgs()
