import React from 'react'
import Masony from 'react-masonry-component'
import PropTypes from 'prop-types'
import { ImageList, ImageItem, Image } from './index.styled'
import galleryImg1 from '../../../../assets/images/gallery/gallery1.jpg'
import galleryImg2 from '../../../../assets/images/gallery/gallery2.jpg'
import galleryImg3 from '../../../../assets/images/gallery/gallery3.jpg'
import galleryImg4 from '../../../../assets/images/gallery/gallery4.jpg'
import galleryImg5 from '../../../../assets/images/gallery/gallery5.jpg'
import galleryImg6 from '../../../../assets/images/gallery/gallery6.jpg'
import galleryImg7 from '../../../../assets/images/gallery/gallery7.jpg'
import galleryImg8 from '../../../../assets/images/gallery/gallery8.jpg'
import galleryImg9 from '../../../../assets/images/gallery/gallery9.jpg'

const GalleryComponent = ({ imagesData }) => {
  const masonryOptions = {
    fitWidth: false,
    columnWidth: 300,
    // gutter: 30,
    itemSelector: '.photo-item',
  }

  console.log(imagesData)

  return (
    <Masony
      className={'photo-list'}
      elementType={ImageList}
      options={masonryOptions}
      disableImagesLoaded={false}
      updateOnEachImageLoad={false}
    >
      {imagesData &&
        imagesData.map((image, index) => {
          return (
            <ImageItem key={index} className="photo-item">
              <Image src={image.urls.regular} />
            </ImageItem>
          )
        })}
    </Masony>
  )
}

GalleryComponent.propTypes = {
  imagesData: PropTypes.array,
}
export default GalleryComponent
