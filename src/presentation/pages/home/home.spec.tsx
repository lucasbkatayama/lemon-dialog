import React from 'react'
import { render, fireEvent, RenderResult } from '@testing-library/react'
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
  test('Should not render Dialog on start', () => {
    const { sut } = makeSut()
    const dialogWrap = sut.getByTestId('dialog-wrap')
    expect(dialogWrap.childElementCount).toBe(0)
  })
})
