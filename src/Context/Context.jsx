import { createContext } from "react";
import main from "../config/gemini";


export const Context = createContext();

const ContextProvider= (props)=>{

    const onSent = async (promt)=>{
        await main(promt)

    }
    onSent("what is react Js")

    const contextValue={

    }

    return(
        <ContextProvider>
            {props.children}
        </ContextProvider>
    )
}

export default ContextProvider