"use client"

import { createContext, useEffect, useState } from "react"

import { Item } from "../../types/types"


export const ItemListContext = createContext<any>({})

const ItemListProvider = ({children}: {children: React.ReactNode}) => {
    const itemListFromStorage:Item[] | false = typeof window !== 'undefined' && localStorage.getItem("itemsList") ? JSON.parse(localStorage.getItem('itemsList')!) : false
    const [itemsList, setItemsList] = useState<Item[]>(itemListFromStorage || [])

    useEffect(()=> {
        localStorage.setItem("itemsList", JSON.stringify(itemsList))
    },[itemsList])

    return(
        <ItemListContext.Provider
        value={{itemsList, setItemsList}}
        >
            {children}
        </ItemListContext.Provider>
    )

}

export default ItemListProvider