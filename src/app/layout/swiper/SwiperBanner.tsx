
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {
  Button,
  Container,
  Divider,
  Grid,
  GridColumn,
  GridRow,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Segment,
  Sidebar,
} from "semantic-ui-react";
// import { EffectCoverflow, Pagination, Navigation } from 'swiper';
/* The line `import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';` is importing
specific modules from the Swiper library in your TypeScript React application. */
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

import slide_image_1 from "src/app/layout/swiperasset/images/img_1.jpg";
import slide_image_2 from "./assets/images/img_2.jpg";
import slide_image_3 from "./assets/images/img_3.jpg";
// import slide_image_4 from './assets/images/img_4.jpg';
// import slide_image_5 from './assets/images/img_5.jpg';
// import slide_image_6 from './assets/images/img_6.jpg';
// import slide_image_7 from './assets/images/img_7.jpg';

export default function SwiperBanner() {
  return (
    (
        <Segment clearing>
          {/* <Container responsive> */}
            <Grid>
              <GridRow>
              <h1 className="heading">Products Gallery</h1>
                <Swiper
                  effect={"coverflow"}
                  grabCursor={true}
                  centeredSlides={true}
                  loop={true}
                  slidesPerView={"auto"}
                  coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2.5,
                  }}
                  /* The `pagination={{ el: '.swiper-pagination', clickable: true }}` line in the code snippet is
            configuring the pagination settings for the Swiper component in the React application.
            Here's what it's doing: */
                  pagination={{ el: ".swiper-pagination", clickable: true }}
                  /* The `navigation` prop in the Swiper component configuration is setting up navigation
            controls for the slider. Here's what each part of the configuration is doing: */
                  navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                    clickable: true,
                  }}
                  modules={[EffectCoverflow, Pagination, Navigation]}
                  className="swiper_container"
                >
                  <SwiperSlide>
                    <img src={slide_image_1} alt="slide_image" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={slide_image_2} alt="slide_image" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <img src={slide_image_3} alt="slide_image" />
                  </SwiperSlide>
                  {/* <SwiperSlide>
              <img src={slide_image_4} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={slide_image_5} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={slide_image_6} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={slide_image_7} alt="slide_image" />
            </SwiperSlide> */}
    
                  <div className="slider-controler">
                    <div className="swiper-button-prev slider-arrow">
                      <ion-icon name="arrow-back-outline"></ion-icon>
                    </div>
                    <div className="swiper-button-next slider-arrow">
                      <ion-icon name="arrow-forward-outline"></ion-icon>
                    </div>
                    <div className="swiper-pagination"></div>
                  </div>
                </Swiper>
    
              </GridRow>
              <GridColumn>
                
              </GridColumn>
            </Grid>
          {/* </Container> */}
     
        </Segment>
      )
  )
}