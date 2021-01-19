import React,{useContext} from 'react'
import { UserContext,ThemeContext } from "./ContextHookDemo";
export default function Context() {
    const user  = useContext(UserContext);
    const theme = useContext(ThemeContext)
    console.log(user,theme)
    return (
        <div>
            context
        </div>
    )
}
