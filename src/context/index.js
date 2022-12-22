import { useState } from "react";
import { createContext } from "react";

export const routeContext = createContext();

const RouteProvider = (props) => {

    const [route, setRoute] = useState('Users');

    return (
        <routeContext.Provider value={[route, setRoute]}>
            {props.children}
        </routeContext.Provider>
    )
}

export default RouteProvider;