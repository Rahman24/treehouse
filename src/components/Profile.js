const Profile = ({ userName = "", email ="", house="" }) => {
  return <div className="user-profile text-center">
    <h2 className="text-white text-uppercase">{userName}</h2>
    <p className="text-white text-lowercase">{email}</p>
    <h5 className="text-white ">{house}</h5>
  </div>
}

export default Profile;
