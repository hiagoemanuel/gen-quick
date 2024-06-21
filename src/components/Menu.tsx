import { useContext } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import { MenuContext } from '../contexts/MenuContext'
import { Button } from './Button'

import Theme from '../assets/theme.svg'
import History from '../assets/history.svg'
import Github from '../assets/github.svg'
import Close from '../assets/close.svg'

export const Menu = () => {
  const { isOpen, setIsOpen } = useContext(MenuContext)

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.section
          className="fixed top-0 left-0 w-full h-svh bg-dark/50 xs:hidden flex flex-col justify-end z-40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { delay: 0.25 } }}
          transition={{ duration: 0.25 }}
        >
          <motion.div
            className="p-5 rounded-t-xl bg-dark"
            initial={{ y: '50vh' }}
            animate={{ y: 0, transition: { delay: 0.25, type: 'just' } }}
            exit={{ y: '50vh' }}
            transition={{ duration: 0.25, ease: 'circOut' }}
          >
            <div className="pb-3 border-b-2 border-b-grey mb-3 flex flex-col gap-2">
              <Button icon={<Theme />} label="Mudar Tema" color="light" wSize="w-full" />
              <Button icon={<History />} label="Histórico" color="light" wSize="w-full" />
              <a href="https://github.com/hiagoemanuel/gen-quick" target="_blank">
                <Button icon={<Github />} label="GitHub" color="light" wSize="w-full" />
              </a>
            </div>
            <div onClick={() => setIsOpen(false)}>
              <Button icon={<Close />} label="Fechar Menu" color="light" wSize="w-full" />
            </div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  )
}
