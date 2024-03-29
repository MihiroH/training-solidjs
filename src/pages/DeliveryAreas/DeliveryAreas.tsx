import { Index } from 'solid-js'

import Card from '@/components/Card/Card'
import Image from '@/components/Image/Image'
import { areas } from '@/pages/DeliveryAreas'
import styles from '@/pages/DeliveryAreas/DeliveryAreas.module.scss'

const DeliveryAreas = () => {
  return (
    <div class={styles.root}>
      <div class={styles.inner}>
        <p class={styles.lead}>基本的に自宅から最寄りの営業所をお選び頂きます</p>
        <ul class={styles.list}>
          <Index each={areas}>
            {(area, i) => (
              <li class={[styles.item, `fadeUp-${i + 1}`].join(' ')}>
                <Card
                  head={
                    <>
                      <h3>{area().displayName}</h3>
                      <span class={styles.icon}>
                        <Image
                          src={`/img/icon_${area().name}.png`}
                          alt={`アイコン(${area().displayName})`}
                          width="72"
                          height="72"
                          webp
                        />
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
