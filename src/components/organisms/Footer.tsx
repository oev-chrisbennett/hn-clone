import Text from '@/components/atoms/Text'
import Link from 'next/link'
import Icon from '../atoms/Icon'

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-100 py-4">
            <div className="container mx-auto px-4">
                <Text variant="body" className="text-center">
                    {new Date().getFullYear()}
                    {' - '}
                    <Link className="text-blue-500" href="https://github.com/oev-chrisbennett">
                        Chris Bennett
                    </Link>
                </Text>
            </div>
        </footer>
    )
}

export default Footer
