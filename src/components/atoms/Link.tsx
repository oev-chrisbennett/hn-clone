import NextLink from 'next/link'

interface LinkProps {
    href: string
    children: React.ReactNode
}

const Link: React.FC<LinkProps> = ({ href, children }) => {
    return (
        <NextLink href={href} className="text-blue-500 hover:text-blue-700 hover:underline">
            {children}
        </NextLink>
    )
}

export default Link
