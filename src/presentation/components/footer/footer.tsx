import React, { memo } from 'react'
import Styles from './footer-styles.scss'
import GITHUB_ICON from '@/presentation/assets/icons/github.svg'

const Footer: React.FC = () => {
  return (
    <footer className={Styles.footer}>
      <a href="http://www.google.com">
        <img src={GITHUB_ICON} />
        Link do projeto
      </a>
    </footer>
  )
}

export default memo(Footer)
