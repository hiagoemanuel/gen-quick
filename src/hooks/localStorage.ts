export const useLocalStorage = () => {
  const getStorage = (key: string) => {
    return localStorage.getItem(key)
  }

  const setStorage = (key: string, value: string) => {
    return localStorage.setItem(key, value)
  }

  return { getStorage, setStorage }
}
