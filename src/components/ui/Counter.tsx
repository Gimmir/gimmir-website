'use client'

import { useEffect, useRef, useState } from 'react'

const useOnScreen = (ref: React.RefObject<HTMLSpanElement> | null, threshold = 0.1) => {
  const [isIntersecting, setIntersecting] = useState(false)
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIntersecting(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold }
    )
    
    if (ref?.current) observer.observe(ref.current)
    return () => {
      if (ref?.current) observer.unobserve(ref.current)
    }
  }, [ref, threshold])
  
  return isIntersecting
}

interface CounterProps {
  end: number
  duration?: number
  suffix?: string
}

export const Counter = ({ end, duration = 2000, suffix = '' }: CounterProps) => {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const isVisible = useOnScreen(ref as React.RefObject<HTMLSpanElement> | null)

  useEffect(() => {
    if (!isVisible) return
    
    let startTimestamp: number | null = null
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp
      const progress = Math.min((timestamp - startTimestamp) / duration, 1)
      setCount(Math.floor(progress * end))
      if (progress < 1) window.requestAnimationFrame(step)
    }
    
    window.requestAnimationFrame(step)
  }, [isVisible, end, duration])

  return <span ref={ref}>{count}{suffix}</span>
}
