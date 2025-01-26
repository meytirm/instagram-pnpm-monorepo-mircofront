function BorderedInput({ label, value, onInput }: Props) {
  const labelTransformedClass = value ? 'bordered-input__title--active' : ''
  function updateInput(e: React.ChangeEvent<HTMLInputElement>) {
    onInput(e.target.value)
  }
  return (
    <div className="bordered-input">
      <label className="bordered-input__label">
        <span className={`bordered-input__title ${labelTransformedClass}`}>
          {label}
        </span>
        <input
          className="bordered-input__input"
          type="text"
          value={value}
          onInput={updateInput}
        />
      </label>
    </div>
  )
}

export default BorderedInput

interface Props {
  label: string
  value: string
  onInput: (value: string) => void
}
