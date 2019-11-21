import React from "react";
import { MapDispatchToProps, connect } from "react-redux";

import { logIn } from "../../store/auth/actions";

const spotifyLogin = () => {
  // TODO: make as env variable
  window.location.href = "http://localhost:9000/auth/spotify";
};

interface DispatchProps {
  logIn: typeof logIn;
}

interface OwnProps {}

type Props = DispatchProps & OwnProps;

const Login: React.FC<Props> = () => {
  return (
    <div>
      <button onClick={spotifyLogin}>click me</button>
    </div>
  );
};

const mapDispatchToProps: MapDispatchToProps<DispatchProps, OwnProps> = dispatch => ({
  logIn: jwt => dispatch(logIn(jwt))
});

export default connect(null, mapDispatchToProps)(Login);
