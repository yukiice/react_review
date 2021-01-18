import { useContext } from "react";
import { UserContext, TokenContext } from "./CustomHookDemo";

function useUserContext() {
    const user = useContext(UserContext)
    const token = useContext(TokenContext)


    return [user, token]
}


export default useUserContext