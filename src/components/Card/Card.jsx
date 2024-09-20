import "./styles.css";

function Card() {
  const user = {
    firstName: "Homer",
    lastName: "Simpson",
    job: "Safety Inspector",
    hobby: "Bowling",
    avatarURL:
      "https://i.pinimg.com/originals/0f/e9/77/0fe9776fbeccdeddf3ee30dac0a0cdc5.jpg",
  };

  const getFullName = () => {
    return `${user.firstName} ${user.lastName}`;
  };

  return (
    <div className="card-container">
      <p className="card-info">User Card</p>
      <img className="avatar" src={user.avatarURL} alt="User Avatar" />
      <p className="card-info">Full Name: {getFullName()}</p>
      <p className="card-info">Job: {user.job}</p>
      <p className="card-info">Hobby: {user.hobby}</p>
    </div>
  );
}
export default Card;
