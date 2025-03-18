import { useNavigate } from "react-router-dom"

const Routes = () => {
  const navigate = useNavigate();
  return (
      <div>
          <ul className="flex gap-x-10 max-sm:gap-x-5  max-sm:pb-4    pt-1 text-center max-sm:justify-center max-sm:items-center">
              <li className="border-b-1"><button onClick={() => navigate("/")}>Home</button></li>
              <li><button onClick={() => navigate("/About")}>Contact</button></li>
              <li><button onClick={() => navigate("/About")}>About</button></li>
              <li>Sign up</li>
          </ul>
    </div>
  )
}

export default Routes