import "./featured.scss"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <div className="title">Total Revenue</div>
        <div className="icon"><MoreVertIcon/></div>
      </div>

      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={70} text={"$ 100"}/>
        </div>
        <div className="title">Total sales made today</div>
        <div className="value">$ 420</div>
        <div className="text">Previous transactions processings. Last payments may not be included</div>
        
        <div className="summary">

            <div className="item">
              <div className="itemTitle">Target</div>
              <div className="itemResult negative">  
                <KeyboardArrowDownIcon fontSize="small"/>
                <div className="resultAmount">$12.4k</div>
              </div>
            </div>

            <div className="item">
              <div className="itemTitle">Last Week</div>
              <div className="itemResult positive">  
                <KeyboardArrowUpIcon fontSize="small"/>
                <div className="resultAmount">$12.4k</div>
              </div>
            </div>


            <div className="item">
              <div className="itemTitle">Last Month</div>
              <div className="itemResult positive">  
                <KeyboardArrowUpIcon fontSize="small"/>
                <div className="resultAmount">$12.4k</div>
              </div>
            </div>


            

        </div>
      </div>
    </div>
  )
}

export default Featured