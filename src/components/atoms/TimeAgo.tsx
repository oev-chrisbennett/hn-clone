import { DateTime } from 'luxon'

interface TimeAgoProps {
    timestamp: number
}

const TimeAgo: React.FC<TimeAgoProps> = ({ timestamp }) => {
    const dateTime = DateTime.fromSeconds(timestamp)
    const timeAgo = dateTime.toRelative()

    return <span className="text-gray-500 text-sm">{timeAgo}</span>
}

export default TimeAgo
