import { Component, JSX, Show } from 'solid-js'

import styles from '@/components/Card/Card.module.scss'

type Props = {
  head?: JSX.Element
  body: JSX.Element
}

const Card: Component<Props> = (props) => {
  return (
    <div class={styles.root}>
      <Show when={!!props.head}>
        <div class={styles.head}>{props.head}</div>
      </Show>
      <div class={styles.body}>{props.body}</div>
    </div>
  )
}

export default Card
