import "./single.scss";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Navbar from "../../Components/Navbar/Navbar";
import Chart from "../../Components/Chart/Chart";
import Table from "../../Components/Table/Table";
import { useEffect, useState } from "react";

import { doc, getDoc, collection, where } from "firebase/firestore";
import {db} from "../../firebase";
  
const Single = (props) => {
  const [currentUser,setCurrentUser] = useState({})
  const url = window.location.href.split("/");
  const userId = url[url.length-1];
  useEffect(()=>{
    
    const getData = async (id)=>{
      const userRef = collection(db, "users");
      const userSnap = await getDoc(doc(userRef,id))

      setCurrentUser(userSnap.data())
    }

    getData(userId);

  },[])

  
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="items">
          <div className="singleCard">
            <div className="top">
              <div className="info">Information</div>
              <div className="edit">Edit</div>
            </div>

            <div className="bottom">
              <img src="https://picsum.photos/200" alt="" />
              <div className="content">
                <div className="name">{currentUser?.name}</div>
                <div className="mail">
                  <span>Email:</span> {currentUser?.email}
                </div>
                <div className="phone">
                  <span>Phone:</span> {currentUser?.phone}
                </div>
                <div className="address">
                  <span>Address:</span> {currentUser?.address}
                </div>
                <div className="country">
                  <span>Country:</span> {currentUser?.country}
                </div>
              </div>
            </div>
          </div>

          <div className="singleChart">
            <Chart width={760} height={270} />
          </div>
        </div>
        <div className="table">
          <Table title={"Last Transactions"} />
        </div>
      </div>
    </div>
  );
};

export default Single;
