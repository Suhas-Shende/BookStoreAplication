import { useEffect,useState } from "react";
import BackButton from "../component/BackButton";
import Spinner from "../component/Spinner";
import axios from "axios";
import { useNavigate,useParams } from "react-router-dom";

const DeleteBook = () => {
  const [loading,setLoading]=useState(false);
  const navigate=useNavigate();
  const {id}=useParams();
  const handleDeleteBook=()=>{

    setLoading(true);
    axios.delete(`http://localhost:5555/books/${id}`)
    .then(()=>{
      setLoading(false);
      navigate("/")
    }).caltch((error)=>{
      setLoading(false);
      alert("An alert Gererated due to Error");
      console.log(error)
    })
  }
  return (
    <div className="p-4">
      <BackButton/>
      <h1 className="text-3xl my-4">DeleteBook</h1>
      {loading?<Spinner/>:""}
      <div className="flex flex-col items-center border-2 border-sky-400 rounded-xl w-[600px] p-8 mx-auto">
        <h3 className="text-2xl">Areyou Sure want to delete this Book</h3>
        <button className="p-4 bg-red-600 text-white m-8 w-full" onClick={handleDeleteBook}>Yes Delete It</button>
      </div>
    </div>
  )
}

export default DeleteBook