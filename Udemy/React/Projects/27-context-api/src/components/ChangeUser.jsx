import { useContext } from "react"
import UserContext from "../context/UserContext"

function ChangeUser() {
  const { userName, changeUserName } = useContext(UserContext);

  return (
    <button onClick={() => changeUserName(userName === 'John' ? 'Alice' : 'John')}>Change user</button>
  )
}

export default ChangeUser
