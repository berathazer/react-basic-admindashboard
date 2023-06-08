import "./new.scss";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Navbar from "../../Components/Navbar/Navbar";
import DriveFolderUploadIcon from "@mui/icons-material/DriveFolderUpload";
import { useEffect, useState } from "react";
import { db } from "../../firebase";
import { addDoc, collection } from "firebase/firestore";
import toast, { Toaster } from "react-hot-toast";
import { auth, createUserWithEmailAndPassword, storage } from "../../firebase";

import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";


const New = () => {
  const [data, setData] = useState({
    fullname: "",
    username: "",
    phone: "",
    email: "",
    address: "",
    password: "",
    country: "",
    img:""
  });
  const [file, setFile] = useState("");


  useEffect(() => {
    const uploadFile = async () => {

      const name = new Date().getTime() + file.name;
      console.log(name);
      const storageRef = ref(storage, "images/"+file.name );
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
            default:
              break;
          }
        },
        (error) => {
          toast.error(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log("File available at", downloadURL);
            setData((prev)=>{return {...prev,img:downloadURL}})
            toast.success("basarili")
          });
        }
      );
    };

    file && uploadFile();
    return () =>{

    }
  }, [file]);




  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      createUserWithEmailAndPassword(auth, data.email, data.password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          const docRef = addDoc(collection(db, "users"), data);
          toast.promise(docRef, {
            loading: "Loading",
            success: "Successfully Add to Database",
            error: "Error when adding user",
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          toast.error(errorMessage);
        });
    } catch (e) {
      toast.error(e);
    }

    
  };



  const handleChange = (e) => {
    setData((prev) => {
      return { ...prev, [e.target.id]: e.target.value };
    });
  };

  return (
    <div className="new">
      <Toaster />
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="title">Add New User</div>
        <form className="userForm" id="addForm" onSubmit={submitHandler}>
          <div className="first">
            <img
              src={data?.img}
              alt="avatar"
              className="avatar"
            />
          </div>

          <div className="middle">
            <div className="upload-image">
              <label htmlFor="file">
                Image: <DriveFolderUploadIcon className="icon" />
              </label>
              <input
                type="file"
                id="file"
                onChange={(e) =>{setFile(e.target.files[0])}}
                style={{ display: "none" }}
              />
            </div>

            <div className="fullname">
              <label htmlFor="fullname">Name and Surname</label>
              <input
                type="text"
                id="fullname"
                onChange={handleChange}
                placeholder="Berat Hazer"
              />
            </div>
            <div className="phone">
              <label htmlFor="phone">Phone</label>
              <input
                type="text"
                id="phone"
                onChange={handleChange}
                placeholder="+90 541 715 63 57"
              />
            </div>
            <div className="address">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                id="address"
                onChange={handleChange}
                placeholder="Cerrah Mah. 1011.Sokak No:35"
              />
            </div>
          </div>

          <div className="last">
            <div className="username">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                onChange={handleChange}
                placeholder="berathazer"
              />
            </div>

            <div className="email">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                id="email"
                autoComplete="false"
                onChange={handleChange}
                placeholder="berathazer371@gmail.com"
              />
            </div>

            <div className="password">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                onChange={handleChange}
                placeholder="******"
              />
            </div>

            <div className="country">
              <label htmlFor="country">Country</label>
              <input
                type="text"
                id="country"
                onChange={handleChange}
                placeholder="Berat Hazer"
              />
            </div>

            <div className="sendButton">
              <button type="submit">Send</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default New;
