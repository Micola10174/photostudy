import React from 'react'
import {
  ServicesDescription,
  ServicesImg,
  ServicesItem,
  ServicesTitle,
  ServicesWrapper,
} from '../index.styled'
import servicesImg1 from '../../../assets/images/service-1.jpg'
import servicesImg2 from '../../../assets/images/service-2.jpg'
import servicesImg3 from '../../../assets/images/service-3.jpg'

const Services = () => {
  return (
    <ServicesWrapper>
      <ServicesItem>
        <ServicesImg src={servicesImg1} />
        <ServicesTitle>Киносъемка</ServicesTitle>
        <ServicesDescription>
          Таким образом укрепление и развитие структуры в значительной степени
          обуславливает создание новых предложений. Повседневная практика
          показывает, что сложившаяся структура организации требуют определения
          и уточнения модели развития.
        </ServicesDescription>
      </ServicesItem>
      <ServicesItem>
        <ServicesImg src={servicesImg2} />
        <ServicesTitle>Видео</ServicesTitle>
        <ServicesDescription>
          Таким образом укрепление и развитие структуры в значительной степени
          обуславливает создание новых предложений. Повседневная практика
          показывает, что сложившаяся структура организации требуют определения
          и уточнения модели развития.
        </ServicesDescription>
      </ServicesItem>
      <ServicesItem>
        <ServicesImg src={servicesImg3} />
        <ServicesTitle>Обработка</ServicesTitle>
        <ServicesDescription>
          Таким образом укрепление и развитие структуры в значительной степени
          обуславливает создание новых предложений. Повседневная практика
          показывает, что сложившаяся структура организации требуют определения
          и уточнения модели развития.
        </ServicesDescription>
      </ServicesItem>
    </ServicesWrapper>
  )
}

export default Services
