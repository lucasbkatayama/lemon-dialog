import React, { memo } from 'react'
import Styles from './header-styles.scss'
import LOGO from '@/presentation/assets/img/logo.svg'

const Header: React.FC = () => {
  return (
    <header className={Styles.header}>
      <img width='114px' src={LOGO} />
      <h1>Desafio - React</h1>
    </header>
  )
}

export default memo(Header)
