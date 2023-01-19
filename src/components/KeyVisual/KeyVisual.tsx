import { Component } from 'solid-js'

import Image from '@/components/Image/Image'
import styles from '@/components/KeyVisual/KeyVisual.module.scss'

type Props = {
  isActive: boolean
}

const KeyVisual: Component<Props> = (props) => {
  return (
    <div class={styles.root} classList={{ [styles.active]: props.isActive }}>
      <div class={styles.title}>Deliver To The Heart</div>
      <div class={styles.img}>
        <Image src="/img/kv.jpg" alt="Deliver To The Heart" width="2560" height="1600" webp />
      </div>
    </div>
  )
}

export default KeyVisual
