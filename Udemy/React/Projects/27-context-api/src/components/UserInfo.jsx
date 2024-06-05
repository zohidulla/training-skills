import { useContext } from "react";
import UserContext from "../context/UserContext";

function UserInfo() {
  const { userName, changeUserName } = useContext(UserContext)

  return (
    <h1>{userName}</h1>
  );
}

export default UserInfo;
