import React from "react";
import './Filter.css'
export const Filter=()=>{
    return(
        <div className="Fliter">
            <h1>Lọc vé</h1>
            <div className="Day">
                <h4>Từ ngày</h4>
                    <input type="date" className="day1"></input>
            <div className="Dayy">
                <h4>Từ ngày</h4>
                    <input type="date" className="day1"></input>
                    </div>        
        <div className="Satus">
            <h4 className="Satus1">Tình trạng sử dụng</h4>
            <label htmlFor="item1" className="item1">
                <input
                    type="radio"
                    id="item1"
                    name="item1"
                    value="item1"/>
                    Tất cả
            </label>
            <label htmlFor="item2" className="item2">
                <input
                    type="radio"
                    id="item2"
                    name="item2"
                    value="item2"/>
                    Đã sử dụng
            </label>
            <label htmlFor="item3" className="item3">
                <input
                    type="radio"
                    id="item3"
                    name="item3"
                    value="item3"/>
                    Chưa sử dụng
            </label>
            <label htmlFor="item4" className="item4">
                <input
                    type="radio"
                    id="item4"
                    name="item4"
                    value="item4"/>
                Hết hạn
            </label>
        <div className="Check-in">
            <h4>Cổng Check - in</h4>
            <label htmlFor="item5" className="item5">
                <input
                    type="checkbox"
                    id="item5"
                    name="item5"
                    value="item5"/>
                    Tất cả
            </label>
            <label htmlFor="item6" className="item6">
                <input
                    type="checkbox"
                    id="item6"
                    name="item6"
                    value="item6"/>
                    Cổng 1
            </label>
            <label htmlFor="item7" className="item7">
                <input
                    type="checkbox"
                    id="item7"
                    name="item7"
                    value="item7"/>
                    Cổng 2
            </label>
            <label htmlFor="item8" className="item8">
                <input
                    type="checkbox"
                    id="item8"
                    name="item8"
                    value="item8"/>
                    Cổng 3
            </label>
            <label htmlFor="item9" className="item9">
                <input
                    type="checkbox"
                    id="item9"
                    name="item9"
                    value="item9"/>
                    Cổng 4
            </label>
            <label htmlFor="item10" className="item10">
                <input
                    type="checkbox"
                    id="item10"
                    name="item10"
                    value="item10"/>
                    Cổng 5
            </label>
            <label htmlFor="loc" className="loc">
                <input
                    type="submit"
                    id="Lọc"
                    name="Lọc"
                    value="Lọc"/>
                    
            </label>
        </div>         
        </div>
        </div>
        </div>
    )
}
export default Filter;