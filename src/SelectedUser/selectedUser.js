import { useParams } from "react-router";
import UserPage from "../ProfilePage/UserProfile";

export default function SelectedUser({isUserLoggedIn, currentUserId}) {
  const { id } = useParams();
  return (
    //NEW VALUE OF SELECTED_USER_ID !!!!!
    <div>
      <UserPage selectedUserId={id} isUserLoggedIn = {isUserLoggedIn} currentUserId = {currentUserId}/>
    </div>
  );
}
