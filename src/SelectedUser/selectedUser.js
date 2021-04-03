import { useParams } from "react-router";
import UserPage from "../ProfilePage/UserProfile";

export default function SelectedUser({isUserLoggedIn, currentUserUid}) {
  const { id } = useParams();
  return (
    <div>
      <UserPage currentUserId={id} isUserLoggedIn = {isUserLoggedIn} currentUserUid = {currentUserUid}/>
    </div>
  );
}
