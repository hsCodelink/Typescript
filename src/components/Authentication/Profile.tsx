export type profiletype = {
  name: string;
  email: string;
};
const Profile = ({ name ,email}: profiletype) => {
  return(
    <>
    <div>Profile Name is :-{name}</div>
    <div>Profile Email is :-{email}</div>
    </>
  );
};

export default Profile;
