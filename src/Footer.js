import logo from './logo.svg';

function Header() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          Мой Header
        </div>
      </header>
    </div>
  );
}

export default Header;
