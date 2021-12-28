// Or maybe you want it to add the brand if it's not there already and remove it if it's clicked again!
import { Link, useSearchParams } from "react-router-dom"
export function BrandLink({ brand, ...props }) {
  let [params] = useSearchParams()
  let isActive = params.getAll("brand").includes(brand)
  if (!isActive) {
    params.append("brand", brand)
  } else {
    params = new URLSearchParams(
      Array.from(params).filter(
        ([key, value]) => key !== "brand" || value !== brand
      )
    )
  }
  return (
    <Link
      style={{ color: isActive ? "red" : "" }}
      to={`/shoes?${params.toString()}`}
      {...props}
    />
  )
}
