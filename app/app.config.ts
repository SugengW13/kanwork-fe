export default defineAppConfig({
  ui: {
    colors: {
      primary: 'red',
      neutral: 'gray',
    },
    modal: {
      slots: {
        overlay: 'bg-black/50! backdrop-blur-xs',
      },
    },
  },
})
