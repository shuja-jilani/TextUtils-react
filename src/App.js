
import './Appa.css';
// app js me jo kuch likha hoga wo npm start krne ke baad humari site dikhaegi
//JSX hota ye h ki hoti to html hi h bs js ka mukut pehna hota h, jsx humare function ke return ke () ke andr likhi jaati h
//jsx me sb kuch html ki trh h bs for usme htmlFor likhte hn aur jo js ke reseerved keywords honge unhe bhi 
// return () ke brackets ke andr jo jsx h usme js likhne ke liye use {}

function App() {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href='/'>TextUtils</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href='/'>Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href='/'>About</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </>
  );
}

export default App;
