import NextLink from 'next/link'

interface LinkProps {
    href: string
    target?: string
    rel?: string
    children: React.ReactNode
}

const Link: React.FC<LinkProps> = ({ href, children, target, rel }) => {
    if (!href) {
        return <>{children}</>
    }
    return (
        <NextLink href={href} target={target} rel={rel} className="text-blue-500 hover:text-blue-700 hover:underline">
            {children}
        </NextLink>
    )
}

export default Link
