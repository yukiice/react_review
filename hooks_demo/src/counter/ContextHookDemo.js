import React,{createContext} from 'react'
import Context from './Context'

export const UserContext = createContext()
export const ThemeContext = createContext()



export default function ContextHookDemo() {
    return (
        <div>
            <UserContext.Provider value={{name:'yukiice',age:18}}>
                <ThemeContext.Provider value={{name:"dell",age:20}}>
                    <Context></Context>
                </ThemeContext.Provider>
            </UserContext.Provider>
        </div>
    )
}
