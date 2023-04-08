
import React, {useState} from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { toast } from 'react-toastify';
import "../../css/style.css";
import axios from 'axios';
import { Link } from "react-router-dom";

const roleType = {
    S1: '642c132c94b5f0bee36956a9',
    M1:'642c136894b5f0bee36956ad',
    L1:'642c135b94b5f0bee36956ab',
    //thêm các role vào đây,
}

const TimeBooking2 = () => {
        const navigate = useNavigate();
        const {cid} = useParams();
        const [ViewTime, setViewTime] = useState([])
        const {id} = useParams();
    
        useEffect(() => {
        refreshViewTime();
        }, [cid]);

        function refreshViewTime() {
        const ProjectAPI = axios.get(`http://localhost:3001/api/show/getShowByDate/${cid}`
        )
            .then(result => setViewTime(result.data))
            .catch(err => console.log(err))
        };
    
        function ClickToSeat(param){
            
            fetch(
            `http://localhost:3001/api/show/getShowByShowID/${param}`,
            
            )
            .then((response) => {
                console.log(response);
                if (response.ok) {
                return response.json();
                }
                throw Error(response.status);
            })
            .then((result) => {
                console.log(result);
                window.localStorage.clear();
                localStorage.setItem("hall", result?.show?.hall);
             
                switch (result?.show?.hall) {
                    case roleType.S1:
                    navigate(`/datebooking/${id}/timebooking/${cid}/S1`);
                   
                    break;

                    case roleType.L1:
                    navigate(`/datebooking/${id}/timebooking/${cid}/L1`);
                    console.log(result)
                 
                    break;

                    case roleType.M1:
                    navigate(`/datebooking/${id}/timebooking/${cid}/M1`);
                    console.log(result)
                    break;
                    //case //viết nốt vào đây là đc nè
                   
                }
                //em thêm swith case vào đây theo từng role
                // dùng useNavigate để chuyển trang
            })
            .catch((error) => {
                console.log("error", error);
                alert("cant do it ");
            });
        };

    return (
        <div  className="container" style={{ paddingLeft: '10px' }} > 
        <div >  
           <h1 className="booking-detail" style={{ fontSize: '25px', float: 'left'}} >Chọn khung giờ xem phim</h1>
 
           <h1 className="booking-detail" style={{ fontSize: '25px', float: 'left'}} >Ngày chiếu : {cid}</h1>
           <div className="row side-B">
          {  
               ViewTime.listShow?.map((e, i) => (
                 <div>
                  <Link to ={`/${id}/${cid}/${e._id}`} className="button_book_times" onClick={() => ClickToSeat(e._id)} >
               {e.startTime.substr(11, 5)} - {e.endTime.substr(11, 5)}
 
             </Link>
 
             </div>
             )
               )    
 
               }
              
          </div>
          
                  
         </div>
        </div>
        
      

     
    );
  }

  export default TimeBooking2;