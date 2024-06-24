import { useModalProps } from '../hooks/useModal'
import { Button } from './Button'
import { Modal } from './Modal'

import Edit from '../assets/edit.svg'

export const EditModal = ({ hook }: { hook: useModalProps }) => {
  return (
    <Modal title="Editar Cores do Código QR" hook={hook}>
      <form className="flex flex-col gap-3">
        <div className="flex flex-col xs:flex-row items-center gap-2">
          <div className="flex gap-1">
            <div className="w-12 h-12 rounded border-2 border-light dark:border-dark" />
            <div>
              <h5 className="text-xs text-light dark:text-dark">Cor de Fundo</h5>
              <input
                className="w-32 px-1 outline-none rounded border-2 border-light dark:border-dark bg-dark dark:bg-light text-lg text-light dark:text-dark"
                maxLength={9}
                type="text"
              />
            </div>
          </div>
          <div className="flex gap-1">
            <div className="w-12 h-12 rounded border-2 border-light dark:border-dark" />
            <div>
              <h5 className="text-xs text-light dark:text-dark">Código QR</h5>
              <input
                className="w-32 px-1 outline-none rounded border-2 border-light dark:border-dark bg-dark dark:bg-light text-lg text-light dark:text-dark"
                maxLength={9}
                type="text"
              />
            </div>
          </div>
        </div>
        <Button className="w-full" color="light" icon={<Edit />} label="Atualizar Cores" />
      </form>
    </Modal>
  )
}
