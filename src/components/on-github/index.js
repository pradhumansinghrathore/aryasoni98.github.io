import React from 'react'
import { Row, Grid } from '../grids'
import data from './content'
import Tile from '../tile'


const OnGithub = () => {
  const contentNode = data.map((data, i) => {
    return (
      <a href={data.link} target="_blank" style={{ fontWeight: '400' }} key={i}>
        <Grid>
          <Tile title={data.title} description={data.description} />
        </Grid>
      </a>
    )
  })
  return (
    <Row>
      {contentNode}
    </Row>
  )
}

export default OnGithub
