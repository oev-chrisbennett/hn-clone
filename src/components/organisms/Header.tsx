import Link from '@/components/atoms/Link'
import Text from '@/components/atoms/Text'

const Header: React.FC = () => {
    return (
        <header className="bg-orange-500 py-4">
            <div className="container mx-auto px-4">
                <Link href="/">
                    <Text variant="heading" className="text-white">
                        Hacker News Clone
                    </Text>
                </Link>
            </div>
        </header>
    )
}

export default Header
