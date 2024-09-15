import "./styles.css";

function HomeWork_02() {
  const user = {
    firstName: "Homer",
    lastName: "Simpson",
    age: 39,
    job: "Safety Inspector",
    hobby: "Bowling",
    isAdmin: false,
    avatarURL:
    "https://i.pinimg.com/originals/0f/e9/77/0fe9776fbeccdeddf3ee30dac0a0cdc5.jpg",
  };

  const getFullName = () => {
    return `${user.firstName} ${user.lastName}`;
  };

  return (
    <div className="homework02_wrapper">
      <h1 className="page-title">HomeWork 02</h1>
      <div className="card-container">
        <p className="card-info">User Card</p>
        <img className="avatar" src={user.avatarURL} alt="User Avatar" />
        <p className="card-info">Full Name: {getFullName()}</p>
        <p className="card-info">Age: {user.age}</p>
        <p className="card-info">Job: {user.job}</p>
        <p className="card-info">Hobby: {user.hobby}</p>
        <p className="card-info">
          Role: {user.isAdmin ? "Admin" : "Not Admin"}
        </p>
      </div>
    </div>
  );
}

export default HomeWork_02;
