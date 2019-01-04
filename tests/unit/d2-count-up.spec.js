import { mount } from '@vue/test-utils'
import D2CountUp from '@/components/d2-count-up/index.vue'

describe('d2-count-up.vue', () => {
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
})
