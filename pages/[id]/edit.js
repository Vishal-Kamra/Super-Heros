import { useRouter } from "next/router";
import { MDBInput, MDBBtn } from "mdb-react-ui-kit";
import Axios from "axios";
import { useState } from "react";

const AddNewHero = ({id, hero}) => {
  const Router = useRouter();
  const [form, setForm] = useState({
    realName: hero?.realName,
    name: hero?.name,
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const saveHero = async (e) => {
    e.preventDefault();
    console.log(form)
    try {
      const res = await Axios.put(`http://localhost:3000/api/hero/${id}`, form);
      console.log(res);
      Router.push("/");
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <form onSubmit={saveHero}>
      <h1 className="display-2 my-4">Add New Hero</h1>
      <MDBInput
        label="Super Hero Name"
        type="text"
        name="name"
        value={form?.name}
        onChange={handleChange}
      />
      <MDBInput
        label="Real Name"
        type="text"
        name="realName"
        value={form?.realName}
        onChange={handleChange}
        className="my-4"
      />
      <MDBBtn type="submit">Save Hero</MDBBtn>
    </form>
  );
};

export async function getServerSideProps({ params }) {
    const id = params.id;
    console.log("edit this hero",id);
    const res = await Axios.get(`http://localhost:3000/api/hero/${id}`);
    console.log(res.data.hero);
    return {
      props: {
        id: id,
        hero: res?.data?.hero,
      },
    };
  }

export default AddNewHero;
