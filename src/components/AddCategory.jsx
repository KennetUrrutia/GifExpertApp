import { useState } from "react"

const AddCategory = (props) => {
  const [inputValue, setInputValue] = useState('')
  const { onAddCategory } = props

  const handleChange = (event) => {
    setInputValue(event.target.value)
  }

  const handleSubmit = (event) => {
    onAddCategory(inputValue.trim())
  }

  return (
    <>
      <form action='#' onSubmit={handleSubmit}>
        <input
          type='text'
          id="category"
          placeholder="Ingrese una categoría"
          onChange={handleChange}
          value={inputValue}
          required
        />
        {/* <button type="submit">agregar</button> */}
      </form>
    </>
  )
}

export default AddCategory