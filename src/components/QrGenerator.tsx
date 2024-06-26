import { toCanvas } from 'qrcode'
import { SubmitHandler, useForm } from 'react-hook-form'

import { Button } from './Button'

import Share from '../assets/share.svg'
import Edit from '../assets/edit.svg'
import QrCode from '../assets/qrCode.svg'
import { ShareModal } from './ShareModal'
import { useModal } from '../hooks/useModal'
import { EditModal } from './EditModal'
import { useContext, useRef, useState } from 'react'
import { QrColorsContext } from '../contexts/QrColorsContext'

type formParams = { text: string }

export const QrGenerator = () => {
  const { handleSubmit, register } = useForm<formParams>()
  const { bgColor, qrColor } = useContext(QrColorsContext)
  const qrRef = useRef<HTMLCanvasElement>(null)
  const [isGenerated, setIsGenerated] = useState<boolean>(false)
  const share = useModal()
  const edit = useModal()

  const generateQr: SubmitHandler<formParams> = async ({ text }) => {
    await toCanvas(qrRef.current, text, {
      width: 216,
      margin: 1,
      color: { dark: qrColor, light: bgColor },
    })
    setIsGenerated(true)
  }

  return (
    <main className="grow py-1 flex justify-center items-center">
      <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-4">
        <div>
          <div className="w-72 h-72 p-8 border-4 mb-2 rounded border-dark dark:border-light">
            <canvas ref={qrRef} width={0} height={0} />
            {!isGenerated && (
              <div className="w-full h-full p-8 border-[2rem] border-dark dark:border-light">
                <div className="w-full h-full bg-dark dark:bg-light" />
              </div>
            )}
          </div>
          <div className="flex gap-1">
            <Button
              className="w-full"
              onClick={share.openModal}
              color="dark"
              icon={<Share />}
              label="Compartilhar"
            />
            <Button onClick={edit.openModal} color="dark" icon={<Edit />} label={false} />
          </div>
        </div>
        <form className="w-full max-w-xl px-4 lg:self-end" onSubmit={handleSubmit(generateQr)}>
          <textarea
            className="w-full h-48 p-2 border-4 rounded mb-2 border-dark dark:border-light dark:bg-dark text-xl text-dark dark:text-light placeholder:text-dark dark:placeholder:text-light resize-none outline-none"
            {...register('text')}
            placeholder="Insira seu texto *"
          />
          <Button
            className="w-full lg:w-96 lg:ml-auto"
            type="submit"
            color="dark"
            icon={<QrCode />}
            label="Gerar Código QR"
          />
        </form>
      </div>
      <ShareModal hook={share} />
      <EditModal hook={edit} />
    </main>
  )
}
