import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState} from "../../../app/store"
import { fetchTodo } from "../model/dataSlice"
import Card from "../../../shared/UI/Card"
import { Box } from "@mui/material"



const Data = () => {
     
    const dispatch = useDispatch<AppDispatch>()

    useEffect(() => {
         dispatch(fetchTodo())
        // dispatch(fetchWAxios())
    }, [])

    const { todo } = useSelector((state: RootState) => state.todo)
    // console.log(todo)
    return (
        <Box sx={{display: 'flex', gap:'24px', flexWrap:'wrap' }}>
        {
        todo?.map((item) => (
            <Card key={item.id} cardData={item} />
        ))
    }</Box>
    )
}

export default Data