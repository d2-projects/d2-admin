import { mount } from '@vue/test-utils'
import D2PageCover from '@/components/d2-page-cover/index.vue'

describe('d2-page-cover', () => {
  // 存在且是Vue组件实例
  it('is a vue instance', () => {
    const wrapper = mount(D2PageCover)

    expect(wrapper.exists()).toBeTruthy()
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  // 包含特定类名
  it('contains specific classnames', () => {
    const wrapper = mount(D2PageCover, {
      slots: {
        default: '<div>default</div>',
        footer: '<div>footer</div>'
      }
    })

    expect(wrapper.is('.d2-page-cover')).toBeTruthy()
    expect(wrapper.contains('.d2-page-cover__logo')).toBeTruthy()
    expect(wrapper.contains('.d2-page-cover__title')).toBeTruthy()
    expect(wrapper.contains('.d2-page-cover__sub-title')).toBeTruthy()
    expect(wrapper.contains('.d2-page-cover__build-time')).toBeTruthy()
  })

  // 渲染slot
  it('has one or more slots', () => {
    const wrapper = mount(D2PageCover, {
      slots: {
        default: '<div>default</div>',
        footer: '<div>footer</div>'
      }
    })

    expect(wrapper.text()).toMatch('default')
    expect(wrapper.text()).toMatch('footer')
  })
})
