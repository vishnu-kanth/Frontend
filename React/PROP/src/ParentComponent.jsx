import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
  const username = "Vishnu Kanth";
  const marks = 65;

  let Tiffin = ["Idly", "Dosa", "Kesari"];

  let profile =
    "https://static.vecteezy.com/system/resources/thumbnails/032/176/191/small_2x/business-avatar-profile-black-icon-man-of-user-symbol-in-trendy-flat-style-isolated-on-male-profile-people-diverse-face-for-social-network-or-web-vector.jpg";

  return (
    <div>
      <h1>ParentComponent</h1>

      <ChildComponent
        uname={username}
        marks={marks}
        Tiffin={Tiffin}
        profile={profile}
      />
    </div>
  );
};

export default ParentComponent;