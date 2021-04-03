import { useEffect, useState } from "react";
import { RiCreativeCommonsZeroLine } from "react-icons/ri";
import { useParams } from "react-router";
import { DataBase } from "../firebase";
import UserPage from "../ProfilePage/UserProfile";

export default function SelectedUser() {
  const { id } = useParams();

  return (
    <div>
      <UserPage currentUser={id} />
    </div>
  );
}
