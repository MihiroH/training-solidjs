/* @refresh reload */
import { Router } from '@solidjs/router'
import { render } from 'solid-js/web'

import '@/assets/css/reset.min.css'
import '@/index.scss'
import App from '@/App'
import Navigation from '@/components/Navigation/Navigation'

const root = document.getElementById('root')

if (root) {
  render(
    () => (
      <Router>
        <App />
        <Navigation />
      </Router>
    ),
    root,
  )
}
