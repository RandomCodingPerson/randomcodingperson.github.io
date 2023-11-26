import React from "react";
import AnimatedCursor from "react-animated-cursor"
import '../assets/css/cursor.scss'

export default function App() {
  return (
    <div className="cursor">
      <AnimatedCursor trailingSpeed={10} color={[0, 195, 143]} innerSize={8} outerSize={20} innerScale={0.7} outerScale={2}/>
    </div>
  );
}