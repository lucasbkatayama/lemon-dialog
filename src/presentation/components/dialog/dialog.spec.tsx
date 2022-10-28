import React from 'react'
import { render, RenderResult } from '@testing-library/react'
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
})
