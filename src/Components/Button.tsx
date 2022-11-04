import { Button as BaseButton } from "react-bootstrap";

export type ButtonProps = {
    className?: string;
    children?: any;
    size?: "sm" | "lg";
    active?: false | true;
    as?: any;
    disabled?: false | true;
    href?: string;
    type?: "button" | "reset" | "submit" | "null";
    variant?: "primary"
             | "secondary" 
             | "success" 
             | "danger" 
             | "warning" 
             | "info" 
             | "dark" 
             | "light" 
             | "link"
             | "outline-primary"
             | "outline-secondary" 
             | "outline-success" 
             | "outline-danger" 
             | "outline-warning" 
             | "outline-info" 
             | "outline-dark" 
             | "outline-light" 
             | "outline-link";
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    onKeyDown?: React.KeyboardEventHandler<HTMLButtonElement>;

}

export const Button: React.FC<ButtonProps> = (props) => {
    return (
        <>
            <BaseButton
                className={props.className}
                size={props.size}
                active={props.active}
                as={props.as}
                disabled={props.disabled}
                href={props.href}
                variant={props.variant}
                onClick={props.onClick}
                onKeyDown={props.onKeyDown}
            >
                {props.children}
            </BaseButton>
        </>
    )
}