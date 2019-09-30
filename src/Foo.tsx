import React, { FC } from "react"
import { useDispatch, useStore } from "./StoreProvider"
import { Button } from "@material-ui/core"

const Foo: FC = () => {
    const { foo } = useStore()
    const dispatch = useDispatch()

    const changeFoo = () => dispatch({ type: "foo", value: "new foo" })

    return (
        <>
            <p>{foo}</p>
            <Button variant="contained" onClick={changeFoo}>
                Change Foo
            </Button>
        </>
    )
}

export default Foo
