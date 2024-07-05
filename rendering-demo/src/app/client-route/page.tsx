"use client";

// import { serverSideFunction } from "@/utils/server-utils";

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useTheme } from '@/components/theme-provider';
import { clientSideFunction } from '@/utils/client-utils';


export default function ClientRoutePage() {

    const result = clientSideFunction()

    const theme = useTheme()
    const settings = {
        dots: true,
      };
      return (
        <div>
            <h1 style={{color:theme.colors.primary}}>Client Route</h1>
            <h1>Client route {result}</h1>
            <div className="image-slider-container">
              <Slider {...settings}>
                <div>
                  <img src="http://picsum.photos/400/200" />
                </div>
                <div>
                  <img src="http://picsum.photos/400/200" />
                </div>
                <div>
                  <img src="http://picsum.photos/400/200" />
                </div>
                <div>
                  <img src="http://picsum.photos/400/200" />
                </div>
              </Slider>
            </div>
        </div>
      );
}
