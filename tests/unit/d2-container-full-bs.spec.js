import { mount } from '@vue/test-utils'
import D2ContainerFullBs from '@/components/d2-container/components/d2-container-full-bs.vue'

describe('d2-container-full-bs', () => {
  // 存在且是Vue组件实例
  it('is a vue instance', () => {
    const wrapper = mount(D2ContainerFullBs)

    expect(wrapper.exists()).toBeTruthy()
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  // 包含特定类名
  it('contains specific classnames', () => {
    const wrapper = mount(D2ContainerFullBs, {
      slots: {
        default: '<div>body</div>',
        header: '<div>header</div>',
        footer: '<div>footer</div>'
      }
    })

    expect(wrapper.is('.d2-container-full-bs')).toBeTruthy()
    expect(wrapper.contains('.d2-container-full-bs__header')).toBeTruthy()
    expect(wrapper.contains('.d2-container-full-bs__body')).toBeTruthy()
    expect(wrapper.contains('.d2-container-full-bs__body-wrapper-inner')).toBeTruthy()
    expect(wrapper.contains('.d2-container-full-bs__footer')).toBeTruthy()
  })

  // props
  it('has props', () => {
    const wrapper = mount(D2ContainerFullBs, {
      propsData: {
        betterScrollOptions: {}
      }
    })

    expect(wrapper.props().betterScrollOptions).toEqual({})
  })

  // 渲染slot
  it('has one or more slots', () => {
    const wrapper = mount(D2ContainerFullBs, {
      slots: {
        default: '<div>body</div>',
        header: '<div>header</div>',
        footer: '<div>footer</div>'
      }
    })

    expect(wrapper.text()).toMatch('header')
    expect(wrapper.text()).toMatch('body')
    expect(wrapper.text()).toMatch('footer')
  })
})
