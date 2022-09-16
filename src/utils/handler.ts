export const cloneDomScrollHandler = (event: Event, spaceAmount = 10) => {
  const target = event.target as HTMLDivElement

  if (target.scrollLeft >= target.scrollWidth - target.clientWidth - spaceAmount) {
    target.innerHTML += target.innerHTML
  }
}

export default {
  cloneDomScrollHandler,
}
