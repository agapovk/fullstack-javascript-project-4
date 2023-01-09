beforeAll(() => {
  console.log('before All');
});

describe('+ case', () => {
  test('testname', () => {
    const file = 'abc';
    expect(file).toEqual('abc');
  });
});
