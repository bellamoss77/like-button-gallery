document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('galleryContainer');
    const images = [
        {
            src: 'https://github.com/bellamoss77/like-button-gallery/blob/main/Images/NATURE:LANDSCAPE/SKYLINE-SUNRISE_1.png?raw=true',
            alt: 'sunrise from blue ridge parkway',
            caption: 'Blue Ridge Parkway June 2024',
            id: 1
        }, {
            src: 'https://github.com/bellamoss77/like-button-gallery/blob/main/Images/NATURE:LANDSCAPE/SKYLINE-SUNRISE_2.png?raw=true',
            alt: 'sunrise from blue ridge parkway',
            caption: 'Blue Ridge Parkway June 2024',
            id: 2
        }, {
            src: 'https://github.com/bellamoss77/like-button-gallery/blob/main/Images/NATURE:LANDSCAPE/SKYLINE-SUNRISE_3.png?raw=true',
            alt: 'sunrise from blue ridge parkway',
            caption: 'Blue Ridge Parkway June 2024',
            id: 3
        }, {
            src: 'https://github.com/bellamoss77/like-button-gallery/blob/main/Images/NATURE:LANDSCAPE/SKYLINE-SUNRISE_4.png?raw=true',
            alt: 'sunrise from blue ridge parkway',
            caption: 'Blue Ridge Parkway June 2024',
            id: 4
        }, {
            src: 'https://github.com/bellamoss77/like-button-gallery/blob/main/Images/NATURE:LANDSCAPE/SKYLINE-SUNRISE_5.png?raw=true',
            alt: 'sunrise from blue ridge parkway',
            caption: 'Blue Ridge Parkway June 2024',
            id: 5
        }, {
            src: 'https://github.com/bellamoss77/like-button-gallery/blob/main/Images/NATURE:LANDSCAPE/SKYLINE-SUNRISE_6.png?raw=true',
            alt: 'Albemarle County, VA sunrise',
            caption: 'Albemarle County, VA June 2024',
            id: 6
        }, {
            src: 'https://github.com/bellamoss77/like-button-gallery/blob/main/Images/NATURE:LANDSCAPE/SKYLINE-SUNRISE_7.png?raw=true',
            alt: 'Albemarle County, VA sunrise',
            caption: 'Albemarle County, VA June 2024',
            id: 7
        }, {
            src: 'https://github.com/bellamoss77/like-button-gallery/blob/main/Images/NATURE:LANDSCAPE/SKYLINE-SUNRISE_8.png?raw=true',
            alt: 'sunrise from blue ridge parkway',
            caption: 'Blue Ridge Parkway June 2024',
            id: 8
        }, {
            src: 'https://github.com/bellamoss77/like-button-gallery/blob/main/Images/NATURE:LANDSCAPE/SKYLINE-SUNRISE_9.png?raw=true',
            alt: 'sunrise from blue ridge parkway',
            caption: 'Blue Ridge Parkway June 2024',
            id: 9
        }, {
            src: 'https://github.com/bellamoss77/like-button-gallery/blob/main/Images/NATURE:LANDSCAPE/SKYLINE-SUNRISE_10.png?raw=true',
            alt: 'sunrise from blue ridge parkway',
            caption: 'Blue Ridge Parkway June 2024',
            id: 10
        }, {
            src: 'https://github.com/bellamoss77/like-button-gallery/blob/main/Images/NATURE:LANDSCAPE/SKYLINE-SUNRISE_11.png?raw=true',
            alt: 'sunrise from blue ridge parkway',
            caption: 'Blue Ridge Parkway June 2024',
            id: 11
        }, {
            src: 'https://github.com/bellamoss77/like-button-gallery/blob/main/Images/NATURE:LANDSCAPE/SKYLINE-SUNSET_1.png?raw=true',
            alt: 'sunset from blue ridge parkway',
            caption: 'Blue Ridge Parkway June 2024',
            id: 12
        }, {
            src: 'https://github.com/bellamoss77/like-button-gallery/blob/main/Images/NATURE:LANDSCAPE/SKYLINE-SUNSET_2.png?raw=true',
            alt: 'sunset from blue ridge parkway',
            caption: 'Blue Ridge Parkway June 2024',
            id: 13
        }, {
            src: 'https://github.com/bellamoss77/like-button-gallery/blob/main/Images/NATURE:LANDSCAPE/SKYLINE-SUNSET_3.png?raw=true',
            alt: 'sunset from blue ridge parkway',
            caption: 'Blue Ridge Parkway June 2024',
            id: 14
        }, {
            src: 'https://github.com/bellamoss77/like-button-gallery/blob/main/Images/NATURE:LANDSCAPE/SKYLINE-SUNSET_4.png?raw=true',
            alt: 'sunset from blue ridge parkway',
            caption: 'Blue Ridge Parkway June 2024',
            id: 15
        }, {
            src: 'https://github.com/bellamoss77/like-button-gallery/blob/main/Images/NATURE:LANDSCAPE/SKYLINE-SUNSET_5.png?raw=true',
            alt: 'sunset from blue ridge parkway',
            caption: 'Blue Ridge Parkway June 2024',
            id: 16
        }, {
            src: 'https://github.com/bellamoss77/like-button-gallery/blob/main/Images/NATURE:LANDSCAPE/SKYLINE-SUNSET_6.png?raw=true',
            alt: 'sunset from blue ridge parkway',
            caption: 'Blue Ridge Parkway June 2024',
            id: 17
        }, {
            src: 'https://github.com/bellamoss77/like-button-gallery/blob/main/Images/NATURE:LANDSCAPE/SKYLINE-SUNSET_7.png?raw=true',
            alt: 'sunset from blue ridge parkway',
            caption: 'Blue Ridge Parkway June 2024',
            id: 18
        }, {
            src: 'https://github.com/bellamoss77/like-button-gallery/blob/main/Images/NATURE:LANDSCAPE/SKYLINE-SUNSET_8.png?raw=true',
            alt: 'sunset from blue ridge parkway',
            caption: 'Blue Ridge Parkway June 2024',
            id: 19
        }, {
            src: 'https://github.com/bellamoss77/like-button-gallery/blob/main/Images/NATURE:LANDSCAPE/SKYLINE-SUNSET_9.png?raw=true',
            alt: 'sunset from blue ridge parkway',
            caption: 'Blue Ridge Parkway June 2024',
            id: 20
        }, {
            src: 'https://github.com/bellamoss77/like-button-gallery/blob/main/Images/NATURE:LANDSCAPE/SKYLINE-SUNSET_10.png?raw=true',
            alt: 'sunset from blue ridge parkway',
            caption: 'Blue Ridge Parkway June 2024',
            id: 21
        }, {
            src: 'https://github.com/bellamoss77/like-button-gallery/blob/main/Images/NATURE:LANDSCAPE/SKYLINE-SUNSET_11.png?raw=true',
            alt: 'sunset from Albemarle County, VA',
            caption: 'Albemarle County, VA June 2024',
            id: 22
        }, {
            src: 'https://github.com/bellamoss77/like-button-gallery/blob/main/Images/NATURE:LANDSCAPE/SKYLINE-SUNSET_12.png?raw=true',
            alt: 'sunset from Albemarle County, VA',
            caption: 'Albemarle County, VA June 2024',
            id: 23
        }, {
            src: 'https://github.com/bellamoss77/like-button-gallery/blob/main/Images/NATURE:LANDSCAPE/SKYLINE-SUNSET_13.png?raw=true',
            alt: 'sunset from Albemarle County, VA',
            caption: 'Albemarle County, VA June 2024',
            id: 24
        }, {
            src: 'https://github.com/bellamoss77/like-button-gallery/blob/main/Images/NATURE:LANDSCAPE/SKYLINE-SUNSET_14.png?raw=true',
            alt: 'sunset from blue ridge parkway',
            caption: 'Blue Ridge Parkway June 2024',
            id: 25
        }
    ]

    const populateGallery = () => {
        
    }
})