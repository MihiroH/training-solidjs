import { createSignal, createEffect } from 'solid-js'

import styles from '@/App.module.scss'
import logo from '@/logo.svg'

function App() {
  const [count, setCount] = createSignal(0)

  const obj = {
    a: 'test',
    b: 'test2',
  }

  const obj1 = ['test', 'test2']

  createEffect(() => {
    console.log(count())
    console.log(obj)
    console.log(obj1)
  })

  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <img src={logo} class={styles.logo} alt="logo" />
        <p>
          Edit <code>src/App.jsx</code> and save to reload.
        </p>
        <a class={styles.link} href="https://github.com/solidjs/solid" target="_blank" rel="noopener noreferrer">
          Learn Solid
        </a>
        <button onClick={() => setCount(count() + 1)}>Click Me</button>
        <p>{count()}</p>
      </header>
    </div>
  )
}

export default App
