import Link from '@/components/atoms/Link'
import Text from '@/components/atoms/Text'
import TimeAgo from '@/components/atoms/TimeAgo'

interface CommentProps {
    author: string
    content: string
    timestamp: string
}

const Comment: React.FC<CommentProps> = ({ author, content, timestamp }) => {
    return (
        <div className="bg-white rounded-lg shadow p-4">
            <div className="text-gray-500 text-sm mb-2">
                <Link href={`/user/${author}`}>{author}</Link> <TimeAgo timestamp={timestamp} />
            </div>
            <Text variant="body">{content}</Text>
        </div>
    )
}

export default Comment
