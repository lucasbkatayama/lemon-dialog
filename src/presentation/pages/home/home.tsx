import React from 'react'
import Styles from './home-styles.scss'
import { Dialog, Footer, Header } from '@/presentation/components'

const Home: React.FC = () => {
  return (
    <div className={Styles.home}>
      <Header />
      <section className={Styles.section}>
        <button>Open Dialog</button>
      </section>
      <Footer />
      {false && <Dialog />}
    </div>
  )
}

export default Home
