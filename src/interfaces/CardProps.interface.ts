import { ReactElement } from "react";

export interface CardProps {
    title: string;
    description: string;
    completed?: boolean;
    children: ReactElement<any, any>,
    active: boolean;
}