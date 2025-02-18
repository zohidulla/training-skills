import { expect, it } from 'vitest'
import { updateActivity } from '../src/activities'
import { Activity } from '../src/types'

it('updates activity', () => {
  // arrange (given)
  const activity: Activity = {
    id: '1',
    name: 'Training',
    secondsToComplete: 3600
  }
  const updatedFields: Activity = {
    id: '2',
    name: 'Reading',
    secondsToComplete: 7200
  }

  // act (when)
  const updatedActivity = updateActivity(activity, updatedFields)

  // assert (then)
  expect(activity).toEqual(updatedFields)
  expect(updatedActivity).toEqual(updatedFields)
})
it.todo('calculates activity completion percentage')
