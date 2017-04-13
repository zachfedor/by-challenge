const createMockStore = (state) => ({
  default: () => {},
  dispatch: () => {},
  subscribe: () => {},
  getState: () => ({ ...state }),
});

export default createMockStore;
