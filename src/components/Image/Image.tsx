import { Component, Show, mergeProps, createMemo } from 'solid-js'

type Props = {
  src: string
  alt: string
  width: string
  height: string
  webp?: boolean
  lazy?: boolean
}

const Image: Component<Props> = (props) => {
  const merged = mergeProps({ webp: false, lazy: false }, props)
  const srcWebp = createMemo(() => merged.src.replace(/(.*)\.(\w+)$/, '$1.webp'))
  const loading = createMemo(() => (merged.lazy ? 'lazy' : 'eager'))

  return (
    <picture>
      <Show when={merged.webp}>
        <source type="image/webp" srcset={srcWebp()} />
      </Show>
      <img src={merged.src} alt={merged.alt} width={merged.width} height={merged.height} loading={loading()} />
    </picture>
  )
}

export default Image
