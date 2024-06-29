export const useTitle = (newTitle?: string) => {
  const title = ref(newTitle ? `${newTitle}-${serverConfig.APP_NAME}` : serverConfig.APP_NAME)
  watch(
    title,
    (n, o) => {
      if (n !== o && document) {
        document.title = n
      }
    },
    { immediate: true }
  )
  return title
}
