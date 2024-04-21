interface TextProps {
    children: React.ReactNode
    variant?: 'heading' | 'subtitle' | 'body'
    className?: string
}

const Text: React.FC<TextProps> = ({ children, variant = 'body', className = '' }) => {
    const baseClassName = 'text-base font-normal'
    const variantClassName = variant === 'heading' ? 'text-lg font-medium' : ''
    const combinedClassName = `${baseClassName} ${variantClassName} ${className}`.trim()

    return <p className={combinedClassName}>{children}</p>
}

export default Text
