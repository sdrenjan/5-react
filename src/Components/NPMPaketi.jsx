import randomstring from 'randomstring';
import moment from 'moment';
import { Link } from 'react-router-dom';

export default function NPMPaketi() {
  return (
    <div>
      {randomstring.generate()}
      <br/>
      {moment().format("MMMM Do YYYY, h:mm:ss a")}
      <br />
      <Link to='/'>home</Link>     
    </div>
  );
}