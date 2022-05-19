(() => {
  const targets = document.getElementsByClassName('less-than-one-hour')
  const OPEND_CLASSNAME = 'opend'

  for(let target = 0; target < targets.length; target++) {
    const element = targets[target]
    element.addEventListener('click', (e) => toggleCard(e, element))
  }

  const toggleCard = (e, element) => {
    const isOpened = element.classList.contains(OPEND_CLASSNAME)
    if(isOpened) element.classList.remove(OPEND_CLASSNAME)
    if(!isOpened) element.classList.add(OPEND_CLASSNAME)
  }
})()
