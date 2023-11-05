import AnimatedCursor from "react-animated-cursor"

export default function Cursor() {
  return (
    <>
    
    <AnimatedCursor
  innerSize={5}
  outerSize={20}
  innerScale={1}
  outerScale={1.7}
  outerAlpha={0}
  outerStyle={{
    border: '3px solid var(--cursor-color)'
  }}
  innerStyle={{
    backgroundColor: 'var(--cursor-color)'
  }}
/>
    </>
  )
}
