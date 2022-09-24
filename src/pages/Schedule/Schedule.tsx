import { Index } from 'solid-js'

import Image from '@/components/Image/Image'
import { schedules, thumbs } from '@/pages/Schedule'
import styles from '@/pages/Schedule/Schedule.module.scss'
import { capitalize } from '@/utils'

const Schedule = () => {
  return (
    <div class={styles.root}>
      <div class={styles.schedulesBox}>
        <ul class={styles.schedules}>
          <Index each={schedules}>
            {(schedule) => (
              <li class={styles.schedule}>
                <div class={styles.timeBox}>
                  <div class={styles.time}>{schedule().time}</div>
                </div>
                <p class={styles.textBox}>
                  <span>{schedule().title}</span>
                  <span class={styles.desc}>
                    <Index each={schedule().desc}>
                      {(desc) => (
                        <>
                          <span>・{desc()}</span>
                          <br />
                        </>
                      )}
                    </Index>
                  </span>
                </p>
              </li>
            )}
          </Index>
        </ul>
        <div class={styles.thumbs}>
          <Index each={thumbs}>
            {(thumb) => (
              <div class={styles[`thumb${capitalize(thumb().name)}`]}>
                <Image src={thumb().src} alt={thumb().alt} width="160" height="160" webp />
              </div>
            )}
          </Index>
        </div>
      </div>
    </div>
  )
}

export default Schedule
