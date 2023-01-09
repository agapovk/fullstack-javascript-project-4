beforeAll(() => {
	console.log('before All')
})

describe('+ case', () => {
	test('test name', () => {
		const file = 'abc'
		expect(file).toEqual('abc')
	})
})
