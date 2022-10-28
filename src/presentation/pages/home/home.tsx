import React, { useState } from 'react'
import Styles from './home-styles.scss'
import { Dialog, Footer, Header } from '@/presentation/components'

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
        <p>
          Nosso propósito é dar poder às pessoas e acelerar a transição para a energia sustentável <br />
          <br />
          Você não é apenas um pagador de contas. Chega de pagar caro na conta de luz e não saber o porquê, ou de receber sua conta em papel todo mês e não entender nada do que está escrito. <br />
          <br />
          Acreditamos que o futuro é feito de decisões que tomamos agora e decidimos transformar a experiência com energia no Brasil. <br />
          <br />
          Somos incansáveis na busca das melhores soluções, por isso chega de consumir uma energia que faz mal para o nosso planeta. <br />
          <br />
          Com a Lemon, você sempre – e é sempre mesmo – vai ter uma energia mais barata, mais sustentável e mais digital pro seu negócio. <br />
          <br />
          <br />
          <b>Três princípios que guiam a Lemon</b><br />
          <br />
          - Economia Energia é essencial. E não precisa ser cara. Responsável por fazer funcionar tantos negócios no Brasil, eletricidade também pode ser limpa! Gerar economia é ajudar a realizar sonhos.
          <br />
          <br />
          - Sustentabilidade A produção de energia no mundo é uma das fontes mais poluentes ao meio ambiente. Energia pode ser sustentável e precisa ser acessível! É pra isso que trabalhamos.
          <br />
          <br />
          - Tecnologia Tecnologia é ferramenta. Nossa grande aliada para transformar o mercado de energia e trazer mais simplicidade e poder para as pessoas e seus negócios.
          <br />
        </p>
      </Dialog>
    </div>
  )
}

export default Home
