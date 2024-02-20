import { Tag, TagLabel, TagLeftIcon } from '@chakra-ui/react'

const Habilidade = props => {
    const { name, icon, bgColor, color } = props.habilidade
    return (
        <Tag size={'lg'} bgColor={bgColor} color={color || 'white'}>
            <TagLeftIcon as={icon} />
            <TagLabel>{name}</TagLabel>
        </Tag>
    )
}

export default Habilidade
