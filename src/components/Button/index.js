import React from "react"
import { Button as Buton } from "./styles"

function Button({children, ...props}) {
    return <Buton {...props}>{children}</Buton>
}

export default Button