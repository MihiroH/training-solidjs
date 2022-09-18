import { Link } from '@solidjs/router'
import { Index } from 'solid-js'

import Button from '@/components/Button/Button'
import PageTop from '@/components/PageTop/PageTop'
import { list } from '@/pages/Recruit'
import styles from '@/pages/Recruit/Recruit.module.scss'

const Recruit = () => {
  return (
    <div class={styles.root}>
      <ul class={styles.list}>
        <Index each={list}>
          {(item, i) => (
            <li class={styles.item}>
              <div class={styles.cardImage}>
                <img src={`/img/recruit_step${i + 1}.png`} alt={item().title} />
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
