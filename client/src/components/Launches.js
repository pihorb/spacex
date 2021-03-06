import React, { Fragment } from 'react'
import { useQuery, gql } from '@apollo/client'
import LaunchItem from './LaunchItem'
import MissionKey from './MissionKey'

const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
    launches {
      flight_number
      mission_name
      launch_date_local
      launch_success
    }
  }
`

export default () => {
  const { loading, error, data } = useQuery(LAUNCHES_QUERY)

  if (loading) return <h4>Loading ...</h4>
  if (error) console.log(error)

  return (
    <Fragment>
      <h2 className="display-4 my-3" style={{ color: 'white' }}>Launches</h2>
      <MissionKey />
      {data.launches.map((launch) => (
        <LaunchItem key={launch.flight_number} launch={launch} />
      ))}
    </Fragment>
  )
}
