(() => {
	const targets = document.getElementsByClassName("less-than-one-hour");
	const OPEN_CLASSNAME = "open";

	for (let target = 0; target < targets.length; target++) {
		const element = targets[target];
		element.addEventListener("click", (e) => toggleCard(e, element));
	}

	const toggleCard = (e, element) => {
		const isOpened = element.classList.contains(OPEN_CLASSNAME);
		if (isOpened) element.classList.remove(OPEN_CLASSNAME);
		if (!isOpened) element.classList.add(OPEN_CLASSNAME);
	};
})();
