import "./home.scss";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Navbar from "../../Components/Navbar/Navbar";
import Widget from "../../Components/Widgets/Widget";
import Featured from "../../Components/Featured/Featured";
import Chart from "../../Components/Chart/Chart";
import Table from "../../Components/Table/Table";

import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';



const widgets = [
  {
    title: "USERS",
    value: 100,
    text: "See all users",
    icon: (<PersonOutlineIcon className="icon"
       style={{
          backgroundColor:"rgba(255,0,0,0.2)",
          color:"crimson"
       }}
    />)
  },

  {
    title: "ORDERS",
    value: 100,
    text: "View all users",
    icon: (<ShoppingCartIcon className="icon"
        style={{
          backgroundColor:"rgba(218,165,32,0.2)",
          color:"goldenrod"
        }}
    />)
  },

  {
    title: "EARNINGS",
    value: "$ 100 ",
    text: "Veiw new earnings",
    icon: (<CurrencyExchangeIcon className="icon"
       style={{
          backgroundColor:"rgba(0,128,0,0.2)",
          color:"green"
        }}
    />)
  },

  {
    title: "BALANCE",
    value: "$ 120",
    text: "See details",
    icon: (<AccountBalanceWalletIcon className="icon"
        style={{
          backgroundColor:"rgba(128,0,128 ,0.2)",
          color:"purple"
        }}
    />)
  },
]

const Home = () => {
  
  return (
    <div className="home">
      <Sidebar/>
      <div className="homeContainer">
        <Navbar/>  
        <div className="widgets">
          {widgets.map((widget,index) =>
            {
              return <Widget key={index} widget={widget}/>
            }) 
          }
        </div>
        <div className="charts">
          <Featured/>
          <Chart width={800} height={394}/>
        </div>
        <div className="listContainer">
          <div className="listTable">
            <Table/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
