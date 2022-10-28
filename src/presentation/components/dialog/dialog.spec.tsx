import React from 'react'
import { fireEvent, render, RenderResult } from '@testing-library/react'
import faker from 'faker'
import Dialog from './dialog'

type SutTypes = {
  sut: RenderResult
}

const makeSut = (isOpen: boolean = faker.datatype.boolean(), closeOnOverlayClick: boolean = faker.datatype.boolean(), onClose: () => void = () => {}, title: string = faker.random.word()): SutTypes => {
  const sut = render(<Dialog isOpen={isOpen} closeOnOverlayClick={closeOnOverlayClick} onClose={onClose} title={title} />)
  return {
    sut
  }
}

describe('Dialog Component', () => {
  test('Should not render if is open is false', () => {
    const { sut } = makeSut(false)
    const dialogWrap = sut.queryByTestId('dialog-wrap')
    expect(dialogWrap).toBeNull()
  })

  test('Should render if is open is true', () => {
    const { sut } = makeSut(true)
    const dialogWrap = sut.queryByTestId('dialog-wrap')
    expect(dialogWrap).toBeTruthy()
  })

  test('Should render title prop', () => {
    const title = faker.random.word()
    const { sut } = makeSut(true, null, null, title)
    const dialogTitle = sut.getByTestId('dialog-title')
    expect(dialogTitle.textContent).toBe(title)
  })

  test('Should disable onClose when click on overlay if closeOnOverlayClick is false', () => {
    const stub = jest.fn()
    const { sut } = makeSut(true, false, stub)
    const dialogOverlay = sut.getByTestId('dialog-overlay')
    fireEvent.click(dialogOverlay)
    expect(stub).not.toBeCalled()
  })
})
