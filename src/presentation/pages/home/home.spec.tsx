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
    const dialogWrap = sut.queryByTestId('dialog-wrap')
    expect(dialogWrap).toBeFalsy()
  })

  test('Should render Dialog on click button', () => {
    const { sut } = makeSut()
    const button = sut.getByTestId('dialog-button') as HTMLButtonElement
    fireEvent.click(button)
    const dialogWrap = sut.getByTestId('dialog-wrap')
    expect(dialogWrap).toBeTruthy()
  })

  test('Should render About inside Dialog', () => {
    const { sut } = makeSut()
    const button = sut.getByTestId('dialog-button') as HTMLButtonElement
    fireEvent.click(button)
    const dialogWrap = sut.getByTestId('about')
    expect(dialogWrap).toBeTruthy()
  })
})
