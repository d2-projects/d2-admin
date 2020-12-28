import { find, map, random } from 'lodash'
import faker from 'faker/locale/zh_CN'
import { service, serviceForMock, request, requestForMock, mock } from '@/api/_service.js'
import * as tools from '@/api/_tools.js'

const db = [
  { id: '1', name: '用户 1', address: '上海市普陀区金沙江路 1518 弄' },
  { id: '2', name: '用户 2', address: '上海市普陀区金沙江路 1517 弄' },
  { id: '3', name: '用户 3', address: '上海市普陀区金沙江路 1519 弄' },
  { id: '4', name: '用户 4', address: '上海市普陀区金沙江路 1516 弄' }
]

/**
 * @description 列表
 */
export function DEMO_MOCK_LIST () {
  // 模拟数据
  mock
    .onAny('/demo/business/issues/142/fetch')
    .reply(...tools.responseSuccess({ list: db }))
  // 接口请求
  return requestForMock({
    url: '/demo/business/issues/142/fetch',
    method: 'get'
  })
}

/**
 * @description 详情
 * @param {String} id 项目 ID
 */
export function DEMO_MOCK_DETAIL (id) {
  // 模拟数据
  mock
    .onAny('/demo/business/issues/142/detail')
    .reply(config => tools.responseSuccess(find(db, { id: config.params.id })))
  // 接口请求
  return requestForMock({
    url: '/demo/business/issues/142/detail',
    method: 'get',
    params: {
      id
    }
  })
}

/**
 * @description 列表
 */
export function DEMO_MOCK_LIST2 (params = {}) {
  // 模拟数据
  mock
    .onAny('/demo/business/table/1/fetch')
    .reply(config => tools.responseSuccess({
      page: {
        total: 1000
      },
      list: map(Array(config.params.pageSize), () => ({
        key: faker.random.uuid(),
        value: [10, 100, 200, 500][random(0, 3)],
        type: faker.random.boolean(),
        admin: faker.name.firstName() + faker.name.lastName(),
        adminNote: faker.random.words(),
        dateTimeCreat: faker.date.past(),
        used: faker.random.boolean(),
        dateTimeUse: faker.date.past()
      }))
    }))
  // 接口请求
  return requestForMock({
    url: '/demo/business/table/1/fetch',
    method: 'get',
    params
  })
}

/**
 * @description 错误日志示例 请求一个不存在的地址
 */
export function DEMO_LOG_AJAX () {
  // 接口请求
  return requestForMock({
    url: '/invalid-url',
    method: 'get'
  })
}
