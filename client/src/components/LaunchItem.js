import React from 'react'
import classNames from 'classnames'
import Moment from 'react-moment'
import { Link } from 'react-router-dom'

export default ({ launch }) => {
  return (
    <div
      className="card card-body mb-3"
      style={{ backgroundColor: 'rgb(62 61 61)' }}
    >
      <div className="row">
        <div className="col-md-9">
          <h4>
            Mission:{' '}
            <span
              className={classNames({
                'text-success': launch.launch_success,
                'text-danger': !launch.launch_success,
              })}
            >
              {launch.mission_name}
            </span>
          </h4>
          <p>
            Date:{' '}
            <Moment format="YYYY-MM-DD HH:mm">
              {launch.launch_date_local}
            </Moment>
          </p>
        </div>
        <div className="col-md-3">
          <Link to={`/launch/${launch.flight_number}`} className="btn btn-secondary">Launch details</Link>
        </div>
      </div>
    </div>
  )
}
