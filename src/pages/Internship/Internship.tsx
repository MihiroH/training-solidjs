import { Link } from '@solidjs/router'

import Button from '@/components/Button/Button'
import styles from '@/pages/Internship/Internship.module.scss'

const Internship = () => {
  return (
    <div class={styles.root}>
      <div class={styles.inner}>
        <p class={styles.text}>
          ・どんな仕事をするのか不安...。
          <br />
          ・実際に仕事を初めて自分に合わなくても、辞めづらくなりそう...。
          <br />
          ・予想以上に仕事がきつかったら嫌だな...。
          <br />
          <br />
          心配が残る方のために、1日、助手席に乗って職業体験できる制度があります！
          <br />
          <br />
          ※勤務決定の場合、体験日の給与支給
          <br />
          ※勤務しない場合、体験日の支払いなし
        </p>
        <Link href="mailto:" class={styles.button}>
          <Button>職場体験に申し込む</Button>
        </Link>
      </div>
    </div>
  )
}

export default Internship
