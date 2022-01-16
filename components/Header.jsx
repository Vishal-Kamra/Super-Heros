import { MDBBtn } from "mdb-react-ui-kit";
import Link from "next/link";

const Header = () => {
  return (
    <div className="navbar mb-4">
      <div className="container">
        <Link href="/" className="navbar-brand">
          Header
        </Link>
        <div>
          <Link href="/add">
            <MDBBtn className="mx-2">Add New Hero</MDBBtn>
          </Link>
          <Link href="/about">
            <MDBBtn>About</MDBBtn>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
