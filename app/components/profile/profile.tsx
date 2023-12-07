import React, { useEffect, useState } from "react"
import { userProfile } from "./profile.types"

const Profile = () => {
  const [profile, setProfile] = useState({} as userProfile)

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => {
        data && setProfile(data[0])
      })
  }, [])

  return (
    <p>
      {profile.name ? (
        <>
          Logged in as: <span>{profile.name}</span>
        </>
      ) : (
        <>Log in</>
      )}
    </p>
  )
}

export default Profile
