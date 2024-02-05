import {
  useEffect,
  useRef,
  useState
} from "react"

export default function useSticky() {
  const stickyRef = useRef<HTMLDivElement>(null)
  const [sticky, setSticky] = useState(false)
  const [offset, setOffset] = useState(0)

  const checkSize = () => window.innerWidth >= 1025

  useEffect(() => {
    if (!stickyRef.current || !checkSize()) {
      return
    }

    setOffset(stickyRef.current.offsetTop)
  }, [stickyRef, setOffset])

  useEffect(() => {
    const handleScroll = () => {
      if (!stickyRef.current || !checkSize()) {
        return
      }

      setSticky(window.scrollY > offset)
    }

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("resize", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleScroll)
    }
  }, [setSticky, stickyRef, offset])

  return {
    stickyRef,
    sticky
  }
}
