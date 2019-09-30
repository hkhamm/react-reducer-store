import React, { FC } from "react"
import { useStore } from "./StoreProvider"

const FooBar: FC = () => {
    const { fooBar } = useStore()
    return <p>{fooBar}</p>
}

export default FooBar
