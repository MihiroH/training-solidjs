export const trailingSlash = (path: string) => {
  const includesHttpOrHttps = /(http(s?)):\/\//.test(path)
  if (includesHttpOrHttps) {
    return path.replace(/\/$/, '')
  }
  return path.replace(/^(\/.*)(\/)$/, '$1')
}

export const capitalize = (value: string) => {
  return value.charAt(0).toUpperCase() + value.slice(1)
}

export const strictEntries = <T extends Record<string, any>>(object: T): [keyof T, T[keyof T]][] => {
  return Object.entries(object)
}
