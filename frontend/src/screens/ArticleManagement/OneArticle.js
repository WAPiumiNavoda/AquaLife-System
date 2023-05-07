import React from 'react';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button';


const OneArticle = () => {
  return (
<div>
    <Row></Row>
    <Row className='mt-3 shadow p-3 bg-body rounded'>
        <Col>
        <h3 className='px-5 pb-2' style={{fontSize:"45px"}}>Water Pollution</h3>
        <p className='px-5' style={{fontSize:"25px"}}>Michael Hemsworth — May 07, 2023</p> 
        <p className='pt-4 mx-5 pb-4 text-justify'>Water is an essential resource for life on Earth. It covers over 70% of the planet's surface and is vital for sustaining human, animal, and plant life. However, with the growth of industrialization, urbanization, and human population, water pollution has become a major environmental problem worldwide. 
           Water pollution is the contamination of water bodies, including rivers, lakes, oceans, and groundwater, by harmful substances that can cause harm to humans, animals, and the environment.
Water pollution can be caused by various sources, including industrial waste, agricultural runoff, sewage discharge, oil spills, and dumping of chemicals and hazardous waste. These pollutants can cause a wide range of negative effects on water quality, aquatic life, and human health.
One of the most significant consequences of water pollution is the destruction of aquatic ecosystems.<br/> Polluted water can contain harmful chemicals and heavy metals that can kill fish, plants, and other aquatic life. This can lead to a loss of biodiversity and a decline in the overall health of water ecosystems. Moreover, contaminated water can also harm human health when used for drinking, bathing, or other purposes.
Water pollution also affects the quality of soil and crops. When polluted water is used for irrigation, it can contaminate the soil and lead to the accumulation of toxic substances in crops, which can pose health risks to humans and animals that consume them. Moreover, pollution of groundwater sources can render them unusable for drinking, irrigation, and other purposes.
Preventing water pollution requires a collective effort from individuals, industries, and governments. Some of the ways to prevent water pollution include reducing the use of harmful chemicals and pesticides, properly disposing of waste, using environmentally friendly products, and promoting sustainable agricultural practices.
Governments can also implement laws and regulations to prevent water pollution, such as requiring industries to treat their wastewater before releasing it into water bodies, banning the dumping of hazardous waste, and enforcing penalties for violators.
In conclusion, water pollution is a serious environmental problem that affects both the ecosystem and human health. It is caused by a variety of sources and requires a collective effort from individuals, industries, and governments to prevent and mitigate its negative impacts. By taking action to prevent water pollution, we can protect this vital resource and ensure its sustainability for future generations.
              </p>
         </Col>
         <Image 
          src="https://i.ibb.co/XXHpp2Z/bottles-garbage-lake.webp" 
          class="rounded float-right w-80" 
          style={{width: "30%",height:"450px"}} 
          alt="image" />
    </Row>

    <div class="container pt-5 pb-3">
        <div class="row">
            <div class="col-md-7">
            <img src="https://i.ibb.co/VYYLt3S/3d-business-man-studying-online.png" 
            alt="Image" 
            class="img-fluid"
            style={{width: '50%',height:"100%"}} 
            />
            </div>
            <div class="col-md-5" style={{
                background:"#f2f2f2",
                padding:"15px",
                borderRadius:"5px",
                boxShadow:"2px 2px #e6e6e6",
                height:"25%",
            }}>
            <p className='' style={{fontSize:"25px", fontWeight:"700", color:"#0080ff", textAlign:"center"}}>Be a Writer In our community</p> 
            <form>
                <div class="form-group">
                    <label for="message">Name</label>
                    <input type="text" class="form-control" id="message" rows="5" placeholder="Enter your name"/>
                </div>
                <div class="form-group">
                    <label for="message">Email</label>
                    <input class="form-control" type="email" id="message" rows="5" placeholder="Enter your email"/>
                </div>
                    <Button type="submit" href="/ArticleForm" class="btn btn-primary center">Submit</Button>
            </form>
            </div>
        </div>
    </div>
</div>
  )
}

export default OneArticle