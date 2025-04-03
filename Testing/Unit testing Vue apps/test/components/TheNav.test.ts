import { shallowMount } from "@vue/test-utils";
import { expect, it } from "vitest";
import TheNav from "../../src/components/TheNav.vue";
import { NAV_ITEMS } from "../../src/constants";
import NavItem from "../../src/components/NavItem.vue";

it('has all nav items', () => {
  const wrapper = shallowMount(TheNav)

  NAV_ITEMS.forEach((navItem, i) => {
    expect(wrapper.findAllComponents(NavItem)[i].vm.navItem).toEqual(navItem)
  })
})