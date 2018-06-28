export const renderIf = (test, component, componentTwo) =>
	test ? component : componentTwo || undefined

export const classToggler = options =>
	object
		.keys(options)
		.filter(key => !!options[key])
		.join(' ')
