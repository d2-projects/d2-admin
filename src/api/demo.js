import { find, map, random } from 'lodash'
import faker from 'faker/locale/zh_CN'
import { requestForMock, mock } from '@/api/_service.js'
import * as tools from '@/api/_tools.js'

// 静态用户数据
const db = [
  { id: '1', name: '用户 1', address: '上海市普陀区金沙江路 1518 弄' },
  { id: '2', name: '用户 2', address: '上海市普陀区金沙江路 1517 弄' },
  { id: '3', name: '用户 3', address: '上海市普陀区金沙江路 1519 弄' },
  { id: '4', name: '用户 4', address: '上海市普陀区金沙江路 1516 弄' }
]

/**
 * 获取静态列表数据（模拟接口）
 */
export function DEMO_MOCK_LIST () {
  mock.onAny('/demo/business/issues/142/fetch')
    .reply(...tools.responseSuccess({ list: db }))

  return requestForMock({
    url: '/demo/business/issues/142/fetch',
    method: 'get'
  })
}

/**
 * 获取详情数据（模拟接口）
 * @param {String} id - 项目 ID
 */
export function DEMO_MOCK_DETAIL (id) {
  mock.onAny('/demo/business/issues/142/detail')
    .reply(config => {
      const item = find(db, { id: config.params.id })
      return tools.responseSuccess(item || {})
    })

  return requestForMock({
    url: '/demo/business/issues/142/detail',
    method: 'get',
    params: { id }
  })
}

/**
 * 获取分页列表数据（使用 faker 动态模拟）
 * @param {Object} params - 请求参数（含分页）
 */
export function DEMO_MOCK_LIST2 (params = {}) {
  mock.onAny('/demo/business/table/1/fetch')
    .reply(config => {
      const pageSize = config.params.pageSize || 10
      const list = map(Array(pageSize), () => ({
        key: faker.datatype.uuid(),
        value: [10, 100, 200, 500][random(0, 3)],
        type: faker.datatype.boolean(),
        admin: faker.name.firstName() + faker.name.lastName(),
        adminNote: faker.random.words(),
        dateTimeCreat: faker.date.past(),
        used: faker.datatype.boolean(),
        dateTimeUse: faker.date.past()
      }))
      return tools.responseSuccess({ page: { total: 1000 }, list })
    })

  return requestForMock({
    url: '/demo/business/table/1/fetch',
    method: 'get',
    params
  })
}

/**
 * 模拟请求错误日志示例
 */
export function DEMO_LOG_AJAX () {
  return requestForMock({
    url: '/invalid-url',
    method: 'get'
  })
}

/**
 * 🆕 可选示例：创建数据（POST 模拟）
 */
export function DEMO_MOCK_CREATE (data) {
  mock.onPost('/demo/business/table/1/create')
    .reply(() => tools.responseSuccess({ message: '创建成功', data }))

  return requestForMock({
    url: '/demo/business/table/1/create',
    method: 'post',
    data
  })
}
