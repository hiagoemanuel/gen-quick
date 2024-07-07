import { useContext, useEffect, useState } from 'react'
import { useForm, SubmitHandler, SubmitErrorHandler } from 'react-hook-form'

import { QrColorsContext } from '../contexts/QrColorsContext'
import { useModalProps } from '../hooks/useModal'
import { Button } from './Button'
import { Modal } from './Modal'

import Edit from '../assets/edit.svg'

type UpdateColorForm = {
  background: { inputColor: string; inputText: string }
  qrcode: { inputColor: string; inputText: string }
}

export const EditModal = ({ hook }: { hook: useModalProps }) => {
  const [prevColor, setPrevColor] = useState<string>('')
  const { bgColor, qrColor, setBgColor, setQrColor } = useContext(QrColorsContext)
  const {
    handleSubmit,
    register,
    watch,
    setError,
    setValue,
    formState: { errors },
  } = useForm<UpdateColorForm>({
    defaultValues: {
      background: { inputColor: bgColor, inputText: bgColor },
      qrcode: { inputColor: qrColor, inputText: qrColor },
    },
  })

  const inputsWatch = watch()

  useEffect(() => {
    const watchBackground = watch('background')
    const watchQrcode = watch('qrcode')

    const watches = [watchBackground, watchQrcode]

    watches.map((watch, index) => {
      const currentWatch = watch === watchBackground ? 'background' : 'qrcode'

      if (watch.inputColor !== watches[index].inputText) {
        if (watch.inputColor !== prevColor) {
          setValue(`${currentWatch}.inputText`, watch.inputColor)
          setPrevColor(watch.inputColor)
          return
        }
        if (watch.inputText !== prevColor) {
          setValue(`${currentWatch}.inputColor`, watch.inputText)
          setPrevColor(watch.inputText)
          return
        }
      }
    })
  }, [prevColor, inputsWatch, setValue, watch])

  const updateColors: SubmitHandler<UpdateColorForm> = ({ background, qrcode }) => {
    setBgColor(background.inputColor)
    setQrColor(qrcode.inputColor)
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
            <div className="w-12 h-12 rounded border-2 border-light dark:border-dark overflow-hidden">
              <input
                className="p-0 w-[150%] h-[150%] -m-[25%]"
                type="color"
                {...register('background.inputColor', { required: true })}
              />
            </div>
            <div>
              <h5 className="text-xs text-light dark:text-dark">Cor de Fundo</h5>
              <input
                className="w-32 px-1 outline-none rounded border-2 border-light dark:border-dark bg-dark dark:bg-light text-lg text-light dark:text-dark"
                type="text"
                autoComplete="off"
                maxLength={7}
                {...register('background.inputText', {
                  required: true,
                  pattern: /^#[0-9A-F]{6}$/i,
                })}
              />
            </div>
          </div>
          <div className="flex gap-1">
            <div className="w-12 h-12 rounded border-2 border-light dark:border-dark overflow-hidden">
              <input
                className="p-0 w-[150%] h-[150%] -m-[25%]"
                type="color"
                {...register('qrcode.inputColor', { required: true })}
              />
            </div>
            <div>
              <h5 className="text-xs text-light dark:text-dark">Código QR</h5>
              <input
                className="w-32 px-1 outline-none rounded border-2 border-light dark:border-dark bg-dark dark:bg-light text-lg text-light dark:text-dark"
                defaultValue={qrColor}
                type="text"
                autoComplete="off"
                maxLength={7}
                {...register('qrcode.inputText', {
                  pattern: /^#[0-9A-F]{6}$/i,
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
