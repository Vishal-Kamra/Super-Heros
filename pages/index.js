import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
} from "mdb-react-ui-kit";

import Axios from "axios";
import Link from "next/link"

const Home = ({ heros }) => {
  return (
    <>
      <div className="d-flex flex-wrap">
        {heros?.hero?.map((hero, index) => (
          <MDBCard className="m-4 border border-2" style={{ width: "22rem" }} key={index}>
            <MDBCardBody>
              <MDBCardTitle>{hero.name}</MDBCardTitle>
              <MDBCardText>
                Click on view Hero to reveal the real identity of this super hero.
              </MDBCardText>
              <Link href={`/${hero._id}`}><MDBBtn style={{marginRight: "10px"}}>View Hero</MDBBtn></Link>
              <Link href={`/${hero._id}/edit`}><MDBBtn>Edit Hero</MDBBtn></Link>
            </MDBCardBody>
          </MDBCard>
        ))}
      </div>
    </>
  );
};

export async function getStaticProps(context) {
  const res = await Axios.get("http://localhost:3000/api/hero");
  const { data } = res;
  return {
    props: {
      heros: data,
    }, // will be passed to the page component as props
  };
}

export default Home;
