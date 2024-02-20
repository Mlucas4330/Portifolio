import { Heading, Highlight } from '@chakra-ui/react'

const Title = props => {
    const { text, align } = props
    return (
        <Heading textAlign={align}>
            <Highlight query={text} styles={{ px: '3', py: '1', bg: 'blue.700', color: 'white' }}>
                {text}
            </Highlight>
        </Heading>
    )
}

export default Title
