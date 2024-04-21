import StoryItem from '@/components/molecules/StoryItem'

interface Story {
    id: number
    title: string
    author: string
    points: number
    timestamp: string
}

interface StoryListProps {
    stories: Story[]
}

const StoryList: React.FC<StoryListProps> = ({ stories }) => {
    return (
        <div className="space-y-4">
            {stories.map((story) => (
                <StoryItem key={story.id} {...story} />
            ))}
        </div>
    )
}

export default StoryList
