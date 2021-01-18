import React, { createContext } from 'react'
import Context from './Context'

export const UserContext = createContext()
export const TokenContext = createContext()

export default function CustomHookDemo() {

    return (
        <div>
            <UserContext.Provider value={{name:'yukiice',age:18}}>
                <TokenContext.Provider value="dadadadas">
                    <Context></Context>
                </TokenContext.Provider>
            </UserContext.Provider>
        </div>
    )
}
