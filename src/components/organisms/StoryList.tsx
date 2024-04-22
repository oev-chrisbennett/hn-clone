import StoryItem from '@/components/molecules/StoryItem'
import type { Story } from '@/types/Story'

interface StoryListProps {
    stories: Story[]
}

const StoryList: React.FC<StoryListProps> = ({ stories }) => {
    return (
        <div className="space-y-4">
            {stories.map((story) => (
                <StoryItem key={story.id} story={story} />
            ))}
        </div>
    )
}

export default StoryList
