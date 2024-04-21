import StoryItem from '@/components/molecules/StoryItem'

interface Story {
    by: string
    descendants: number
    id: number
    kids: number[]
    score: number
    time: number
    title: string
    type: string
    url: string
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
