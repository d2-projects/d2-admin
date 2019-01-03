import { mount } from '@vue/test-utils'
import D2ContainerCard from '@/components/d2-container/components/d2-container-card.vue'

describe('d2-container-card.vue', () => {
  it('渲染slot', () => {
    const wrapper = mount(D2ContainerCard, {
      slots: {
        default: '<div>body</div>',
        header: '<div>header</div>',
        footer: '<div>footer</div>'
      }
    })

    expect(wrapper.html()).toContain('<div class="d2-container-card__body"><div class="d2-container-card__body-card"><div>body</div></div>')
    expect(wrapper.html()).toContain('<div class="d2-container-card__header"><div>header</div></div>')
    expect(wrapper.html()).toContain('<div class="d2-container-card__footer"><div>footer</div></div>')
  })
})
