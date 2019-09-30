import React, { createContext, Dispatch, FC, useContext, useReducer } from "react"

export interface Store {
    foo: string
    bar: string
    fooBar: string
}

export interface Action {
    type: "foo" | "bar"
    value: string
}

export const StoreContext = createContext<Store>({} as Store)
export const useStore = () => useContext<Store>(StoreContext)

export const DispatchContext = createContext<Dispatch<Action>>((action: Action) => {})
export const useDispatch = () => useContext<Dispatch<Action>>(DispatchContext)

function reducer(store: Store, action: Action) {
    switch (action.type) {
        case "foo":
            return {
                ...store,
                foo: action.value,
                fooBar: `${action.value} ${store.bar}`
            }
        case "bar":
            return {
                ...store,
                bar: action.value,
                fooBar: `${store.foo} ${action.value}`
            }
        default:
            throw new Error()
    }
}

const StoreProvider: FC = ({ children }) => {
    const [store, dispatch] = useReducer(reducer, {
        foo: "old foo",
        bar: "old bar",
        fooBar: "old foo old bar"
    })

    return (
        <DispatchContext.Provider value={dispatch}>
            <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
        </DispatchContext.Provider>
    )
}

export default StoreProvider
