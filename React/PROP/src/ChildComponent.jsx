const ChildComponent = (props) => {
  let { uname, marks, profile, Tiffin } = props;

  return (
    <div>
      <h1>ChildComponent</h1>

      <h2>Welcome {uname}</h2>
      <h3>Marks: {marks}</h3>

      <img src={profile} alt="profile" width="150" />

      <ul>
        {Tiffin.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ChildComponent;

