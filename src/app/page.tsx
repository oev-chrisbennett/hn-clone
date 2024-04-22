import HomePage from '@/components/templates/HomePage'
import type { Story } from '@/types/Story'

async function getLatestStories(): Promise<Story[]> {
    // Fetch the latest stories from the Hacker News API
    const res = await fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
    const storyIds = await res.json()

    // Fetch the details of the top 100 stories
    const storyPromises = storyIds.slice(0, 100).map(async (id: number) => {
        const storyRes = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`)

        return await storyRes.json()
    })

    return Promise.all(storyPromises)
}

const Home: React.FC = async () => {
    const stories = await getLatestStories()

    return <HomePage stories={stories} />
}

export default Home
