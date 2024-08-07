import { AnimatePresence, motion } from 'framer-motion'

import { HistoryButton } from './HistoryButton'
import { Button } from './Button'

import Close from '../assets/close.svg'
import { useContext } from 'react'
import { HistoryContext } from '../contexts/HistoryContext'

interface HeaderHistoryProps {
  historyIsOpen: boolean
  setHistoryIsOpen: (historyIsOpen: boolean) => void
}

export const HeaderHistory = ({ historyIsOpen, setHistoryIsOpen }: HeaderHistoryProps) => {
  const { storedHistory } = useContext(HistoryContext)

  return (
    <AnimatePresence>
      {historyIsOpen && (
        <motion.section
          className="fixed top-0 left-0 w-full h-svh bg-dark/50 hidden xs:flex justify-center h-xs:items-center items-end z-40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { delay: 0.25 } }}
          transition={{ duration: 0.25 }}
        >
          <motion.div
            className="w-96 p-5 bg-dark dark:bg-light rounded-xl"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div className="pb-3 max-h-64 border-b-2 border-b-grey mb-3 flex flex-col gap-2 overflow-y-scroll no-scroll">
              {storedHistory.length !== 0 ? (
                storedHistory.map((qr, i) => <HistoryButton {...qr} key={i} />)
              ) : (
                <p className="text-light dark:text-dark text-center">
                  Nenhuma atividade encontrada
                </p>
              )}
            </div>
            <Button
              className="w-full"
              onClick={() => setHistoryIsOpen(false)}
              icon={<Close />}
              label="Fechar Histórico"
              color="light"
            />
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  )
}
