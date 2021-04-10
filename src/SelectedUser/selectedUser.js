import { useParams } from "react-router";
import UserPage from "../ProfilePage/UserProfile";

export default function SelectedUser({USER_LOGGED_IN, currentUserId}) {
  const { id } = useParams();
  return (
    //NEW VALUE OF SELECTED_USER_ID !!!!!
    <div>
      <UserPage selectedUserId={id} USER_LOGGED_IN = {USER_LOGGED_IN} currentUserId = {currentUserId}/>
    </div>
  );
}
