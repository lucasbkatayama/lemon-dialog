import React from 'react'
import Styles from './home-styles.scss'
import CLOSE_ICON from '@/presentation/assets/icons/close.svg'
import { Footer, Header } from '@/presentation/components'

const Home: React.FC = () => {
  return (
    <div className={Styles.home}>
      <Header />
      <section className={Styles.section}>
        <button>Open Dialog</button>
      </section>
      <Footer />
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
