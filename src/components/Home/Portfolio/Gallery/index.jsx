import React from "react"
import Gallery from "react-photo-gallery"
import galleryImg1 from '../../../../assets/images/gallery/gallery1.jpg'
import galleryImg2 from '../../../../assets/images/gallery/gallery2.jpg'
import galleryImg3 from '../../../../assets/images/gallery/gallery3.jpg'
import galleryImg4 from '../../../../assets/images/gallery/gallery4.jpg'
import galleryImg5 from '../../../../assets/images/gallery/gallery5.jpg'
import galleryImg6 from '../../../../assets/images/gallery/gallery6.jpg'
import galleryImg7 from '../../../../assets/images/gallery/gallery7.jpg'
import galleryImg8 from '../../../../assets/images/gallery/gallery8.jpg'
import galleryImg9 from '../../../../assets/images/gallery/gallery9.jpg'


const GalleryComponent = () => {

    const photos = [
        {
            src: galleryImg1,
            width: 4,
            height: 3,
        },
        {
            src: galleryImg2,
            width: 2,
            height: 1
        },
        {
            src: galleryImg3,
            width: 1,
            height: 1
        },
        {
            src: galleryImg4,
            width: 1,
            height: 1
        },
        {
            src: galleryImg5,
            width: 2,
            height: 2
        },
        {
            src: galleryImg6,
            width: 4,
            height: 3
        },
        {
            src: galleryImg7,
            width: 2,
            height: 2
        },
        {
            src: galleryImg8,
            width: 2,
            height: 1
        },
        {
            src: galleryImg9,
            width: 4,
            height: 3
        }
    ]

    return <Gallery photos={photos} direction={"row"}/>
}

export default GalleryComponent