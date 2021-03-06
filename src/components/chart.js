import _ from 'lodash'
import React from 'react'
import {Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines'

function average(data) {
  return _.round(_.sum(data)/data.length)
}

function ktof(number) {
  return number*(9/5)-459.67
}

const Chart = (props) => {
  return (
    <div>
      <Sparklines height={100} width={300} data={props.data} >
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div>{Math.round(ktof(average(props.data)))} {props.units}</div>
    </div>
  )
}

export default Chart;
