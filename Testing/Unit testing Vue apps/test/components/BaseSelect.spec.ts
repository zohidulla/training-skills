import { mount, shallowMount } from '@vue/test-utils'
import { it, expect } from 'vitest'
import { ButtonType, IconName, SelectOption } from '../../src/types'
import BaseSelect from '../../src/components/BaseSelect.vue'
import BaseButton from '../../src/components/BaseButton.vue'
import BaseIcon from '../../src/components/BaseIcon.vue'

type MountOptions = {
  options?: SelectOption[]
  placeholder?: string
}

function shallowMountSelect(mountOptions?: MountOptions) {
  return mountSelect(mountOptions, true)
}

function mountSelect(mountOptions: MountOptions = {}, shallow = false) {
  return mount(BaseSelect, {
    shallow,
    props: {
      placeholder: mountOptions.placeholder || '',
      options: mountOptions.options ?? [],
      selected: null
    }
  })
}

it('renders select with reset button', () => {
  const wrapper = mountSelect()

  expect(wrapper.findComponent(BaseButton).vm.type).toBe(ButtonType.NEUTRAL)
  expect(wrapper.findComponent(BaseIcon).vm.name).toBe(IconName.X_MARK)
})

it('renders select with placeholder', () => {
  const placeholder = 'Placeholder'

  expect(shallowMountSelect({ placeholder }).text()).toContain(placeholder)
})

it('renders select with options', () => {
  const options = [
    { value: '1', label: 'Training' },
    { value: '2', label: 'Reading' },
    { value: '3', label: 'Coding' }
  ]
  const wrapper = shallowMountSelect({ options })

  options.forEach(({ value, label }) => {
    expect(wrapper.find(`option[value=${value}]`).exists()).toBe(true)
    expect(wrapper.find('select').text()).toContain(label)
  })
})

it('fires "select" event when option is selected', () => {
  const wrapper = shallowMountSelect()

  wrapper.find('select').trigger('change')

  expect(wrapper.emitted().select).toHaveLength(1)
})

it('fires "select" event when reset button is pressed', () => {
  const wrapper = mountSelect()

  wrapper.find('button').trigger('click')

  expect(wrapper.emitted().select).toHaveLength(1)
})
