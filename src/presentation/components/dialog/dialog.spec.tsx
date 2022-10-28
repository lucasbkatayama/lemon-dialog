import React from 'react'
import { render } from '@testing-library/react'
import faker from 'faker'
import Dialog from './dialog'

describe('Dialog Component', () => {
  test('Should not render if is open is false', () => {
    const closeOnOverlayClick = faker.datatype.boolean()
    const { queryByTestId } = render(<Dialog isOpen={false} closeOnOverlayClick={closeOnOverlayClick} onClose={() => {}} />)
    const dialogWrap = queryByTestId('dialog-wrap')
    expect(dialogWrap).toBeNull()
  })
})
