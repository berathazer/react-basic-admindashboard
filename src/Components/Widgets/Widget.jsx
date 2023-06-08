import "./widget.scss"
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

const diff = 20;
const Widget = ({widget}) => {
  return (
    <div className="widget">
        <div className="left">
          <div className="title">{widget.title}</div>
          <div className="value">{widget.value}</div>
          <div className="text"><a href="/users">{widget.text}</a></div>
        </div>
        <div className="right">
          <div className="ratio positive">  
          <KeyboardArrowUpIcon/>
            20 %
          </div>
          <div className="icon-container">
            {widget.icon}
          </div>
        </div>
    </div>
  )
}

export default Widget