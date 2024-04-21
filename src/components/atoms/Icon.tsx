interface IconProps {
    name: string
}

const Icon: React.FC<IconProps> = ({ name }) => {
    return <i className={`text-gray-500 hover:text-gray-700 icon-${name}`} />
}

export default Icon
