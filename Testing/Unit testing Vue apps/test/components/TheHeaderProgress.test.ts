import { expect, it, vi } from 'vitest'
import { shallowMount } from '@vue/test-utils'
import TheHeaderProgress from '../../src/components/TheHeaderProgress.vue'
import { PageName, ProgressColorClass } from '../../src/types'
import { computed } from 'vue'
import { MEDIUM_PERCENT } from '../../src/constants'
import * as router from '../../src/router'

vi.mock('../../src/composables/total-progress', () => {
  return {
    useTotalProgress: vi.fn(() => {
      return {
        percentage: computed(() => MEDIUM_PERCENT),
        colorClass: computed(() => ProgressColorClass.BLUE)
      }
    })
  }
})

it('has href attribute with progress page hash', () => {
  expect(shallowMount(TheHeaderProgress).attributes('href')).toBe(`#${PageName.PROGRESS}`)
})

it('shows current progress', () => {
  expect(shallowMount(TheHeaderProgress).text()).toContain(`Progress: ${MEDIUM_PERCENT}%`)
})

it('uses proper progress indicator color', () => {
  expect(shallowMount(TheHeaderProgress).html()).toContain(ProgressColorClass.BLUE)
})

it('navigates to progress page on click', () => {
  const navigateSpy = vi.spyOn(router, 'navigate')

  shallowMount(TheHeaderProgress).trigger('click')

  expect(navigateSpy).toBeCalledTimes(1)
  expect(navigateSpy).toBeCalledWith(PageName.PROGRESS)

  vi.resetAllMocks()
})
