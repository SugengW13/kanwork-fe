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
      variants: {
        fullscreen: {
          false: { content: 'max-w-2xl!' },
        },
      },
    },
    table: {
      slots: {
        th: 'backdrop-blur-xs',
      },
    },
  },
})
