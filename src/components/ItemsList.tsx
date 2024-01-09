"use client"
import { useContext } from "react"
import { ItemListContext } from "@/context/itemListContext"
import { Item } from "../../types/types"
import ItemCard from "./ItemCard"



const ItemsList = () => {
    const {itemsList, setItemsList} = useContext(ItemListContext)
    const handleDeleteItem = (itemName:string) => {
        setItemsList(itemsList.filter((e:Item)=> e.name !== itemName) )
    }
    const handleChangeQuantity = (name:string, sign:string) => {
        const index = itemsList.findIndex((e: Item)=> e.name === name)
        const newArr = [...itemsList]
        if (sign === '+') {     
            newArr[index].quantity += 1
        } else {
            if (newArr[index].quantity > 1) {
                newArr[index].quantity -= 1
            }
        }
        return setItemsList([...newArr])
    }
  return (
    <div
    className="flex flex-col gap-5 items-center w-full p-2 justify-center"
    >
        {
            itemsList.length === 0 && 
            <span
            className="font-bold text-[30px]"
            >
                No hay productos
            </span>
        }
        { itemsList && 
            itemsList?.map((item: any, index: number) => 
             <ItemCard item={item} key={index} handleDeleteItem={handleDeleteItem}
             handleChangeQuantity={handleChangeQuantity}
             />
            )
        }
    </div>
  )
}

export default ItemsList