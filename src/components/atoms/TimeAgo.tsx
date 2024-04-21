import { DateTime } from 'luxon'

interface TimeAgoProps {
    timestamp: string
}

const TimeAgo: React.FC<TimeAgoProps> = ({ timestamp }) => {
    const date = DateTime.fromISO(timestamp)
    const timeAgo = date.toRelative()

    return <span className="text-gray-500 text-sm">{timeAgo}</span>
}

export default TimeAgo
