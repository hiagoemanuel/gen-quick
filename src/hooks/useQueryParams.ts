interface useQueryParamsReturn {
  getQueryParams: (key: string) => string | null
  setQueryParams: (key: string, value: string) => string
}

export const useQueryParams = (): useQueryParamsReturn => {
  const getQueryParams = (key: string) => {
    const urlParams = new URLSearchParams(location.search)
    return urlParams.get(key)
  }

  const setQueryParams = (key: string, value: string): string => {
    const urlParams = new URLSearchParams(location.search)
    urlParams.set(key, value)

    const url = new URL(location.href)
    url.search = urlParams.toString()
    history.pushState({}, '', url)

    return url.search
  }

  return { getQueryParams, setQueryParams }
}
