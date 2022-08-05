import { useContext } from "react";
import { Context } from "../context/Authentication";

const useToken = (setterOnly) => {
    const context = useContext(Context);

    return setterOnly ? [context.setState] : [context.state, context.setState]
}

export default useToken;