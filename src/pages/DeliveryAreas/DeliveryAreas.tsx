import { Index } from 'solid-js'

import Card from '@/components/Card/Card'
import { areas } from '@/constants/areas'
import styles from '@/pages/DeliveryAreas/DeliveryAreas.module.scss'

const DeliveryAreas = () => {
  return (
    <div class={styles.root}>
      <div class={styles.inner}>
        <p class={styles.lead}>基本的に自宅から最寄りの営業所をお選び頂きます</p>
        <ul class={styles.list}>
          <Index each={areas}>
            {(area) => (
              <li class={styles.item}>
                <Card
                  head={
                    <>
                      <h3>{area().displayName}</h3>
                      <span class={styles.icon}>
                        <img src={`src/assets/img/icon_${area().name}.png`} alt={`アイコン(${area().displayName})`} />
                      </span>
                    </>
                  }
                  body={<Index each={area().cities}>{(city) => <p class={styles.desc}>{city()}</p>}</Index>}
                />
              </li>
            )}
          </Index>
        </ul>
      </div>
    </div>
  )
}

export default DeliveryAreas
