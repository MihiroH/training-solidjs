import { Component } from 'solid-js'

import styles from '@/components/KeyVisual/KeyVisual.module.scss'

type Props = {
  isActive: boolean
}

const KeyVisual: Component<Props> = (props) => {
  return (
    <div class={styles.root} classList={{ [styles.active]: props.isActive }}>
      <h1 class={styles.title}>Deliver To The Heart</h1>
      <div class={styles.img}>
        <img src="/img/kv.png" alt="Deliver To The Heart" />
      </div>
    </div>
  )
}

export default KeyVisual
