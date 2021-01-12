import React from "react";
import { useParams } from "react-router-dom";

import { HOOKLIST } from "./const";

const Hooks = () => {
    const { hook } = useParams();
    const ActiveHook = HOOKLIST.find(h => `:${h.name}` === hook)
    return (
        <ActiveHook.Component />
    )
}

export default Hooks;