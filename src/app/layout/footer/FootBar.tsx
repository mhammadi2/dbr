import {
  Container,
  Grid,
  Header,
  List,
  Menu,
  MenuItem,
  Segment,
  Image,
} from "semantic-ui-react";

export default function FootBar() {
  return (
    <>
      <Segment
        className=" green inverted segment"
        vertical
        style={{ padding: "5em 1em"}}
      >
        {/* <Segment inverted vertical style={{ padding: '5em 0em' }}> */}
        <Container>
          <Grid divided inverted >
            <Grid.Row >
            <Grid.Column width={4}>
                  <MenuItem>
                    {/* <img src="/default.svg" alt="logo" /> */}
                    <Image
                      // src="default.svg"
                      src="profile.png"
                      size="tiny"
                      circular
                    />
                  </MenuItem>           
              </Grid.Column>
              <Grid.Column width={4}>
                <Header as="h4" content="About" />
                <List link>
                  <List.Item as="a">Sitemap</List.Item>
                  <List.Item as="a">Contact Us</List.Item>
                  <List.Item as="a">Chip Design</List.Item>
                  <List.Item as="a">About Us</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={4}>
                <Header as="h4" content="Services" />
                <List link inverted>
                  <List.Item as="a">Analog IC Desgin</List.Item>
                  <List.Item as="a">RF IC Design</List.Item>
                  <List.Item as="a">Mixed Signal IC design</List.Item>
                  <List.Item as="a">Embedded ML Design</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={4}>
                <Header as="h4">Technology Corner</Header>
                <p>Interesting Tecnological Links.</p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>

<Segment fixed="bottom" raised secondary>

     
          <Container>
            
                    <h4 className='heading'> Developed by Debugr4</h4>
                
          </Container>
       
</Segment>
    </>
  );
}
