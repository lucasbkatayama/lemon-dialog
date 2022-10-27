import React from 'react'
import Styles from './home-styles.scss'
import LOGO from '@/presentation/assets/img/logo.svg'
import CLOSE_ICON from '@/presentation/assets/icons/close.svg'
import GITHUB_ICON from '@/presentation/assets/icons/github.svg'

const Home: React.FC = () => {
  return (
    <div className={Styles.home}>
      <header className={Styles.header}>
        <img width='114px' src={LOGO} />
        <h1>Desafio - React</h1>
      </header>
      <section className={Styles.section}>
        <button>Open Dialog</button>
      </section>
      <footer className={Styles.footer}>
        <a href="http://www.google.com">
          <img src={GITHUB_ICON} />
          Link do projeto
        </a>
      </footer>
      {false && (
        <div className={Styles.overlay}>
          <div>
            <img src={CLOSE_ICON} />
            <span>Title</span>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor idolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor idor sit amet, consectetur adipiscing elit, sed do eiusmod tempor idor sit amet, consectetur adipiscing elit, sed do eiusmod tempor idor sit amet, consectetur adipiscing elit, sed do eiusmod tempor idor sit amet, consectetur adipiscing elit, sed do eiusmod tempor idor sit amet, consectetur adipiscing elit, sed do eiusmod tempor idor sit amet, consectetur adipiscing elit, sed do eiusmod tempor ior sit amet, consectetur adipiscing elit, sed do eiusmod tempor idor sit amet, consectetur adipiscing elit, sed do eiusmod tempor iddor sit amet, consectetur adipiscing elit, sed do eiusmod tempor idolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor idolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor idolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor idolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor idolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor idolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit Lorem ipsum dolor sit amet,</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default Home
