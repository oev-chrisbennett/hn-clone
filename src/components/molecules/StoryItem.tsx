import Link from '@/components/atoms/Link'
import Text from '@/components/atoms/Text'
import TimeAgo from '@/components/atoms/TimeAgo'
import type { Story } from '@/types/Story'

interface StoryItemProps {
    story: Story
}

const StoryItem: React.FC<StoryItemProps> = ({ story }) => {
    const { by, descendants, id, score, time, title, url } = story

    const pageUrl = url || `/story/${id}`
    const domainRegex = /^(?:https?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:\/\n]+)/im
    const domainMatch = pageUrl?.match(domainRegex)
    const domain = domainMatch ? domainMatch[1] : ''

    return (
        <div className="bg-white rounded-lg shadow p-4">
            <div className="flex justify-between items-center">
                <div className="flex-1 mr-4">
                    <Link href={pageUrl} target="_blank" rel="noopener noreferrer">
                        <Text variant="heading" className="text-lg">
                            {title}
                            {domain && <span className="text-gray-500 text-xs ml-2">({domain})</span>}
                        </Text>
                    </Link>
                </div>
                <div className="text-gray-500 text-xs whitespace-nowrap">
                    {score} points - <Link href={`/user/${by}`}>{by}</Link> - <TimeAgo timestamp={time} /> -{' '}
                    <Link href={`/story/${id}`}>{descendants} comments</Link>
                </div>
            </div>
        </div>
    )
}

export default StoryItem
