import React from 'react'
import Styles from './dialog-styles.scss'
import CLOSE_ICON from '@/presentation/assets/icons/close.svg'

type Props = {
  title?: string
  isOpen: boolean
  closeOnOverlayClick: boolean
  children?: React.ReactNode
  onClose: () => void
}

const Dialog: React.FC<Props> = (props: Props) => {
  const {
    title,
    isOpen,
    closeOnOverlayClick,
    onClose,
    children
  } = props

  return (
    <>
      {isOpen && (
        <div data-testid='dialog-wrap' className={Styles.dialog}>
          <div data-testid='dialog-overlay' className={Styles.background} onClick={() => closeOnOverlayClick && onClose()} />
          <div className={Styles['inner-container']}>
            <div className={Styles['title-container']}>
              <span data-testid='dialog-title'>{title}</span>
              <img src={CLOSE_ICON} onClick={onClose} />
            </div>
            {children}
          </div>
        </div>
      )}
    </>
  )
}

export default Dialog
