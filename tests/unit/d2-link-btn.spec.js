import { mount } from '@vue/test-utils'
import D2LinkBtn from '@/components/d2-link-btn/index.vue'

describe('d2-link-btn', () => {
  // 存在且是Vue组件实例
  it('is a vue instance', () => {
    const wrapper = mount(D2LinkBtn, {
      stubs: ['el-button-group', 'el-button', 'd2-icon']
    })

    expect(wrapper.exists()).toBeTruthy()
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  // props
  it('has props', () => {
    const wrapper = mount(D2LinkBtn, {
      stubs: ['el-button-group', 'el-button', 'd2-icon'],
      propsData: {
        title: 'title',
        icon: 'icon',
        link: 'link'
      }
    })

    expect(wrapper.props().title).toEqual('title')
    expect(wrapper.props().icon).toEqual('icon')
    expect(wrapper.props().link).toEqual('link')
  })
})
