import { Component } from 'solid-js'

import styles from '@/components/RadarChart/RadarChart.module.scss'

type Props = {
  class?: string
}

const RadarChart: Component<Props> = (props) => {
  return (
    <div class={props.class}>
      <svg width="245" height="245" viewBox="0 0 245 245" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M123.981 1.4939V243.012" stroke="#D9D9D9" stroke-dasharray="4 4" />
        <path d="M1.98792 119.537L244 119.537" stroke="#D9D9D9" stroke-dasharray="4 4" />
        <path d="M112.28 1H134.991" stroke="#D9D9D9" />
        <path d="M112.28 244H134.991" stroke="#D9D9D9" />
        <path d="M244 130.448V107.738" stroke="#D9D9D9" />
        <path d="M0.999878 130.448L0.999878 107.738" stroke="#D9D9D9" />
        <path
          class={styles.item}
          d="M222.762 119.537L123.981 1.4939L2.01508 119.793L123.981 244L222.762 119.537Z"
          fill="#5AC8FA"
          fill-opacity="0.1"
          stroke="#5AC8FA"
        />
        <path
          class={styles.item}
          d="M147.481 119.536L123.982 31.6218L53.8478 119.536L123.982 185.719L147.481 119.536Z"
          fill="#9747FF"
          fill-opacity="0.1"
          stroke="#B984FF"
        />
        <path
          class={styles.item}
          d="M191.646 119.536L123.982 62.2437L38.0427 119.536L123.982 214.366L191.646 119.536Z"
          fill="#2AC610"
          fill-opacity="0.1"
          stroke="#2AC610"
        />
      </svg>
    </div>
  )
}

export default RadarChart
