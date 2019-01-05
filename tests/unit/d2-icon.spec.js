import { mount } from '@vue/test-utils'
import D2Icon from '@/components/d2-icon/index.vue'

describe('d2-icon', () => {
  // 存在且是Vue组件实例
  it('is a vue instance', () => {
    const wrapper = mount(D2Icon)

    expect(wrapper.exists()).toBeTruthy()
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  // 包含特定类名
  it('contains specific classnames', () => {
    const wrapper = mount(D2Icon)

    expect(wrapper.is('.fa')).toBeTruthy()
    expect(wrapper.contains('.fa-font-awesome')).toBeTruthy()
  })

  // props
  it('has props', () => {
    const wrapper = mount(D2Icon, {
      propsData: {
        name: 'font-awesome'
      }
    })

    expect(wrapper.props().name).toEqual('font-awesome')
  })
})
