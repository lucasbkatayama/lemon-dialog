import React, { useState } from 'react'
import Styles from './home-styles.scss'
import { About, Dialog, Footer, Header } from '@/presentation/components'

const Home: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <div className={Styles.home}>
      <Header />
      <section className={Styles.section}>
        <button
          data-testid='dialog-button'
          onClick={() => setIsOpen(true)}
        >
          Open Dialog
        </button>
      </section>
      <Footer />
      <Dialog
        title='Sobre'
        isOpen={isOpen}
        closeOnOverlayClick={true}
        onClose={() => setIsOpen(false)}
      >
        <About />
      </Dialog>
    </div>
  )
}

export default Home
