import { mount } from '@vue/test-utils'
import D2ModuleIndexMenu from '@/components/d2-module-index-menu/index.vue'
import menu from '@/menu/modules/demo-business'

describe('d2-module-index-menu', () => {
  // 存在且是Vue组件实例
  it('is a vue instance', () => {
    const wrapper = mount(D2ModuleIndexMenu, {
      stubs: ['el-button'],
      propsData: {
        menu
      }
    })

    expect(wrapper.exists()).toBeTruthy()
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  // 300m后正确渲染，包含特定类名
  it('contains specific classnames', (done) => {
    const wrapper = mount(D2ModuleIndexMenu, {
      stubs: ['el-button'],
      propsData: {
        menu: menu
      }
    })

    setTimeout(() => {  
      expect(wrapper.is('.d2-module-index-menu')).toBeTruthy()
      expect(wrapper.contains('.d2-module-index-menu-group')).toBeTruthy()
      expect(wrapper.contains('.d2-module-index-menu-group--title')).toBeTruthy()
      expect(wrapper.contains('.d2-module-index-menu-item')).toBeTruthy()
      done()
    }, 400)
  })
})
