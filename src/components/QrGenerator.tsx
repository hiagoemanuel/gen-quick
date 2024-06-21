import { Button } from './Button'

import Share from '../assets/share.svg'
import Edit from '../assets/edit.svg'
import QrCode from '../assets/qrCode.svg'

export const QrGenerator = () => {
  return (
    <main className="grow py-1 flex justify-center items-center">
      <div className="w-full flex flex-col lg:flex-row justify-center items-center gap-4">
        <div>
          <div className="w-72 h-72 p-8 border-4 mb-2 rounded border-dark dark:border-light">
            <div className="w-full h-full bg-dark/50 dark:bg-light/50 flex justify-center items-center">
              QR CODE
            </div>
          </div>
          <div className="flex gap-1">
            <Button color="dark" icon={<Share />} label="Compartilhar" wSize="w-full" />
            <Button color="dark" icon={<Edit />} label="" wSize="w-fit" />
          </div>
        </div>
        <form className="w-full max-w-xl px-4 lg:self-end">
          <textarea
            className="w-full h-48 p-2 border-4 rounded mb-2 border-dark dark:border-light dark:bg-dark text-xl text-dark dark:text-light placeholder:text-dark dark:placeholder:text-light resize-none outline-none"
            placeholder="Insira seu texto *"
          />
          <Button color="dark" icon={<QrCode />} label="Gerar Código QR" wSize="w-full" />
        </form>
      </div>
    </main>
  )
}
