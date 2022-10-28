import React from 'react'
import { fireEvent, render, RenderResult } from '@testing-library/react'
import faker from 'faker'
import Dialog from './dialog'

type SutTypes = {
  sut: RenderResult
  onCloseSpy: jest.Mock<any, any>
}

const makeSut = (isOpen: boolean = faker.datatype.boolean(), closeOnOverlayClick: boolean = faker.datatype.boolean(), title: string = faker.random.word()): SutTypes => {
  const onCloseSpy = jest.fn()
  const sut = render(<Dialog isOpen={isOpen} closeOnOverlayClick={closeOnOverlayClick} onClose={onCloseSpy} title={title} />)
  return {
    sut,
    onCloseSpy
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
    const { sut } = makeSut(true, null, title)
    const dialogTitle = sut.getByTestId('dialog-title')
    expect(dialogTitle.textContent).toBe(title)
  })

  test('Should disable onClose when click on overlay if closeOnOverlayClick is false', () => {
    const { sut, onCloseSpy } = makeSut(true, false)
    const overlay = sut.getByTestId('dialog-overlay')
    fireEvent.click(overlay)
    expect(onCloseSpy).not.toBeCalled()
  })

  test('Should enable onClose when click on overlay if closeOnOverlayClick is true', () => {
    const { sut, onCloseSpy } = makeSut(true, true)
    const overlay = sut.getByTestId('dialog-overlay')
    fireEvent.click(overlay)
    expect(onCloseSpy).toBeCalled()
  })

  test('Should call onClose when click on close button', () => {
    const { sut, onCloseSpy } = makeSut(true, null)
    const button = sut.getByTestId('dialog-close-button')
    fireEvent.click(button)
    expect(onCloseSpy).toBeCalled()
  })
})
