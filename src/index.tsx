/* @refresh reload */
import { render } from 'solid-js/web'

import '@/index.scss'
import App from '@/App'

const root = document.getElementById('root')

if (root) {
  render(() => <App />, root)
}
