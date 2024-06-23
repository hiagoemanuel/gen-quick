import { useContext } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

import { MenuContext } from '../contexts/MenuContext'

import ReturnArrow from '../assets/returnArrow.svg'
import { Button } from './Button'
import { HistoryButton } from './HistoryButton'

export const MenuHistory = ({ isOpen }: { isOpen: boolean }) => {
  const { setHistoryOpen } = useContext(MenuContext)

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="absolute bottom-0 w-full p-5 bg-dark dark:bg-light rounded-t-xl"
          initial={{ x: '100vw' }}
          animate={{ x: 0 }}
          exit={{ x: '100vw' }}
          transition={{ duration: 0.25, delay: 0.25, ease: 'easeInOut' }}
        >
          <div className="pb-3 max-h-64 border-b-2 border-b-grey mb-3 flex flex-col gap-2 overflow-y-scroll no-scroll">
            <HistoryButton label="hiagoemanuelhiagoemanuelhiagoemanuel" />
            <HistoryButton label="hiagoemanuel" />
            <HistoryButton label="hiagoemanuel" />
            <HistoryButton label="hiagoemanuel" />
            <HistoryButton label="hiagoemanuel" />
          </div>
          <Button
            className="w-full"
            onClick={() => setHistoryOpen(false)}
            icon={<ReturnArrow />}
            label="Voltar"
            color="light"
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
