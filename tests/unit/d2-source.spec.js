import { mount } from '@vue/test-utils'
import D2Source from '@/components/d2-container/components/d2-source.vue'

describe('d2-source', () => {
  // 存在且是Vue组件实例
  it('is a vue instance', () => {
    const wrapper = mount(D2Source, {
      stubs: ['d2-icon']
    })

    expect(wrapper.exists()).toBeTruthy()
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  // 包含特定类名
  it('contains specific classnames', (done) => {
    const wrapper = mount(D2Source, {
      stubs: ['d2-icon']
    })

    expect(wrapper.is('.d2-source')).toBeTruthy()
    setTimeout(() => {
      expect(wrapper.contains('.d2-source--active')).toBeTruthy()
      done()
    }, 600)
  })

  // props
  it('has props', () => {
    const wrapper = mount(D2Source, {
      stubs: ['d2-icon'],
      propsData: {
        filename: ''
      }
    })

    expect(wrapper.props().filename).toEqual('')
  })
})