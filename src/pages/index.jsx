import { useRef } from "react"
import { useState } from "react"
import { v4 } from "uuid"
import { AddButton, SectionContainer } from "./styles"

function Home() {

  const [newProducts, setNewProducts] = useState([])
  const inputRef = useRef()
  const priceRef = useRef({})



  function buttonClick() {
    setNewProducts([{ id: v4(), name: inputRef.current.value, price: "" },
    ...newProducts])
    priceRef.current[newProducts.id] = null
    inputRef.current.value = ""
  }

  function deleteProduct(id) {
    console.log(id)
    setNewProducts(newProducts.filter(product => product.id !== id))
    delete priceRef.current[id]

  }

  function addPrice(id) {
    const price = priceRef.current[id]?.value || ""; // Obtém o valor do preço
    setNewProducts(newProducts.map((product) =>
      product.id === id ? { ...product, price: price } : product
    ));
    priceRef.current[id].value = ""; // Limpa o campo do preço
  }

  return (
    <SectionContainer>
      <h1>Lista de Compras</h1>
      <input
      className="inputProduct"
       placeholder="produto..."
        ref={inputRef}>
      </input>
      <AddButton
        onClick={buttonClick}>
        Adicionar
      </AddButton>

      {newProducts.map((product) => (
        <div>
          <ul key={product.id}>
            <li>{product.name}</li>
          </ul>
          
          <p>{product.price}</p>
          <input
          className="inputPrice"
            placeholder="preço..."
            ref={(el) => priceRef.current[product.id] = el}>
          </input>
          
          <button
          className="btnPrice"
            onClick={() => addPrice(product.id)}>
            Adicionar preço
          </button>
          


          <button
            className="delet"
            onClick={() => deleteProduct(product.id)}>
            Deletar Item
          </button>
        </div>
      ))}

    </SectionContainer>

  )
}

export default Home
