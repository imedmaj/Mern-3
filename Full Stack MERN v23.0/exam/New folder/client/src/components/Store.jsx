import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Store = () => {
  const { id } = useParams();
  const [oneStore, setOneStore] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/Store/${id}`)
      .then((res) => {
        console.log(res.data);
        setOneStore(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <div>
      <div>
        <Link class="text-sm-end" to={"/"}>
          <h3>go back home</h3>
        </Link>
      </div>
      <h1>{oneStore.Number} Details</h1>

      <h2> {oneStore.Name}</h2>
      <h2>Store Number {oneStore.Number}</h2>
      <h3>{oneStore.Open ? "Open" : "Closed"}</h3>
      <div>
      <Link to={"/stores/edit/"+id }>
                            <button>Edit store Details</button> 
                                </Link>
       
      </div>
    </div>
  );
};

export default Store;
