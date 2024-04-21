import Link from '@/components/atoms/Link'
import Text from '@/components/atoms/Text'

interface UserInfoProps {
    username: string
    karma: number
}

const UserInfo: React.FC<UserInfoProps> = ({ username, karma }) => {
    return (
        <div className="bg-white rounded-lg shadow p-4">
            <Link href={`/user/${username}`}>
                <Text variant="heading">{username}</Text>
            </Link>
            <Text variant="body" className="text-gray-500 mt-2">
                {karma} karma
            </Text>
        </div>
    )
}

export default UserInfo
