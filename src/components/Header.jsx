import {
    Flex,
    Heading,
    Link,
    Button,
    Icon,
    useToast,
    ButtonGroup,
    useBreakpointValue,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    IconButton,
} from '@chakra-ui/react'
import { MdOutlineContentCopy, MdDownload } from 'react-icons/md'
import { MdMenu } from 'react-icons/md'
import copy from 'copy-to-clipboard'
import Curriculo from '../assets/curriculo.pdf'

const Header = () => {
    const isMobile = useBreakpointValue({ base: true, sm: true, md: true, lg: false })
    const toast = useToast()

    const info = {
        telefone: '(51) 98943-1913',
        email: 'mlucas4330@gmail.com',
    }

    const copyToClipboard = text => {
        const isCopied = copy(text)

        if (isCopied) {
            toast({
                description: 'Copiado para a área de transferência',
                status: 'success',
                duration: 2000,
                isClosable: true,
            })
        }
    }

    return (
        <Flex
            zIndex={'999'}
            bgColor={'blue.700'}
            position={'sticky'}
            top={0}
            as={'header'}
            p={3}
            justify={'space-between'}
            align={'center'}
            color={'white'}
        >
            <Heading as={'a'} href='#inicio'>
                Lucas Medeiros
            </Heading>
            {isMobile ? (
                <Menu bgColor={'blue.600'}>
                    <MenuButton
                        _hover={{
                            backgroundColor: 'blue.800',
                        }}
                        _active={{
                            backgroundColor: 'blue.800',
                        }}
                        color={'white'}
                        bgColor={'blue.700'}
                        as={IconButton}
                        icon={<Icon as={MdMenu} />}
                    />
                    <MenuList borderColor={'blue.800'} bgColor={'blue.700'}>
                        <MenuItem bgColor={'blue.700'}>
                            <Link href='#inicio'>Início</Link>
                        </MenuItem>
                        <MenuItem bgColor={'blue.700'}>
                            <Link href='#experiencias'>Experiências</Link>
                        </MenuItem>
                        <MenuItem bgColor={'blue.700'}>
                            <Link href='#projetos'>Projetos</Link>
                        </MenuItem>
                        <MenuItem bgColor={'blue.700'}>
                            <Link href='#habilidades'>Habilidades</Link>
                        </MenuItem>
                        <MenuItem bgColor={'blue.700'}>
                            <Button
                                as={'a'}
                                bgColor={'blue.700'}
                                _hover={{
                                    backgroundColor: 'blue.800',
                                }}
                                color={'white'}
                                leftIcon={<Icon as={MdDownload} />}
                                href={Curriculo}
                                download
                            >
                                Currículo
                            </Button>
                        </MenuItem>
                        <MenuItem bgColor={'blue.700'}>
                            <Button
                                bgColor={'blue.700'}
                                _hover={{
                                    backgroundColor: 'blue.800',
                                }}
                                color={'white'}
                                leftIcon={<Icon as={MdOutlineContentCopy} />}
                                onClick={() => copyToClipboard(info.telefone)}
                            >
                                Celular
                            </Button>
                        </MenuItem>
                        <MenuItem bgColor={'blue.700'}>
                            <Button
                                bgColor={'blue.700'}
                                _hover={{
                                    backgroundColor: 'blue.800',
                                }}
                                color={'white'}
                                leftIcon={<Icon as={MdOutlineContentCopy} />}
                                onClick={() => copyToClipboard(info.email)}
                            >
                                Email
                            </Button>
                        </MenuItem>
                    </MenuList>
                </Menu>
            ) : (
                <>
                    <Flex as={'nav'} gap={7}>
                        <Link href='#inicio'>Início</Link>
                        <Link href='#experiencias'>Experiências</Link>
                        <Link href='#projetos'>Projetos</Link>
                        <Link href='#habilidades'>Habilidades</Link>
                    </Flex>
                    <ButtonGroup>
                        <Button
                            as={'a'}
                            bgColor={'blue.700'}
                            _hover={{
                                backgroundColor: 'blue.800',
                            }}
                            color={'white'}
                            leftIcon={<Icon as={MdDownload} />}
                            href={Curriculo}
                            download
                        >
                            Currículo
                        </Button>

                        <Button
                            bgColor={'blue.700'}
                            _hover={{
                                backgroundColor: 'blue.800',
                            }}
                            color={'white'}
                            leftIcon={<Icon as={MdOutlineContentCopy} />}
                            onClick={() => copyToClipboard(info.telefone)}
                        >
                            Celular
                        </Button>

                        <Button
                            bgColor={'blue.700'}
                            _hover={{
                                backgroundColor: 'blue.800',
                            }}
                            color={'white'}
                            leftIcon={<Icon as={MdOutlineContentCopy} />}
                            onClick={() => copyToClipboard(info.email)}
                        >
                            Email
                        </Button>
                    </ButtonGroup>
                </>
            )}
        </Flex>
    )
}

export default Header
