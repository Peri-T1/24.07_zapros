import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState} from "../../../app/store"
import {fetchCountry } from "../model/homeWorkSlice"

const HomeWork = () => {
     
    const dispatch = useDispatch<AppDispatch>()

    useEffect(() => {
        dispatch(fetchCountry())
    }, [])

    const country = useSelector((state: RootState) => state.country)
    console.log(country)
    return (
        <></>
    )
}

export default HomeWork