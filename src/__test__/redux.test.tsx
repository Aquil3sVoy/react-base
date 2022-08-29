import reducer, {
  darkModeChanged,
  Layout,
} from '../features/layout/layoutSlice'

describe('reducer', () => {
  it('should handle darkModeChanged', () => {
    const previousState: Layout = {
      darkMode: false,
    }
    expect(reducer(previousState, darkModeChanged())).toEqual({
      darkMode: true,
    })
  })
})
