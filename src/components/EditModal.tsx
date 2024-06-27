import { useContext, useEffect } from 'react'
import { useForm, SubmitHandler, SubmitErrorHandler } from 'react-hook-form'

import { QrColorsContext } from '../contexts/QrColorsContext'
import { useModalProps } from '../hooks/useModal'
import { Button } from './Button'
import { Modal } from './Modal'

import Edit from '../assets/edit.svg'

type UpdateColorForm = {
  bgColor: string
  qrColor: string
}

export const EditModal = ({ hook }: { hook: useModalProps }) => {
  const { bgColor, qrColor, setBgColor, setQrColor } = useContext(QrColorsContext)
  const {
    handleSubmit,
    register,
    watch,
    setError,
    formState: { errors },
  } = useForm<UpdateColorForm>()

  useEffect(() => watch((v) => v).unsubscribe(), [watch])

  const updateColors: SubmitHandler<UpdateColorForm> = ({ bgColor, qrColor }) => {
    setBgColor(bgColor)
    setQrColor(qrColor)
    hook.closeModal()
  }

  const errorHandler: SubmitErrorHandler<UpdateColorForm> = () => {
    setError('root', { message: 'Cor inválida! Utilize o formato hex (ex: #nnnnnn)' })
  }

  return (
    <Modal title="Editar Cores do Código QR" hook={hook}>
      <form className="flex flex-col gap-2" onSubmit={handleSubmit(updateColors, errorHandler)}>
        <div className="flex flex-col xs:flex-row items-center gap-2">
          <div className="flex gap-1">
            <div
              className="w-12 h-12 rounded border-2 border-light dark:border-dark"
              style={{ background: watch().bgColor ?? bgColor }}
            />
            <div>
              <h5 className="text-xs text-light dark:text-dark">Cor de Fundo</h5>
              <input
                className="w-32 px-1 outline-none rounded border-2 border-light dark:border-dark bg-dark dark:bg-light text-lg text-light dark:text-dark"
                defaultValue={bgColor}
                type="text"
                autoComplete="off"
                maxLength={9}
                {...register('bgColor', {
                  pattern: /^#[0-9A-F]{6}[0-9a-f]{0,2}$/i,
                  required: true,
                })}
              />
            </div>
          </div>
          <div className="flex gap-1">
            <div
              className="w-12 h-12 rounded border-2 border-light dark:border-dark"
              style={{ background: watch().qrColor ?? qrColor }}
            />
            <div>
              <h5 className="text-xs text-light dark:text-dark">Código QR</h5>
              <input
                className="w-32 px-1 outline-none rounded border-2 border-light dark:border-dark bg-dark dark:bg-light text-lg text-light dark:text-dark"
                defaultValue={qrColor}
                type="text"
                autoComplete="off"
                maxLength={9}
                {...register('qrColor', {
                  pattern: /^#[0-9A-F]{6}[0-9a-f]{0,2}$/i,
                  required: true,
                })}
              />
            </div>
          </div>
        </div>
        <div>
          <p className="text-sm font-medium text-error text-center">
            {(errors.root && errors.root.message) ?? (
              <span className="invisible">message error</span>
            )}
          </p>
          <Button
            className="w-full"
            type="submit"
            color="light"
            icon={<Edit />}
            label="Atualizar Cores"
          />
        </div>
      </form>
    </Modal>
  )
}
