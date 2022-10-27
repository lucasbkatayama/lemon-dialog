import React from 'react'
import Styles from './header-styles.scss'
import CLOSE_ICON from '@/presentation/assets/icons/close.svg'

const Dialog: React.FC = () => {
  return (
    <div className={Styles.overlay}>
      <div>
        <img src={CLOSE_ICON} />
        <span>Title</span>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor idolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor idor sit amet, consectetur adipiscing elit, sed do eiusmod tempor idor sit amet, consectetur adipiscing elit, sed do eiusmod tempor idor sit amet, consectetur adipiscing elit, sed do eiusmod tempor idor sit amet, consectetur adipiscing elit, sed do eiusmod tempor idor sit amet, consectetur adipiscing elit, sed do eiusmod tempor idor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ior sit amet, consectetur adipiscing elit, sed do eiusmod tempor idor sit amet, consectetur adipiscing elit, sed do eiusmod tempor iddor sit amet, consectetur adipiscing elit, sed do eiusmod tempor idolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor idolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor idolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor idolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor idolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor idolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit Lorem ipsum dolor sit amet,</p>
      </div>
    </div>
  )
}

export default Dialog
