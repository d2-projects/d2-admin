import { mount } from '@vue/test-utils'
import D2IconSvg from '@/components/d2-icon-svg/index.vue'

describe('d2-icon-svg', () => {
  // 存在且是Vue组件实例
  it('is a vue instance', () => {
    const wrapper = mount(D2IconSvg, {
      propsData: {
        name: 'add'
      }
    })

    expect(wrapper.exists()).toBeTruthy()
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  // props
  it('has props', () => {
    const wrapper = mount(D2IconSvg, {
      propsData: {
        name: 'add'
      }
    })

    expect(wrapper.props().name).toEqual('add')
  })
})
