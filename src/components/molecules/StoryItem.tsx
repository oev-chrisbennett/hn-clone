import Link from '@/components/atoms/Link'
import Text from '@/components/atoms/Text'
import TimeAgo from '@/components/atoms/TimeAgo'

interface StoryItemProps {
    id: number
    title: string
    author: string
    points: number
    timestamp: string
}

const StoryItem: React.FC<StoryItemProps> = ({ id, title, author, points, timestamp }) => {
    return (
        <div className="bg-white rounded-lg shadow p-4">
            <Link href={`/story/${id}`}>
                <Text variant="heading">{title}</Text>
            </Link>
            <div className="text-gray-500 text-sm mt-2">
                {points} points by <Link href={`/user/${author}`}>{author}</Link> <TimeAgo timestamp={timestamp} />
            </div>
        </div>
    )
}

export default StoryItem
