import createMockStore from './mock';

describe('createMockStore()', () => {
  it('should return methods without state', () => {
    const mockStore = createMockStore();

    expect(mockStore.default()).toBe(undefined);
    expect(mockStore.dispatch()).toBe(undefined);
    expect(mockStore.subscribe()).toBe(undefined);
    expect(mockStore.getState()).toEqual({});
  });

  it('should return methods with state', () => {
    const mockStore = createMockStore({ stuff: 'things' });

    expect(mockStore.default()).toBe(undefined);
    expect(mockStore.dispatch()).toBe(undefined);
    expect(mockStore.subscribe()).toBe(undefined);
    expect(mockStore.getState()).toEqual({ stuff: 'things' });
  })
});
