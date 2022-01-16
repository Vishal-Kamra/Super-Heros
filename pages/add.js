import { useRouter } from "next/router";
import { MDBInput, MDBBtn } from "mdb-react-ui-kit";
import Axios from "axios";
import { useState } from "react";

const AddNewHero = () => {
  const Router = useRouter();
  const [form, setForm] = useState({
    realName: "",
    name: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const addHero = async (e) => {
    e.preventDefault();
    console.log(form)
    const res = await Axios.post("http://localhost:3000/api/hero", form);
    console.log(res)
    console.log(res);
    Router.push("/");
  };

  return (
    <form onSubmit={addHero}>
      <h1 className="display-2 my-4">Add New Hero</h1>
      <MDBInput
        label="Super Hero Name"
        type="text"
        name="name"
        onChange={handleChange}
      />
      <MDBInput
        label="Real Name"
        type="text"
        name="realName"
        onChange={handleChange}
        className="my-4"
      />
      <MDBBtn type="submit">Add Hero</MDBBtn>
    </form>
  );
};

export default AddNewHero;
