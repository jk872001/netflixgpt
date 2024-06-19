import { NETFLIX_LOGO } from "../utils/image"

const Header = () => {
  return (
    <>
    <img  className="w-48 absolute bg-gradient-to-b from-black z-10" src={NETFLIX_LOGO}
    />
    </>
  )
}

export default Header