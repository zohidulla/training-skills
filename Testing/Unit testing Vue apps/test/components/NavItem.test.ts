import { shallowMount } from '@vue/test-utils'
import NavItem from '../../src/components/NavItem.vue'
import { NAV_ITEMS } from '../../src/constants'
import { it, expect } from 'vitest'
import BaseIcon from '../../src/components/BaseIcon.vue'

const timelineNavItem = NAV_ITEMS[0]

it.only('renders nav item', () => {
  const wrapper = shallowMount(NavItem, {
    props: {
      navItem: timelineNavItem
      // isActive: false
    }
  })

  expect(wrapper.text()).toContain(timelineNavItem.page)
  expect(wrapper.findComponent(BaseIcon).props('name')).toEqual(timelineNavItem.icon)
  expect(wrapper.find('a').attributes('href')).toBe(`#${timelineNavItem.page}`)
})
