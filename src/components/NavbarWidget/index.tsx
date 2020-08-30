import { ReactHTMLElement, ReactHTML } from "react";
import React, {AllHTMLAttributes} from 'react';

const NavbarWidget: React.FC<AllHTMLAttributes<HTMLDivElement>> = props => {
    return (
        <div>
            {props.children}
        </div>
    );
}