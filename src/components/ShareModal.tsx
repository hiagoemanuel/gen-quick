import { useContext } from 'react'
import { ShareContext } from '../contexts/ShareContext'
import { useModalProps } from '../hooks/useModal'
import { Button } from './Button'
import { Modal } from './Modal'

import Download from '../assets/download.svg'
import Embed from '../assets/embed.svg'
import WhatsApp from '../assets/whatsapp.svg'

export const ShareModal = ({ hook }: { hook: useModalProps }) => {
  const { links } = useContext(ShareContext)

  const copyEmbed = () => {
    navigator.clipboard.writeText(links?.embed ?? '')
    alert('Seu Código QR foi copiado com sucesso!')
  }

  return (
    <Modal hook={hook} title="Compartilhar Código QR">
      <div className="flex flex-col gap-1">
        <a href={links?.dowload} download="my-qrcode">
          <Button className="w-full" color="light" icon={<Download />} label="Download" />
        </a>
        <Button onClick={copyEmbed} color="light" icon={<Embed />} label="Incorporar" />
        <a
          href={`https://api.whatsapp.com/send/?text=${links?.whatsapp}&type=custom_url&app_absent=0`}
          target="_blank"
        >
          <Button className="w-full" color="light" icon={<WhatsApp />} label="WhatsApp" />
        </a>
      </div>
    </Modal>
  )
}
