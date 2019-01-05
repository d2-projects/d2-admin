import { mount } from '@vue/test-utils'
import D2CountUp from '@/components/d2-count-up/index.vue'

describe('d2-count-up', () => {
  // 存在且是Vue组件实例
  it('is a vue instance', () => {
    const wrapper = mount(D2CountUp, {
      propsData: {
        end: 100
      }
    })

    expect(wrapper.exists()).toBeTruthy()
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  // props
  it('has props', () => {
    const wrapper = mount(D2CountUp, {
      propsData: {
        start: 0,
        end: 100,
        decimals: 0,
        duration: 2,
        options: {}
      }
    })

    expect(wrapper.props().start).toEqual(0)
    expect(wrapper.props().end).toEqual(100)
    expect(wrapper.props().decimals).toEqual(0)
    expect(wrapper.props().duration).toEqual(2)
    expect(wrapper.props().options).toEqual({})
  })

  // 开始数字，1秒后结束数字
  it('start number is 1, 1s later, end number is 99', (done) => {
    const wrapper = mount(D2CountUp, {
      propsData: {
        start: 1,
        end: 99,
        duration: 1
      }
    })

    expect(wrapper.text()).toBe('1')

    setTimeout(() => {
      expect(wrapper.text()).toBe('99')
      done()
    }, 1100)
  })

  // 小数位数
  it('start number is 1.00, 1s later, end number is 99.00', (done) => {
    const wrapper = mount(D2CountUp, {
      propsData: {
        start: 1,
        end: 99,
        decimals: 2,
        duration: 1
      }
    })

    expect(wrapper.text()).toBe('1.00')

    setTimeout(() => {
      expect(wrapper.text()).toBe('99.00')
      done()
    }, 1100)
  })
})
