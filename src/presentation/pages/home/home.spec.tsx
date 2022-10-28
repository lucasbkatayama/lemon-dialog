import React from 'react'
import { render } from '@testing-library/react'
import Home from './home'

describe('Dialog Component', () => {
  test('Should not render Dialog on start', () => {
    const { getByTestId } = render(<Home />)
    const homeWrap = getByTestId('dialog-wrap')
    expect(homeWrap.childElementCount).toBe(0)
  })
})
