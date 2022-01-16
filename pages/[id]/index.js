import Axios from "axios";
import { MDBBtn } from "mdb-react-ui-kit";
import { useRouter } from "next/router";

const ViewHero = ({ id, hero }) => {
  const Router = useRouter();

  const deleteHero = async () => {
    try {
      const res = await Axios.delete(`http://localhost:3000/api/hero/${id}`);
      Router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="border border-2 p-4">
      <h1>{hero?.name}</h1>
      <h2>Real name of this super hero is {hero?.realName}</h2>
      <MDBBtn onClick={deleteHero} className="btn btn-danger">
        Delete This Hero
      </MDBBtn>
    </div>
  );
};

export async function getServerSideProps({ params }) {
  const id = params.id;
  console.log(id);
  const res = await Axios.get(`http://localhost:3000/api/hero/${id}`);
  console.log(res.data);
  return {
    props: {
      id: id,
      hero: res?.data?.hero,
    },
  };
}

export default ViewHero;
