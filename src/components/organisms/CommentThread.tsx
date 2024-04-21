import Comment from '@/components/molecules/Comment'

interface CommentData {
    id: number
    author: string
    content: string
    timestamp: string
}

interface CommentThreadProps {
    comments: CommentData[]
}

const CommentThread: React.FC<CommentThreadProps> = ({ comments }) => {
    return (
        <div className="space-y-4">
            {comments.map((comment) => (
                <Comment key={comment.id} {...comment} />
            ))}
        </div>
    )
}

export default CommentThread
