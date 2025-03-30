import { mount } from '@vue/test-utils'
import TheActivityForm from '../../src/components/TheActivityForm.vue'
import { expect, it } from 'vitest'

it('enables submit button if input is filled', async () => {
  const wrapper = mount(TheActivityForm)

  expect(wrapper.find('button').attributes('disabled')).toBe('')

  await wrapper.find('input').setValue('Reading')

  expect(wrapper.find('button').attributes('disabled')).toBeUndefined()
})
