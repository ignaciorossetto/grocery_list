"use client"

import { ItemListContext } from "@/context/itemListContext"
import { useContext, useState } from "react"
import { Item } from "../../types/types"

const ItemForm = () => {
    const [itemValue, setItemValue] = useState('')
    const {itemsList, setItemsList} = useContext(ItemListContext)
    const handledAddItem = () => {
        if(!itemValue) return alert('Cant be empty')
        setItemsList((prev: Item[])=> ([...prev, {
            name: itemValue,
            quantity: 1
        }]))
        setItemValue('')
    }
    
  return (
    <div
    className="flex flex-wrap gap-5 justify-center px-3 mb-10"
    >
      <input 
      type="text"
      className="px-3 py-2 sm:px-5"
      value={itemValue}
      onChange={(e)=>setItemValue(e.target.value)}
      required
      />
      <button
      className="scale-animation px-5 py-2 bg-green-700 text-white font-semibold"
      onClick={handledAddItem}
      >
      + PRODUCTO 
      </button>

    </div>
  )
}

export default ItemForm