import request from '@/plugin/axios'

export function ComponentsMarkdownBase (url) {
  return request({
    baseURL: process.env.BASE_URL,
    url,
    method: 'get'
  })
}
