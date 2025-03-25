import { mount } from '@vue/test-utils'
import { it, expect } from 'vitest'
import { ButtonType, IconName } from '../../src/types'
import BaseSelect from '../../src/components/BaseSelect.vue'
import BaseButton from '../../src/components/BaseButton.vue'
import BaseIcon from '../../src/components/BaseIcon.vue'

it('renders select with reset button', () => {
  const wrapper = mount(BaseSelect, {
    props: {
      placeholder: '',
      options: [],
      selected: null
    }
  })

  expect(wrapper.findComponent(BaseButton).vm.type).toBe(ButtonType.NEUTRAL)
  expect(wrapper.findComponent(BaseIcon).vm.name).toBe(IconName.X_MARK)
})
it.todo('renders select with placeholder')
it.todo('renders select with options')
