// assert one thing per test
const initialState = {
  list: [],
  loadMode: 'rest',
  errorMode: null,
  description: '',
  qty: 0,
  checked: false
};
describe('initial state', () => {
  test('list should increment by one', () => {
    expect(initialState.list.length).toEqual(0);
  });
});
