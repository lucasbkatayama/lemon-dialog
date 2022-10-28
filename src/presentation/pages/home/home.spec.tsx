import React from 'react'
import { render, fireEvent, RenderResult, cleanup } from '@testing-library/react'
import Home from './home'

type SutTypes = {
  sut: RenderResult
}

const makeSut = (): SutTypes => {
  const sut = render(<Home />)
  return {
    sut
  }
}

describe('Dialog Component', () => {
  afterEach(cleanup)

  test('Should not render Dialog on start', () => {
    const { sut } = makeSut()
    const dialogWrap = sut.getByTestId('dialog-wrap')
    expect(dialogWrap.childElementCount).toBe(0)
  })

  test('Should render Dialog on click button', () => {
    const { sut } = makeSut()
    const dialogWrap = sut.getByTestId('dialog-wrap')
    const button = sut.getByTestId('dialog-button') as HTMLButtonElement
    fireEvent.click(button)
    expect(dialogWrap.childElementCount).toBe(1)
  })
})
