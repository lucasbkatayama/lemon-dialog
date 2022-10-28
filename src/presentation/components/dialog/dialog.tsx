import React from 'react'
import Styles from './dialog-styles.scss'
import CLOSE_ICON from '@/presentation/assets/icons/close.svg'

type CloseType = () => void

type Props = {
  title?: string
  isOpen: boolean
  closeOnOverlayClick: boolean
  children?: React.ReactNode
  onClose: CloseType
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
          <div className={Styles.background} onClick={() => closeOnOverlayClick && onClose()} />
          <div className={Styles['inner-container']}>
            <div className={Styles['title-container']}>
              <span>{title}</span>
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
