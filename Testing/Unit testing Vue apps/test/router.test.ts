import { beforeEach, expect, it, vi } from 'vitest'
import { normalizePageHash } from '../src/router'
import { PageName } from '../src/types'

beforeEach(() => {
  vi.stubGlobal('window', { location: { hash: '' } })
})

it.each(Object.values(PageName))('normalizes valid page hash: %s', (page) => {
  global.window.location.hash = `#${page}`

  expect(normalizePageHash()).toBe(page)
  expect(global.window.location.hash).toBe(`#${page}`)
})

it('normalizes invalid page hash', () => {
  global.window.location.hash = 'invalid'

  expect(normalizePageHash()).toBe(PageName.TIMELINE)
  expect(global.window.location.hash).toBe(PageName.TIMELINE)
})
