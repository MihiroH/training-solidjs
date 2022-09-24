import { Link } from '@solidjs/router'
import { Index } from 'solid-js'

import Button from '@/components/Button/Button'
import Image from '@/components/Image/Image'
import PageTop from '@/components/PageTop/PageTop'
import { list } from '@/pages/Recruit'
import styles from '@/pages/Recruit/Recruit.module.scss'

const Recruit = () => {
  return (
    <div class={styles.root}>
      <ul class={styles.list}>
        <Index each={list}>
          {(item, i) => (
            <li class={[styles.item, `fadeUp-${i + 1}`].join(' ')}>
              <div class={styles.cardImage}>
                <Image src={`/img/recruit_step${i + 1}.png`} alt={item().title} width="718" height="238" webp />
              </div>
              <div class={styles.cardTextBox}>
                <h3 class={styles.cardTitle}>
                  STEP{i + 1}.{item().title}
                </h3>
                <p class={styles.cardDesc} innerHTML={item().desc} />
              </div>
            </li>
          )}
        </Index>
      </ul>
      <Link href="mailto:" class={styles.button}>
        <Button>応募する</Button>
      </Link>
      <PageTop class={styles.pageTop} />
    </div>
  )
}

export default Recruit
