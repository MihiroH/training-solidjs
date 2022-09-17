export const trailingSlash = (path: string) => {
  const includesHttpOrHttps = /(http(s?)):\/\//.test(path)
  if (includesHttpOrHttps) {
    return path.replace(/\/$/, '')
  }
  return path.replace(/^(\/.*)(\/)$/, '$1')
}
