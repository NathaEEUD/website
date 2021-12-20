export const setCustomProperty = (label: string, value: string) => {
  document.documentElement.style.setProperty(label, value)
}
