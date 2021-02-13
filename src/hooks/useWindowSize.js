import { useEffect, useState } from "react"

const getCurrentScreenSize = () => ({
  width: window.innerWidth,
  height: window.innerHeight,
})

export function useWindowSize() {
  const [screenSize, setScreenSize] = useState(getCurrentScreenSize())

  const screenHandler = () => {
    setScreenSize(getCurrentScreenSize())
  }

  useEffect(() => {
    window.addEventListener("resize", screenHandler)
    return () => {
      window.removeEventListener("resize", screenHandler)
    }
  }, [])

  return screenSize
}
