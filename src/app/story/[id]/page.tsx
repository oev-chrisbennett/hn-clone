import CommentThread from '@/components/organisms/CommentThread'
import Footer from '@/components/organisms/Footer'
import Header from '@/components/organisms/Header'

interface Comment {
    id: number
    author: string
    content: string
    timestamp: string
}

interface StoryPageProps {
    params: {
        id: string
    }
}

async function getStoryDetails(id: string) {
    // Fetch the story details from the Hacker News API
    const storyRes = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
    return await storyRes.json()
}

async function getComments(kids: number[]) {
    // Fetch the comment details from the Hacker News API
    const commentPromises = kids.map(async (id: number) => {
        const commentRes = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)
        return await commentRes.json()
    })

    return Promise.all(commentPromises)
}

const StoryPage: React.FC<StoryPageProps> = async ({ params }) => {
    const story = await getStoryDetails(params.id)
    const comments = await getComments(story.kids)

    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="container mx-auto px-4 py-8 flex-grow">
                <h1 className="text-3xl font-bold mb-4">{story.title}</h1>
                <div className="text-gray-500 mb-4">
                    {story.points} points by {story.author} | {story.timestamp}
                </div>
                <div className="mb-8">{story.content}</div>
                <h2 className="text-2xl font-bold mb-4">Comments</h2>
                <CommentThread comments={comments} />
            </main>
            <Footer />
        </div>
    )
}

export default StoryPage
