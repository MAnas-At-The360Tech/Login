import './App.css';
import LoginToFacebook from './LoginToFacebook';
import LoginToGoogle from './LoginToGoogle';
import LoginToPhone from './LoginToPhone';
// import LogintoGoogleBtn from './LogintoGoogleBtn';

function App() {
  return (
    <div>
      <h1 className="text-center">Login System</h1>
      <div className=" pt-5 d-grid gap-2 col-6 mx-auto">
        <LoginToGoogle />
        <LoginToFacebook />
        <LoginToPhone />
      </div>
    </div>
  );
}

export default App;
