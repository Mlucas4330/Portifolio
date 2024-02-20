import {
    Button,
    Heading,
    Image,
    Text,
    Box,
    Flex,
    Container,
    Grid,
    GridItem,
    UnorderedList,
    ListItem,
    ButtonGroup,
    Icon,
    IconButton,
    Card,
    CardBody,
    CardFooter,
} from '@chakra-ui/react'
import Habilidade from './components/Habilidade'
import NinjaSena from './assets/ninjasena.jpg'
import Lucas from './assets/lucas.jpg'
import Header from './components/Header'
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import Title from './fragments/Title'
import { IoLogoJavascript } from 'react-icons/io'
import { FaReact } from 'react-icons/fa'
import { FaNodeJs } from 'react-icons/fa'
import { SiExpress } from 'react-icons/si'
import { SiPhp } from 'react-icons/si'
import { DiPostgresql } from 'react-icons/di'
import { SiMysql } from 'react-icons/si'
import { FaGitAlt } from 'react-icons/fa'
import { SiNginx } from 'react-icons/si'
import { FaDocker } from 'react-icons/fa'

const App = () => {
    const habilidades = [
        {
            name: 'Javascript',
            bgColor: 'yellow.300',
            color: 'black',
            icon: IoLogoJavascript,
        },
        {
            name: 'React',
            bgColor: 'blue.500',
            icon: FaReact,
        },
        {
            name: 'Node',
            bgColor: 'green.400',
            icon: FaNodeJs,
        },
        {
            name: 'Express',
            bgColor: 'green.400',
            icon: SiExpress,
        },
        {
            name: 'PHP',
            bgColor: 'blue.700',
            icon: SiPhp,
        },
        {
            name: 'Postgres',
            bgColor: 'blue.700',
            icon: DiPostgresql,
        },
        {
            name: 'MySQL',
            bgColor: 'blue.400',
            icon: SiMysql,
        },
        {
            name: 'Git',
            bgColor: 'black',
            icon: FaGitAlt,
        },
        {
            name: 'Github',
            bgColor: 'black',
            icon: FaGithub,
        },
        {
            name: 'Nginx',
            bgColor: 'green.600',
            icon: SiNginx,
        },
        {
            name: 'Docker',
            bgColor: 'blue.600',
            icon: FaDocker,
        },
        {
            name: 'Docker Compose',
            bgColor: 'blue.600',
            icon: FaDocker,
        },
    ]

    return (
        <>
            <Header />

            <Container maxW={'container.lg'}>
                <Grid
                    pt={10}
                    gap={10}
                    templateColumns={{
                        sm: '1fr',
                        md: '1fr',
                        lg: '1fr 1fr',
                    }}
                    id='inicio'
                    justifyItems={'center'}
                    alignItems={'center'}
                >
                    <GridItem>
                        <Title align={'left'} text={'Desenvolvedor Full Stack'} />

                        <Text my={'5'}>
                            Sou Desenvolvedor Full Stack com experiência em PHP, TypeScript, JavaScript e Java. Ao longo da minha carreira,
                            tive a oportunidade de trabalhar com uma variedade de frameworks, incluindo CakePHP, CodeIgniter, React, Vue e
                            Express, assim como lidar com bancos de dados relacionais como MySQL e Postgres.
                        </Text>
                        <ButtonGroup>
                            <IconButton
                                bgColor={'blue.700'}
                                _hover={{
                                    backgroundColor: 'blue.800',
                                }}
                                color={'white'}
                                as={'a'}
                                icon={<Icon as={FaWhatsapp} />}
                                target='_blank'
                                href='https://api.whatsapp.com/send?phone=5551989431913'
                            />
                            <IconButton
                                bgColor={'blue.700'}
                                _hover={{
                                    backgroundColor: 'blue.800',
                                }}
                                color={'white'}
                                as={'a'}
                                icon={<Icon as={FaLinkedin} />}
                                target='_blank'
                                href='https://www.linkedin.com/in/lucas-medeiros-2b77591ab/'
                            />

                            <IconButton
                                bgColor={'blue.700'}
                                _hover={{
                                    backgroundColor: 'blue.800',
                                }}
                                color={'white'}
                                as={'a'}
                                icon={<Icon as={FaGithub} />}
                                target='_blank'
                                href='https://www.github.com/Mlucas4330'
                            />
                        </ButtonGroup>
                    </GridItem>
                    <GridItem>
                        <Image w={300} h={400} borderRadius={'full'} src={Lucas} />
                    </GridItem>
                </Grid>

                <Box pt={10} id='experiencias'>
                    <Title align={'center'} text={'Experiências'} />
                    <Grid
                        mt={10}
                        templateColumns={{
                            sm: '1fr',
                            md: '1fr',
                            lg: '1fr 1fr',
                        }}
                        gap={10}
                        justifyItems={'center'}
                    >
                        <GridItem>
                            <Heading>Desenvolvedor Full Stack</Heading>
                            <Heading color={'gray.500'} size={'sm'} as={'h3'}>
                                Mob Solution | 07/2022 - 07/2023
                            </Heading>
                            <UnorderedList>
                                <ListItem>
                                    Responsável por desenvolver e manter software de gestão pública utilizado por diversos hospitais na
                                    região do Vale dos Sinos.
                                </ListItem>
                                <ListItem>
                                    Responsável pelo desenvolvimento das telas de atendimento e fila de espera utilizadas por médicos em
                                    suas consultas.
                                </ListItem>
                                <ListItem>
                                    Desenvolvimento e manutenção do módulo de vacinação e registro de novas vacinas dentro do software.
                                </ListItem>
                                <ListItem>Revisão e testes de tarefas entregues pelo time, seguindo as boas práticas.</ListItem>
                                <ListItem>
                                    Responsável por desenvolver e manter software de laboratório de sementes e fitopatologia, utilizado por
                                    agricultores na região norte e nordeste do Rio Grande do Sul e planalto de Santa Catarina.
                                </ListItem>
                                <ListItem>Responsável por manter Sistema PDV (Ponto de Venda).</ListItem>
                            </UnorderedList>
                        </GridItem>
                        <GridItem>
                            <Heading>Desenvolvedor Full Stack</Heading>
                            <Heading color={'gray.500'} size={'sm'} as={'h3'}>
                                FazComex | 07/2023 - 01/2024
                            </Heading>
                            <UnorderedList>
                                <ListItem>Responsável por desenvolver e manter software de comércio exterior.</ListItem>
                                <ListItem>
                                    Desenvolvimento e manutenção do módulo Catálogo de Produtos. Utilizado por importadores ou despachantes
                                    aduaneiros para cadastrar seus produtos que posteriormente serão transmitidos ao Portal Siscomex do
                                    governo.
                                </ListItem>
                                <ListItem>
                                    Desenvolvimento e manutenção dos Módulos de extração de dados do Siscomex. Possibilitando recuperar os
                                    dados da DU-E (Declaração Única de Exportação), da DI (Declaração de Importação) e da LI (Licença de
                                    Importação).
                                </ListItem>
                            </UnorderedList>
                        </GridItem>
                    </Grid>
                </Box>

                <Box pt={10} id='projetos'>
                    <Title align={'center'} text={'Projetos'} />

                    <Grid
                        mt={10}
                        templateColumns={{
                            sm: '1fr',
                            md: '1fr 1fr',
                            lg: '1fr 1fr 1fr',
                        }}
                    >
                        <GridItem>
                            <Card>
                                <CardBody>
                                    <Image src={NinjaSena} />
                                    <Heading textAlign={'center'}>NinjaSena</Heading>
                                    <Text textAlign={'center'}>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio tenetur sint itaque corrupti
                                        minus. Quae ab sed veniam laboriosam, voluptates optio magnam quaerat asperiores? Nesciunt quas
                                        explicabo id accusantium eveniet.
                                    </Text>
                                </CardBody>
                                <CardFooter>
                                    <Button
                                        bgColor={'blue.700'}
                                        _hover={{
                                            backgroundColor: 'blue.800',
                                        }}
                                        color={'white'}
                                        as={'a'}
                                        href='https://www.ninjasena.online'
                                        target='_blank'
                                    >
                                        Visualizar Projeto
                                    </Button>
                                </CardFooter>
                            </Card>
                        </GridItem>
                    </Grid>
                </Box>

                <Box py={10} as='section' id='habilidades'>
                    <Title align={'center'} text={'Habilidades'} />
                    <Grid
                        templateColumns={{
                            base: '1fr',
                            sm: '1fr 1fr',
                            md: '1fr 1fr 1fr',
                        }}
                        mt={10}
                        gap={3}
                    >
                        {habilidades.map((habilidade, i) => (
                            <Habilidade key={i} habilidade={habilidade} />
                        ))}
                    </Grid>
                </Box>
            </Container>
        </>
    )
}

export default App
