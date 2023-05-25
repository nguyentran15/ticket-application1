import React from "react";
import Device from './img/Device.png';
import Homepage from './img/Homepage.png';
import Insight from './img/Insight.png';
import Listevent from './img/Listevent.png';
import Setting from './img/Setting.png';
import Ticket from './img/Ticket.png';
import Ticketchange from './img/Ticketchange.png';
import Search from './img/search.png';
import User from './img/user.png';
import Gmail from './img/fi_mail.png';
import Bell from './img/fi_bell.png';
import './Home.css'
export const ListHome=()=>{
    return(
        <div className="home-page">
            <div className="page">
                <div className="insight">
                    <img src={Insight}></img>
                </div>
                <div className="list-page">
                <a href="#">
                    <img className="icon1 icon-home" src={Homepage} alt="Trang chủ" />
                    Trang chủ
                    </a>
                </div>
                <div className="list-page2">
                    <a href="#">
                        <img className="icon" src={Ticket}/>
                        Quản lý vé
                    </a>
                </div>
                <div className="list-page3">
                    <a href="#">
                        <img className="icon" src={Ticketchange}/>
                        Đổi soát vé
                    </a>
                </div>
                <div className="list-page4">
                    <a href="#">
                        <img className="icon" src={Setting}/>
                            Cài đặt
                    </a>
                </div>
                <div className="list-page5">
                    <h4 className="icon">   Gói dịch vụ</h4>
                </div>
            </div>
        <div className='from-controlpass'>
                <input type="text" id="search" />
                <img className="search" src={Search}/>
        <div className="from"> 
                <img className="user" src={User}/>
                <img className="Gmail" src={Gmail}/>
                <img className="Bell" src={Bell}/>
            </div>  
        </div> 
        <div className="ListTicket-page">
            
            <div className="ListTicket">
                <h1>Danh sách vé</h1>
            </div>
            <div className="Search-Ticket">
                <input className="search-ticket" type="search"/>
            </div>
            <div className="filter">
                <button className="btt">Lọc vé</button>
                
            </div>
            <div className="filter1">
                <button className="btt1">Xuất file(.csv)</button>
            </div>
            <div className="Booking-code">
                <table className="List-ticket10">
                    <tr>
                        <th>STT</th>
                        <th>Booking code</th>
                        <th>Số vé</th>
                        <th>Tên sự kiện</th>
                        <th>Tình trạng sử dụng</th>
                        <th>Ngày sử dụng</th>
                        <th>Ngày xuất vé</th>
                        <th>Cổng check-in</th>
                    </tr>
                    
                    <tr>
                        <td>1</td>
                        <td>ALT20210501</td>
                        <td>123456789034</td>
                        <td>Hội chợ triển lãm tiêu dùng 2021</td>
                        <td>
                            <span className="Blue"></span>
                            Đã sử dụng
                        </td>
                        <td>14/04/2021</td>
                        <td>14/04/2021</td>
                        <td>cổng 1</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>ALT20210501</td>
                        <td>236784631642</td>
                        <td>Hội chợ triển lãm tiêu dùng 2021</td>
                        <td>
                            <span className="Blue"></span>
                            Chưa sử dụng
                        </td>
                        <td>14/04/2021</td>
                        <td>14/04/2021</td>
                        <td>_</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>ALT20210501</td>
                        <td>487621489474</td>
                        <td>Hội chợ triển lãm tiêu dùng 2021</td>
                        <td>
                            <span className="Blue"></span>
                            Hết hạn
                        </td>
                        <td>14/04/2021</td>
                        <td>14/04/2021</td>
                        <td>_</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>ALT20210501</td>
                        <td>201649631896</td>
                        <td>Hội chợ triển lãm tiêu dùng 2021</td>
                        <td>
                            <span className="Blue"></span>
                            Hết hạn
                        </td>
                        <td>14/04/2021</td>
                        <td>14/04/2021</td>
                        <td>_</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>ALT20210501</td>
                        <td>201649631896</td>
                        <td>Hội chợ triển lãm tiêu dùng 2021</td>
                        <td>
                            <span className="Blue"></span>
                            Đã sử dụng
                        </td>
                        <td>14/04/2021</td>
                        <td>14/04/2021</td>
                        <td>cổng 1</td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>ALT20210501</td>
                        <td>148920121478</td>
                        <td>Hội chợ triển lãm tiêu dùng 2021</td>
                        <td>
                            <span className="Blue"></span>
                            Đã sử dụng
                        </td>
                        <td>14/04/2021</td>
                        <td>14/04/2021</td>
                        <td>cổng 1</td>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td>ALT20210501</td>
                        <td>654115684899</td>
                        <td>Hội chợ triển lãm tiêu dùng 2021</td>
                        <td>
                            <span className="Blue"></span>
                            Đã sử dụng
                        </td>
                        <td>14/04/2021</td>
                        <td>14/04/2021</td>
                        <td>cổng 1</td>
                    </tr>
                    <tr>
                        <td>8</td>
                        <td>ALT20210501</td>
                        <td>205465031465</td>
                        <td>Hội chợ triển lãm tiêu dùng 2021</td>
                        <td>
                            <span className="Blue"></span>
                            Đã sử dụng
                        </td>
                        <td>14/04/2021</td>
                        <td>14/04/2021</td>
                        <td>cổng 1</td>
                    </tr>
                    <tr>
                        <td>9</td>
                        <td>ALT20210501</td>
                        <td>894648474910</td>
                        <td>Hội chợ triển lãm tiêu dùng 2021</td>
                        <td>
                            <span className="Blue"></span>
                            Đã sử dụng
                        </td>
                        <td>14/04/2021</td>
                        <td>14/04/2021</td>
                        <td>cổng 1</td>
                    </tr>
                    <tr>
                        <td>10</td>
                        <td>ALT20210501</td>
                        <td>894875101400</td>
                        <td>Hội chợ triển lãm tiêu dùng 2021</td>
                        <td>
                            <span className="Blue"></span>
                            Đã sử dụng
                        </td>
                        <td>14/04/2021</td>
                        <td>14/04/2021</td>
                        <td>cổng 1</td>
                    </tr>
                    <tr>
                        <td>11</td>
                        <td>ALT20210501</td>
                        <td>205314876321</td>
                        <td>Hội chợ triển lãm tiêu dùng 2021</td>
                        <td>
                            <span className="Blue"></span>
                            Đã sử dụng
                        </td>
                        <td>14/04/2021</td>
                        <td>14/04/2021</td>
                        <td>cổng 1</td>
                    </tr>
                    <tr>
                        <td>12</td>
                        <td>ALT20210501</td>
                        <td>185653100147</td>
                        <td>Hội chợ triển lãm tiêu dùng 2021</td>
                        <td>
                            <span className="Blue"></span>
                            Đã sử dụng
                        </td>
                        <td>14/04/2021</td>
                        <td>14/04/2021</td>
                        <td>cổng 1</td>
                    </tr>
                </table>
                <div className="next-page">
                    <a className="next-page-color">1</a>
                    <a>2</a>
                    <a>3</a>
                    <a>4</a>
                    <a>5</a>
                    <a>...</a>
                    <a>20</a>
                </div>

            </div>
        </div>           
     </div>
     
            
        
    )
}
export default ListHome;