
import {
    Button,
    Container,
    Divider,
    Grid,
    Header,
    Icon,
    Image,
    List,
    Menu,
    Segment,
    Sidebar,
} from 'semantic-ui-react'

export default function Mixedic() {
    return (
        <Segment style={{ padding: '8em 0em' }} vertical>
            <Container text>
                <Header as='h3' style={{ fontSize: '2em' }}>
                    Embedded Machine Learning Using Mixed Signal IC design in skywater process node.
                </Header>
                <p style={{ fontSize: '1.33em' }}>
                    Embedded Machine learning algorithms have shown state-of-the-art accuracies
                        to carry out complex tasks such as computer vision, natural language processing, and
                        speech recognition. This coupled with the research and development in low-power
                        embedded devices will enable the mass proliferation of AI-powered IoT devices.
                       Recent advances towards the goal of efficiently computing
                        machine learning algorithms at the edge. 
                    
                    </p>
                    <Button as='a' size='large'>
                        Read More
                    </Button>

                    <Divider
                        as='h4'
                        className='header'
                        horizontal
                        style={{ margin: '3em 0em', textTransform: 'uppercase' }}
                    >
                        <a href='#'>Case Studies</a>
                    </Divider>

                    <Header as='h3' style={{ fontSize: '2em' }}>
                    An overview of embedded architectures that enable computing efficiently:
                        ARM based Cortex-M, Neuromorphic processors (True North), Analog architectures
                        (ReRam and FG based), and In-memory computing architectures (SRAM and DRAM
                        based).
                    </Header>
                    <p style={{ fontSize: '1.33em' }}>
                    - Introduction to Machine learning algorithms.
                        - Overview of embedded processors.
                        - Optimizations for deploying ML algorithms on embedded systems.
                        - Circuits and systems techniques to improve energy efficiency.
                        - Emerging architectures for energy-efficient computing.
                    </p>
                    <Button as='a' size='large'>
                        I'm Still Quite Interested
                    </Button>
            </Container>
        </Segment>
    );
}
