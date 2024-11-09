import React, { FunctionComponent } from "react";
import './styles.css'

type Props = {
    height: number;
    bgColor?: string;
    textColor?: string;
    children?: React.ReactNode;
}

export const LpSection: FunctionComponent<Props> = ({height, bgColor, textColor, children}) => {

    const containerStyle = {
        "height": `${height}vh`,
        "backgroundColor": bgColor,
        "color": textColor
    }

   return (
    <div style={containerStyle} className="main-container">
        {children}
    </div>
   )
    
}