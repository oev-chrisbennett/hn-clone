import Footer from '@/components/organisms/Footer'
import Header from '@/components/organisms/Header'
import StoryList from '@/components/organisms/StoryList'

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

interface HomePageProps {
    stories: Story[]
}

const HomePage: React.FC<HomePageProps> = ({ stories }) => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header />
            <main className="container mx-auto px-2 py-2 flex-grow">
                <StoryList stories={stories} />
            </main>
            <Footer />
        </div>
    )
}

export default HomePage
