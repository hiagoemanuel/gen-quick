import { useState } from 'react'

export interface useModalProps {
  openModal: () => void
  closeModal: () => void
  isOpen: boolean
}

export const useModal = (): useModalProps => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  return {
    openModal,
    closeModal,
    isOpen,
  }
}
