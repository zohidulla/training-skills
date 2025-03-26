import { mount, shallowMount } from '@vue/test-utils'
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

it('renders select with placeholder', () => {
  const placeholder = 'Placeholder'
  const wrapper = shallowMount(BaseSelect, {
    props: {
      placeholder,
      options: [],
      selected: null
    }
  })

  expect(wrapper.text()).toContain(placeholder)
})

it('renders select with options', () => {
  const options = [
    { value: '1', label: 'Training' },
    { value: '2', label: 'Reading' },
    { value: '3', label: 'Coding' }
  ]
  const wrapper = shallowMount(BaseSelect, {
    props: {
      placeholder: '',
      options,
      selected: null
    }
  })

  options.forEach(({ value, label }) => {
    expect(wrapper.find(`option[value=${value}]`).exists()).toBe(true)
    expect(wrapper.find('select').text()).toContain(label)
  })
})
