import ImageSlider from "@/components/imageSlider"
import { clientSideFunction } from "@/utils/client-utils"
import { serverSideFunction } from "@/utils/server-utils"

export default function ServerRoutePage() {
    console.log("Server route rendered")
    const result = serverSideFunction()
    // const clientResult = clientSideFunction()
  return (
    <div>
        <div>ServerRoutePage</div>
        <p>{result}</p>
        <ImageSlider/>
          
    </div>
    )
}





// import React from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';


// export default function ClientRoutePage() {
//     const settings = {
//         dots: true,
//       };
//       return (
//         <div className="image-slider-container">
//           <Slider {...settings}>
//             <div>
//               <img src="http://picsum.photos/400/200" />
//             </div>
//             <div>
//               <img src="http://picsum.photos/400/200" />
//             </div>
//             <div>
//               <img src="http://picsum.photos/400/200" />
//             </div>
//             <div>
//               <img src="http://picsum.photos/400/200" />
//             </div>
//           </Slider>
//         </div>
//       );
// }
