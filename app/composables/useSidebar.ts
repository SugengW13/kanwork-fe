export const useSidebar = () => {
  const isOpen = useState('sidebar:is-open', () => false)
  return { isOpen }
}
