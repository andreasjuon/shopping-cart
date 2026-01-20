
import { useRef, useEffect } from "react";
import { Link } from "react-router";


function ButtonComponent() {
  const buttonRef = useRef(null);

  useEffect(() => {
    buttonRef.current && buttonRef.current.focus();
  }, []);

  return (
    <Link to="/shop">
      <button ref={buttonRef}>Shop</button>
    </Link>
  );
}


function Home() {
  
  return (
    <>
      <h1>Welcome to Andreas' perfect shop!</h1>

      <p>Hello. Please buy all my things and please do so many times!</p>

      <p>
        Check out my{" "}
        <span style={{ marginLeft: "0.5em", marginRight: "0.5em" }}>
          <ButtonComponent />
        </span>{" "}
        for great deals!
      </p>
    </>
  );
}

export default Home;
