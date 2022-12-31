import { SalesFormInterface } from "./SalesForm.inteface";

export interface ModalPropsInterface {
    title: string;
    content: SalesFormInterface;
    closeButtonLabel: string;
}