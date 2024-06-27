import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import Close from '../assets/close.svg'
import { Button } from './Button'
import { useModalProps } from '../hooks/useModal'

interface ModalProps {
  children: React.ReactNode
  title: string
  hook: useModalProps
}

export const Modal = ({ children, title, hook }: ModalProps) => {
  return (
    <AnimatePresence>
      {hook.isOpen && (
        <motion.section
          className="fixed top-0 left-0 w-full h-svh bg-dark/50 z-40 flex justify-center items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="p-3 rounded bg-dark dark:bg-light"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 1 }}
            transition={{ duration: 0.25 }}
          >
            <header className="pb-2 mb-2 border-b-2 border-grey flex items-center gap-5">
              <h2 className="grow text-light dark:text-dark text-xl font-medium">{title}</h2>
              <Button onClick={hook.closeModal} color="dark" icon={<Close />} label="" />
            </header>
            {children}
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  )
}
