import { useAppSelector } from "../useHook/useReduxHook"

const Checkout=()=>{
    const state=useAppSelector(state=>state.basket)
    const totalPrice=state.cartItems!.reduce((a,c)=>a+c.price,0)
    const userName=useAppSelector(state=>state.user.userInfo.name)
    return(
   <div>
       <h1>thanks {userName}  </h1>
       <h1>your total price is {totalPrice}</h1>

   </div>
    )
}

export default Checkout