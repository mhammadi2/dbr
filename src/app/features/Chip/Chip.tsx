import { Divider, Header, Image, Segment } from 'semantic-ui-react'

export default function Chip() {
  return (
    <Segment  className="ui  inverted segment " vertical style={{ padding: '1em 1em', marginBottom: '2em' }}>
    <Header as='h3'>Amplifier IC Design</Header>
    <p>Analog integrated circuit design can be seen by many as a little quirky. 
      You’re dealing with highly nonlinear components and lots of behaviors that 
      are difficult to model correctly. Without having a proven system and decades
       of experience, you’ll more than likely get a significant amount of unexpected 
       effects resulting from complex analog circuits. Your best bet is to partner with
        a proven designer of analog integrated circuits to make sure your requirements 
        are met or exceeded in a timely and cost effective manner.</p>
    <Image src='/images/wireframe/short-paragraph.png' />

    <Divider section />

    <Header as='h3'>RF Component IC Design</Header>
    <p>Today’s electronic devices consist of both analog and digital signals. 
       Mixed signal designs combine both analog and digital signals within 
       a single design or integrated circuit providing the most powerful 
       features of both analog and digital circuitry in a single chip solution.</p>

    <Image src='/images/wireframe/short-paragraph.png' />
    <Header as='h3'>RF Mixer IC Design</Header>
    <p>Today’s electronic devices consist of both analog and digital signals. 
       Mixed signal designs combine both analog and digital signals within 
       a single design or integrated circuit providing the most powerful 
       features of both analog and digital circuitry in a single chip solution.</p>

    <Image src='/images/wireframe/short-paragraph.png' />
    <Header as='h3'>RF Switcher IC Design</Header>
    <p>Today’s electronic devices consist of both analog and digital signals. 
       Mixed signal designs combine both analog and digital signals within 
       a single design or integrated circuit providing the most powerful 
       features of both analog and digital circuitry in a single chip solution.</p>

    <Image src='/images/wireframe/short-paragraph.png' />
  </Segment>
)
  
}