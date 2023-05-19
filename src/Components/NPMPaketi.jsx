import randomstring from 'randomstring';
import moment from 'moment';

export default function NPMPaketi() {
  return (
    <div>
      {randomstring.generate()}
      <br/>
      {moment().format("MMMM Do YYYY, h:mm:ss a")}
    </div>
  );
}