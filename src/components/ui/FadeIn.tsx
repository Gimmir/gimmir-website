'use client'

import { useEffect, useRef, useState } from 'react'

const useOnScreen = (ref: React.RefObject<HTMLDivElement> | null, threshold = 0.1) => {
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

interface FadeInProps {
  children: React.ReactNode
  delay?: number
  className?: string
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
}

export const FadeIn = ({ 
  children, 
  delay = 0, 
  className = '', 
  direction = 'up' 
}: FadeInProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const isVisible = useOnScreen(ref as React.RefObject<HTMLDivElement> | null)
  
  const translateClass = {
    up: 'translate-y-10',
    down: '-translate-y-10',
    left: 'translate-x-10',
    right: '-translate-x-10',
    none: ''
  }

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0 translate-x-0' : `opacity-0 ${translateClass[direction]}`
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}
