import { mount, createLocalVue } from '@vue/test-utils'
import D2Source from '@/components/d2-container/components/d2-source.vue'
import util from '@/libs/util'

describe('d2-source.vue', () => {
  // 存在且是Vue组件实例
  it('is a vue instance', () => {
    const wrapper = mount(D2Source, {
      stubs: ['d2-icon']
    })

    expect(wrapper.exists()).toBeTruthy()
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  // 包含特定类名
  it('contains specific classnames', () => {
    const wrapper = mount(D2Source, {
      stubs: ['d2-icon']
    })

    expect(wrapper.is('.d2-source')).toBeTruthy()
    setTimeout(() => {
      expect(wrapper.contains('.d2-source--active')).toBeTruthy()
    }, 500)
  })

  // filename prop
  it('has a property named \'filename\'', () => {
    const wrapper = mount(D2Source, {
      stubs: ['d2-icon'],
      propsData: {
        filename: ''
      }
    })

    expect(wrapper.props().filename).toEqual('')
  })
})