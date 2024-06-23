import { useModalProps } from '../hooks/useModal'
import { Button } from './Button'
import { Modal } from './Modal'

import Download from '../assets/download.svg'
import Embed from '../assets/embed.svg'

export const ShareModal = ({ hook }: { hook: useModalProps }) => {
  return (
    <Modal hook={hook} title="Compartilhar Código QR">
      <div className="flex flex-col gap-1">
        <Button color="light" icon={<Download />} label="Dowload .jpeg" />
        <Button color="light" icon={<Embed />} label="Incorporar" />
      </div>
    </Modal>
  )
}
