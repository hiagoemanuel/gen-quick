import { useContext } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

import { MenuContext } from '../contexts/MenuContext'
import { Button } from './Button'

import Theme from '../assets/theme.svg'
import History from '../assets/history.svg'
import Github from '../assets/github.svg'
import Close from '../assets/close.svg'
import { ThemeContext } from '../contexts/ThemeContext'

export const Menu = () => {
  const { isOpen, setIsOpen } = useContext(MenuContext)
  const { switchTheme } = useContext(ThemeContext)

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
            className="p-5 rounded-t-xl bg-dark dark:bg-light"
            initial={{ y: '50vh' }}
            animate={{ y: 0, transition: { delay: 0.25, type: 'just' } }}
            exit={{ y: '50vh' }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
          >
            <div className="pb-3 border-b-2 border-b-grey mb-3 flex flex-col gap-2">
              <Button onClick={switchTheme} icon={<Theme />} label="Mudar Tema" color="light" />
              <Button icon={<History />} label="Histórico" color="light" />
              <a href="https://github.com/hiagoemanuel/gen-quick" target="_blank">
                <Button className="w-full" icon={<Github />} label="GitHub" color="light" />
              </a>
            </div>
            <Button
              className="w-full"
              onClick={() => setIsOpen(false)}
              icon={<Close />}
              label="Fechar Menu"
              color="light"
            />
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  )
}
