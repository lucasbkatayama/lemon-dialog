import React, { memo } from 'react'
import Styles from './footer-styles.scss'
import GITHUB_ICON from '@/presentation/assets/icons/github.svg'

const Footer: React.FC = () => {
  return (
    <footer className={Styles.footer}>
      <a target='blank' href="https://github.com/lucasbkatayama/lemon-dialog">
        <img src={GITHUB_ICON} />
        Link do projeto
      </a>
    </footer>
  )
}

export default memo(Footer)
