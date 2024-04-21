import Text from '@/components/atoms/Text'

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-100 py-4">
            <div className="container mx-auto px-4">
                <Text variant="body" className="text-center">
                    &copy; {new Date().getFullYear()} Hacker News Clone. All rights reserved.
                </Text>
            </div>
        </footer>
    )
}

export default Footer
