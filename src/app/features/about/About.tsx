import { Grid, GridColumn, GridRow,Image, Segment, Card, Container } from "semantic-ui-react"

export default function About() {
  return (
    <>
    <Container >
    <Segment className="ui green inverted segment " vertical style={{ padding: '1em 1em', marginBottom: '2em' }}>

    <Grid divided='vertically' className="justified stackable" position="right">
    <GridRow columns={3} >
      <GridColumn>
      <Card
    image='vite.svg'
    header='Muhammad Islam'
    meta='CEO'
    description='Yi Chen stands out as a dynamic and forward-thinking leader i
    n the realms of B2B, SaaS, Hardware Operations, and Consumer Technology. Yi was
    most recently the SVP and GM of Consumer 
    Products at Toast, Inc. His strategic acumen in product management, 
    commercial expansion, and entrepreneurial initiatives has significantly 
    contributed to transforming the restaurant industry. Yis expertise in growing 
    and managing teams, coupled with his knack for driving technological innovations, 
    has been central to the phenomenal growth of Toast from its early stages to 
    its successful IPO in 2021 and achieving over a billion in revenue. 
    Yi holds a B.S. in Electrical and Computer Engineering from Cornell University and
    an M.B.A. from Harvard Business School. Yi is a father of 2, an avid amateur 
    photographer who loves new adventures.com'
  />
      </GridColumn>
      <GridColumn>
      <Card
    image='vite.svg'
    header='Muhammad Islam'
    meta='CEO'
    description='Yi Chen stands out as a dynamic and forward-thinking leader i
    n the realms of B2B, SaaS, Hardware Operations, and Consumer Technology. Yi was
    most recently the SVP and GM of Consumer 
    Products at Toast, Inc. His strategic acumen in product management, 
    commercial expansion, and entrepreneurial initiatives has significantly 
    contributed to transforming the restaurant industry. Yis expertise in growing 
    and managing teams, coupled with his knack for driving technological innovations, 
    has been central to the phenomenal growth of Toast from its early stages to 
    its successful IPO in 2021 and achieving over a billion in revenue. 
    Yi holds a B.S. in Electrical and Computer Engineering from Cornell University and
    an M.B.A. from Harvard Business School. Yi is a father of 2, an avid amateur 
    photographer who loves new adventures.com'
  />
      </GridColumn>
      <GridColumn>
      <Card
    image='vite.svg'
    header='Muhammad Islam'
    meta='CEO'
    description='Yi Chen stands out as a dynamic and forward-thinking leader i
    n the realms of B2B, SaaS, Hardware Operations, and Consumer Technology. Yi was
    most recently the SVP and GM of Consumer 
    Products at Toast, Inc. His strategic acumen in product management, 
    commercial expansion, and entrepreneurial initiatives has significantly 
    contributed to transforming the restaurant industry. Yis expertise in growing 
    and managing teams, coupled with his knack for driving technological innovations, 
    has been central to the phenomenal growth of Toast from its early stages to 
    its successful IPO in 2021 and achieving over a billion in revenue. 
    Yi holds a B.S. in Electrical and Computer Engineering from Cornell University and
    an M.B.A. from Harvard Business School. Yi is a father of 2, an avid amateur 
    photographer who loves new adventures.com'
  />
      </GridColumn>
    </GridRow>
    </Grid>
    </Segment>

    </Container>
    </>
  )
}