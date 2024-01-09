import { MdDelete } from "react-icons/md";
import { Item } from "../../types/types";

type ItemCardProps = {
    item: Item,
    handleDeleteItem: Function,
    handleChangeQuantity: Function
}

const ItemCard = ({item, handleDeleteItem, handleChangeQuantity}: ItemCardProps) => {

    

  return (
    <div
            className="bg-white/75 rounded-xl shadow-2xl p-5 w-full sm:w-[75%] flex gap-5 justify-between "
            >
                <div className="flex w-[100%] justify-between items-center flex-wrap">
                    <div
                    className="text break-words text-pretty "
                    >
                        {item?.name?.toLocaleUpperCase()}
                    </div>
                    <div className="flex gap-3 text-[20px] items-center">
                        <button
                        onClick={()=>handleChangeQuantity(item.name, '-')}
                        >-</button>
                        <div>
                            {item?.quantity}
                        </div>
                        <button
                        onClick={()=>handleChangeQuantity(item.name, '+')}
                        >+</button>
                    </div>
                </div>
                    <div>

                    <button
                    className="scale-animation"
                    onClick={()=>handleDeleteItem(item.name)}
                    >
                        <MdDelete className='text-red-500 text-xl'/>
                    </button>
                    </div>
            </div>
  )
}

export default ItemCard