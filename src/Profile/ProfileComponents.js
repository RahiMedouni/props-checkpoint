const ProfileComponents = (props) => {
  return (
    <div>
      <div>{props.children}</div>
      <div>
        <span>
          <h3>Full Name:</h3> {props.FullName}{" "}
        </span>
      </div>
      <div>
        <span>
          <h3>Bio:</h3> {props.Bio}{" "}
        </span>
      </div>
      <div>
        <span>
          <h3>Professions:</h3> {props.Profession}{" "}
        </span>
      </div>
      <div>
        <span> {props.handleName} </span>
      </div>
    </div>
  );
};

export default ProfileComponents;
