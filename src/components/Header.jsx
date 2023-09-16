function Header(props) {

    return (
      <div className="header">
        <h1>{props.children}</h1>
        {console.log(props.children)}
      </div>
    );
  
  }
  
  export default Header;
  