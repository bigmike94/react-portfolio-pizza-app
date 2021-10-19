import React, {useState, useEffect} from 'react';
import './about.css';

function About(){
    const [about, setAbout] = useState(null);
    useEffect(() => {
        fetch(`http://localhost:3000/about`).then(response => response.json())
            .then(data => {setAbout(data) });
    },[]);
    
    if (about===null) return <div>Loading...</div>;
        const images = about.imgs.map((img, index)=>{
            return (
                <div className="col-md-6" key={index}>
                    <img src={img} className="img-fluid" alt={`about${index}`}/>
                </div>
            )
        })
       return (
               <div className="row" id="info-section">
                        <div className="col-md-6">
                            <div className="row">
                               {images}
                            </div>
                        </div>
                       <div className="col-md-6">
                            <h1>{about.heading}</h1>
                            {about.desc}
                       </div>
                </div>
       );
}
export default About;