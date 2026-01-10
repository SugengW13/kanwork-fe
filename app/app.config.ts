export default defineAppConfig({
  ui: {
    colors: {
      primary: 'red',
      neutral: 'gray',
    },
    button: {
      slots: { base: 'cursor-pointer' },
    },
    dropdownMenu: {
      slots: { item: 'cursor-pointer' },
    },
  },
})
