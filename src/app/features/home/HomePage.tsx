
import { createMedia } from '@artsy/fresnel'
import PropTypes from 'prop-types'
import  { Component } from 'react'
import { InView } from 'react-intersection-observer'


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
import SwiperBanner from '../../layout/swiper/SwiperBanner'

const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024,
  },
})


const HomepageBanner = ({ mobile }) => (
  <Container text>
    <Header
      as='h1'
      content='debugr4'
      // inverted
      style={{
        fontSize: mobile ? '2em' : '4em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: mobile ? '1.5em' : '3em',
      }}
    />
    <Header
      as='h2'
      content='Total solution for Devices based on Semicondutor Chip'
      // inverted
      style={{
        fontSize: mobile ? '1.5em' : '1.7em',
        fontWeight: 'normal',
        marginTop: mobile ? '0.5em' : '1.5em',
      }}
    />
    
  </Container>
)

HomepageBanner.propTypes = {
  mobile: PropTypes.bool,
}

class DesktopContainer extends Component {
  state = {}

  toggleFixedMenu = (inView) => this.setState({ fixed: !inView })

  render() {
    const { children } = this.props
    const { fixed } = this.state

    return (
      <Media greaterThan='mobile'>
        {/* <InView onChange={this.toggleFixedMenu}>
          <Segment
            inverted
            textAlign='center'
            className="ui olive inverted segment"
            style={{ minHeight: 400, padding: '1em 0em' }}
            vertical
          >
            <HomepageBanner />
          </Segment>
        </InView> */}

        {children}
      </Media>
    )
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
}

class MobileContainer extends Component {
  state = {}

  handleSidebarHide = () => this.setState({ sidebarOpened: false })

  handleToggle = () => this.setState({ sidebarOpened: true })

  render() {
    const { children } = this.props
    const { sidebarOpened } = this.state

    return (
      <Media as={Sidebar.Pushable} at='mobile'>
         <Sidebar.Pushable>

          <Sidebar.Pusher dimmed={sidebarOpened}>
            <Segment
              // inverted
              className="ui olive inverted segment"
              textAlign='center'
              style={{ minHeight: 350, padding: '1em 0em' }}
              vertical
            >
              <HomepageBanner mobile />
            </Segment>

            {children}
          </Sidebar.Pusher> 
        </Sidebar.Pushable>
      </Media>
    )
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node,
}

const ResponsiveContainer = ({ children }) => (
  
  <MediaContextProvider>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </MediaContextProvider>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}

const Homepage = () => (
  <ResponsiveContainer>
    <SwiperBanner/>
    {/* <Segment clearing>
      <h1>Space for Swiper</h1>
      </Segment> */}
    <Segment style={{ padding: '8em 0em' }} vertical>
      <Grid container stackable verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column width={10}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              We Help Chip Design & Application
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              Developed, design and support your chip design needs.
            </p>
            <Header as='h3' style={{ fontSize: '2em' }}>
              We Understand Issues 
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              With our working experience, we can provide a better solution in the field of Analog, RF and Mixed Signal Design.
            </p>
          </Grid.Column>
          <Grid.Column floated='right' width={6}>
            <Image bordered rounded size='large' src='/ota_modified.png' />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column textAlign='center'>
            <Button size='huge'>Check Them Out</Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    <Segment style={{ padding: '0em' }} vertical>
      <Grid celled='internally' columns='equal' stackable>
        <Grid.Row textAlign='center'>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              Debugr4 as a 
            </Header>
            <p style={{ fontSize: '1.33em' }}>Leading supplier of high power and 
              performance power converter solutions for medical, 
              transportation and home automation</p>
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              Debugr4 as a
            </Header>
            <p style={{ fontSize: '1.33em' }}>
            <p style={{ fontSize: '1.33em' }}>Design and Layout solutions for Analog, RF and Mixed signal Chips</p>
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    <Segment style={{ padding: '8em 0em' }} vertical>
      <Container text>
        <Header as='h3' style={{ fontSize: '2em' }}>
          Chip Design, Develop and Characterization.
        </Header>
        <p style={{ fontSize: '1.33em' }}>
           we have learned how to master Analog, RF and Mixed signal desgin.
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
          <a href='#'>Our Works</a>
        </Divider>

        <Header as='h3' style={{ fontSize: '2em' }}>
          Analog Op-Amp Design
        </Header>
        <p style={{ fontSize: '1.33em' }}>
          We are master in Differential, voltage,current mode Op Amps.
        </p>
        <Header as='h3' style={{ fontSize: '2em' }}>
          LDO Design
        </Header>
        <p style={{ fontSize: '1.33em' }}>
          We are master in LDOS.
        </p>
        <Header as='h3' style={{ fontSize: '2em' }}>
          Switcher
        </Header>
        <p style={{ fontSize: '1.33em' }}>
          We are master in Switcher.
        </p>
        <Header as='h3' style={{ fontSize: '2em' }}>
          RF Switch
        </Header>
        <p style={{ fontSize: '1.33em' }}>
          We are master in RF Switch.
        </p>
        <Button as='a' size='large'>
          See All interesting thing.
        </Button>
      </Container>
    </Segment>

    
  </ResponsiveContainer>
)

export default Homepage