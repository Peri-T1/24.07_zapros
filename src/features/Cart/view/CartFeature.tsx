import { Box } from "@mui/material"
import Card from "../../../shared/UI/Card"
import { CartItems } from "../type/CartFeatureType"


const CartFeature = () => {
    const cartData: CartItems[] | [] = JSON.parse(localStorage.getItem("cartData") || "[]")

    return (

        <Box sx={{display: 'flex', gap:'24px', flexWrap:'wrap'}}>
            {cartData?.map((item) => (
                <Card cardData={item} inCart={true} />
            ))
            }
        </Box>
    )
}
export default CartFeature