import React, { FC } from "react"
import { useDispatch, useStore } from "./StoreProvider"
import { Button } from "@material-ui/core"

const Bar: FC = () => {
    const { bar } = useStore()
    const dispatch = useDispatch()

    const changeBar = () => dispatch({ type: "bar", value: "new bar" })

    return (
        <>
            <p>{bar}</p>
            <Button variant="contained" onClick={changeBar}>
                Change Bar
            </Button>
        </>
    )
}

export default Bar
