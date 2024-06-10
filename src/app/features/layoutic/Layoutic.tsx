
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

export default function Layoutic() {
  return (

    <Segment style={{ padding: '8em 0em' }} vertical>
      <Container text>
        <Header as='h3' style={{ fontSize: '2em' }}>
          Layout Design
        </Header>
        <p style={{ fontSize: '1.33em' }}>
        <p>From larger scale technologies down to cutting ato (2nm and below) process node, 
        our physical designers can work independently or can supplement your layout team to complete any size project. 
        With experience in a wide variety of Analog Mixed Signal Cores such as Analog to digital converters(A/D),
         Digital to Analog (D/A), Phase Lock Loops (PLL’s), Delay Lock Loops (DLL’s), etc. 
         our mask designers can handle any design challenge.</p>
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
          Did We Tell You About Our Projects?
        </Header>
        <p style={{ fontSize: '1.33em' }}>
          Yes I know you probably disregarded the earlier boasts as non-sequitur filler content.
        </p>
        <Button as='a' size='large'>
          I'm Still Quite Interested
        </Button>
      </Container>
    </Segment>



)

    
}