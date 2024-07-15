type MetaTagsType = {
  title: string
  description: string
  image: string
  url: string
}

interface useOpenGraphProps {
  setOpenGraphTags: (tags: MetaTagsType) => void
}

export const useOpenGraph = (): useOpenGraphProps => {
  const setOpenGraphTags = ({ title, description, image, url }: MetaTagsType) => {
    setMetaTags('property', 'og:title', title)
    setMetaTags('property', 'og:description', description)
    setMetaTags('property', 'og:image', image)
    setMetaTags('property', 'og:url', url)
  }

  const setMetaTags = (attr: string, key: string, content: string) => {
    let element = document.querySelector(`meta[${attr}="${key}"]`)

    if (!element) {
      element = document.createElement('meta')
      element.setAttribute(attr, key)
      document.head.appendChild(element)
    }

    element.setAttribute('content', content)
  }

  return { setOpenGraphTags }
}
