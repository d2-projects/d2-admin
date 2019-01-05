import { mount, createLocalVue } from '@vue/test-utils'
import D2IconSelect from '@/components/d2-icon-select/index.vue'
import ElementUI from 'element-ui'

describe('d2-icon-select', () => {
  const localVue = createLocalVue()
  localVue.use(ElementUI)

  // 存在且是Vue组件实例
  it('is a vue instance', () => {
    const wrapper = mount(D2IconSelect, {
      stubs: ['el-popover', 'el-button', 'el-input', 'el-collapse', 'el-collapse-item', 'el-col', 'el-row']
    })

    expect(wrapper.exists()).toBeTruthy()
    expect(wrapper.isVueInstance()).toBeTruthy()
  })

  // // props
  // it('has props', () => {
  //   const wrapper = mount(D2IconSelect, {
  //     propsData: {
  //       value: 'value',
  //       placeholder: '请选择',
  //       placement: 'right',
  //       clearable: true,
  //       userInput: false,
  //       autoClose: false
  //     }
  //   })

  //   expect(wrapper.props().value).toEqual('value')
  //   expect(wrapper.props().placeholder).toEqual('请选择')
  //   expect(wrapper.props().placement).toEqual('right')
  //   expect(wrapper.props().clearable).toEqual(true)
  //   expect(wrapper.props().userInput).toEqual(false)
  //   expect(wrapper.props().autoClose).toEqual(false)
  // })
})
