import { GeistSans } from 'geist/font/sans'
import './globals.css'

export const metadata = {
    title: 'Hacker News',
    description: 'The latest news from Hacker News',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={GeistSans.className}>{children}</body>
        </html>
    )
}
