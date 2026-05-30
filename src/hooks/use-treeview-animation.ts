import { useEffect, useRef, useState } from 'react'

export interface UseTreeviewAnimationResult {
  ref: React.RefObject<HTMLUListElement | null>
  style: React.CSSProperties
}

/**
 * Hook that manages height animation for treeview expansion/collapse.
 * Uses CSS transitions instead of jQuery's slideUp/slideDown.
 */
export function useTreeviewAnimation(
  isOpen: boolean,
  speed = 300
): UseTreeviewAnimationResult {
  const ref = useRef<HTMLUListElement>(null)
  const [height, setHeight] = useState<number | string>(0)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    if (isOpen) {
      const fullHeight = element.scrollHeight
      setHeight(fullHeight)

      const timer = setTimeout(() => {
        setHeight('auto')
      }, speed)

      return () => clearTimeout(timer)
    }

    setHeight(0)
  }, [isOpen, speed])

  const style: React.CSSProperties = {
    height,
    overflow: 'hidden',
    transition: `height ${speed}ms ease-in-out`,
  }

  return { ref, style }
}
