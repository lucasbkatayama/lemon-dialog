import React, { useState } from 'react'
import Styles from './home-styles.scss'
import { Dialog, Footer, Header } from '@/presentation/components'

const Home: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <div className={Styles.home}>
      <Header />
      <section className={Styles.section}>
        <button>Open Dialog</button>
      </section>
      <Footer />
      <Dialog
        title='Title'
        isOpen={isOpen}
        closeOnOverlayClick={true}
        onClose={() => setIsOpen(false)}
      >
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit Lorem ipsum dolor sit amet,
        </p>
      </Dialog>
    </div>
  )
}

export default Home
