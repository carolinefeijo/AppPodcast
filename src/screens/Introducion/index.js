import React, { useState } from 'react'
import AppIntroSlider from 'react-native-app-intro-slider'
import RenderSlides from './components/RenderSlides';
import ButtonPress from './components/ButtonPress';
import { slidesData } from '../../assets/data/mock';

export default function Introducion() {
  return (
    <AppIntroSlider 
      renderItem={RenderSlides}
      data={slidesData}
      activeDotStyle={{
        backgroundColor: "#EA7317",
        width: 10,
      }}
      showSkipButton={false}
      bottomButton

      renderNextButton={ButtonPress}
      renderDoneButton={ButtonPress}

      onDone={() => {  }}
    />
  );

}