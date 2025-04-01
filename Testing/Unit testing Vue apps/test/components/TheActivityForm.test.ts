import { mount, shallowMount } from '@vue/test-utils'
import TheActivityForm from '../../src/components/TheActivityForm.vue'
import { expect, it, vi } from 'vitest'
import * as activities from '../../src/activities'

it('enables submit button if input is filled', async () => {
  const wrapper = mount(TheActivityForm)

  expect(wrapper.find('button').attributes('disabled')).toBe('')

  await wrapper.find('input').setValue('Reading')

  expect(wrapper.find('button').attributes('disabled')).toBeUndefined()
})

it('creates activity after form submission', () => {
  const createActivitySpy = vi.spyOn(activities, 'createActivity')
  const wrapper = shallowMount(TheActivityForm)
  const activityName = 'Reading'

  wrapper.find('input').setValue(activityName)
  wrapper.find('form').trigger('submit')

  expect(createActivitySpy).toBeCalledTimes(1)
  expect(createActivitySpy).toBeCalledWith({
    id: expect.any(String),
    name: activityName,
    secondsToComplete: 0
  })

  vi.restoreAllMocks()
})

it('disables submit button after form submission', async () => {
  const wrapper = mount(TheActivityForm)

  await wrapper.find('input').setValue('Reading')
  expect(wrapper.find('button').attributes()).not.toHaveProperty('disabled')

  await wrapper.find('form').trigger('submit')
  expect(wrapper.find('button').attributes()).toHaveProperty('disabled')
})
