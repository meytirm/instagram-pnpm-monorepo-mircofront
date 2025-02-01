import { ComponentProps } from 'react'

function BaseButton(props: ComponentProps<'button'>) {
  return <button {...props} />
}

export default BaseButton
