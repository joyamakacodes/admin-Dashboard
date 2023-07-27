import './feature.scss';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';


const Feature = () => {
  return (
    <div className='feature'>
        <div className="top">
            <h1 className='title'>Total</h1>
            <MoreVertIcon fontSize="small"/>
        </div>
        <div className="bottom">
          <div className="featuredCharts">
            <CircularProgressbar value={70} text={"70%"} strokeWidth={5}/>
          </div>
          <p className="title">Total sales made today</p>
          <p className="amount">450</p>
          <p className="desc">Previous transactions processing last payments may not be included</p>
          <div className="summary">
          <div className="item">
            <div className="itemTitle">Target</div>
            <div className="itemResult negative">
              <KeyboardArrowDownIcon/>
              <div className="resultAmount">$24.2k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Week</div>
            <div className="itemResult positive">
              <KeyboardArrowUpIcon/>
              <div className="resultAmount ">$24.2k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Month</div>
            <div className="itemResult positive">
            <KeyboardArrowUpIcon/>
              <div className="resultAmount ">$24.2k</div>
            </div>
          </div>
          
          
          </div>

        </div>
    </div>
  )
}

export default Feature