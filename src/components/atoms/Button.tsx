interface ButtonProps {
    children: React.ReactNode
    onClick?: () => void
}

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
    return (
        <button
            type="button"
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded"
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default Button
