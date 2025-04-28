import * as React from "react"
import Svg, { SvgProps, Path, Mask } from "react-native-svg"
const ActiveButton = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#fff"
      stroke="#28AF6E"
      strokeWidth={8}
      d="M12 4a8 8 0 1 1 0 16 8 8 0 0 1 0-16Z"
    />
    <Mask
      id="a"
      width={26}
      height={26}
      x={-1}
      y={-1}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "luminance",
      }}
    >
      <Path
        fill="#fff"
        fillRule="evenodd"
        stroke="#fff"
        d="M0 12C0 5.373 5.373 0 12 0s12 5.373 12 12-5.373 12-12 12S0 18.627 0 12Z"
        clipRule="evenodd"
      />
    </Mask>
  </Svg>
)
export default ActiveButton
