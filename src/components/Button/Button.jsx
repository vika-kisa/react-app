
export const Button = ({orangeButton,children}) => {
    return (
        <button className={`button ${orangeButton ? 'button_orange' : ''}`}>{children}</button>
    );
}
