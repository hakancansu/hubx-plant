import * as React from "react"
import Svg, { SvgProps, Rect } from "react-native-svg"
const Detailed = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={7}
    height={36}
    fill="none"
    {...props}
  >
    <Rect width={36} height={35.681} fill="#000" fillOpacity={0.24} rx={8} />
  </Svg>
)
export default Detailed
