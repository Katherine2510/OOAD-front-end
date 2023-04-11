import React, {useState}   from 'react';
import { Link, useParams } from 'react-router-dom';
import {useEffect} from 'react';
import "../../css/table.css"
import '../../css/style.css'
import '../../css/responsive.css'
import '../../css/lightbox.min.css'
import '../../css/bootstrap.min.css'



import axios from 'axios';

export default function ViewFilmDetail(props) {
    const [ViewFilmDetail, setViewFilmDetail] = useState([])
    const { id } = useParams();
    
    
    

    useEffect(() => {
      refreshViewFilmDetail();
    }, [id]);
  
    function refreshViewFilmDetail() {
      const ProjectAPI = axios.get(`http://localhost:3001/api/movie/${id}`
      )
        .then(res => setViewFilmDetail(res.data))
        .catch(err => console.log(err))
    }

  
    return (
        <div>
            
        {/*<div className="image-head-wrapper"   style={{ backgroundImage: "url(" + banner0 + ")" }} >
            <div className="inner-wrapper">
             </div>
    </div>*/}
         
            <div style={{ marginLeft: '8%' }}>
                <h1> THÔNG TIN CHI TIẾT </h1>
                <h1 style={{ fontSize:'20px',textAlign: 'center' }}> {ViewFilmDetail.movie?.title}</h1>
               
            </div>
            <div className="resort-overview-block">
            <div className="container">
            <div className="row">
                <div className="col-md-10 col-sm-12 col-xs-10 ">
                <div className="side-A">
                    <div className="product-thumb">
                    <div className="image">
                        <a href="">
                        <img
                            alt="image"
                            className="img-responsive"
                            src={ViewFilmDetail.movie?.image_url}
                        />
                        </a>
                    </div>
                    </div>
                </div>
                <div className='side-B' >
                    
                    <div col-md-9 col-sm-8 col-xs-12 className='film-detail' >
                  
                    <p>Mã số phim: {ViewFilmDetail.movie?._id}</p>
                    <p>Mô tả phim: {ViewFilmDetail.movie?.description}</p>
                    <p>Thời lượng: {ViewFilmDetail.movie?.durationInMins} phút</p>
                    <p>Ngày khởi chiều: {ViewFilmDetail.movie?.releaseDate.substring(0,10)}</p>
                    <p>Đạo diên: {ViewFilmDetail.movie?.director}</p>
                    <p>Diễn viên: {ViewFilmDetail.movie?.actor}</p>
                  
                    </div>
                    <div className="links film-detail">
                        <a href =  {`/datebooking/${ViewFilmDetail.movie?._id}`} >ĐẶT VÉ</a>
                        <a href = {ViewFilmDetail.movie?.trailer_url} style={{ marginLeft: '10px' }}>XEM TRAILER</a>
                    </div>
                    
                </div>
            
                </div>
                </div>
                <div className="clearfix" />
            </div>
            <div className='container'>

            </div>
                
            </div>
    </div>


       

    
    )
  }
