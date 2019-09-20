import React, { createContext, Dispatch, FC, useContext, useReducer } from "react"

export interface Store {
    storeA: {
        a: number
    }
    storeB: {
        b: number
    }
    storeC: {
        c: number
    }
}

export interface Action {
    type: "a" | "b"
    value: number
}

export const StoreContext = createContext<Store>({} as Store)

export const useStore = () => useContext<Store>(StoreContext)

export const DispatchContext = createContext<Dispatch<Action>>((action: Action) => {})

export const useDispatch = () => useContext<Dispatch<Action>>(DispatchContext)

function reducer(store: Store, action: Action) {
    switch (action.type) {
        case "a":
            return {
                ...store,
                storeA: {
                    ...store.storeA,
                    a: action.value
                },
                storeC: {
                    ...store.storeC,
                    c: action.value + store.storeB.b
                }
            }
        case "b":
            return {
                ...store,
                storeB: {
                    ...store.storeA,
                    b: action.value
                },
                storeC: {
                    ...store.storeC,
                    c: store.storeA.a + action.value
                }
            }
        default:
            throw new Error()
    }
}

const StoreProvider: FC = ({ children }) => {
    const [store, dispatch] = useReducer(reducer, {
        storeA: {
            a: 0
        },
        storeB: {
            b: 0
        },
        storeC: {
            c: 0
        }
    })

    return (
        <DispatchContext.Provider value={dispatch}>
            <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
        </DispatchContext.Provider>
    )
}

export default StoreProvider
