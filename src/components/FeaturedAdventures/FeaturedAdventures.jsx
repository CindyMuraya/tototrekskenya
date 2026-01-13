import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectCoverflow, Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import Img1 from '../../assets/adventures/safari.jpg'
import Img2 from '../../assets/adventures/hiking.jpg'
import Img3 from '../../assets/adventures/park.jpg'
import Img4 from '../../assets/adventures/birdwatching.jpg'
import Img5 from '../../assets/adventures/forest.jpg'
import Img6 from '../../assets/adventures/mom-and-me.jpg'
import AdventuresCard from './FeaturedAdventuresCard'

const AdventuresData = [
    {
        img: Img1,
        title: "Maasai Mara Safari",
        description: "Experience the thrill of the Great Migration and witness the Big Five in their natural habitat.",
        link: "/adventures/maasai-mara-safari"
    },
    {
        img: Img2,
        title: "Mount Kenya Trek",
        description: "Conquer Africa's second-highest peak with our guided treks suitable for all skill levels.",
        link: "/adventures/mount-kenya-trek"
    },
    {
        img: Img3,
        title: "Amboseli National Park",
        description: "Get up close with majestic elephants against the stunning backdrop of Mount Kilimanjaro.",
        link: "/adventures/amboseli-national-park"
    },
    {
        img: Img4,
        title: "Lake Nakuru Bird Watching",
        description: "Discover the vibrant birdlife, including thousands of flamingos, at the picturesque Lake Nakuru.",
        link: "/adventures/lake-nakuru-bird-watching"
    },
    {
        img: Img5,
        title: "Jungle Trekking in Kakamega Forest",
        description: "Explore Kenya's only tropical rainforest, home to diverse flora and fauna.",
        link: "/adventures/jungle-trekking-in-kakamega-forest"
    },
    {
        img: Img6,
        title: "Mom & Me Getaway",
        description: "Enjoy a special bonding experience with your loved one in a serene and beautiful setting.",
        link: "/adventures/mom-and-me-getaway"
    }
];

const FeaturedAdventures = () => {
  return (
    <div className="bg-gradient-to-b from-golden-orange to-burnt-umber py-12">
        <div className="container">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold text-amber-950 mb-4">Featured Adventures</h1>
                <p className="text-2xl text-yellow-900 max-w-2xl mx-auto">Discover unforgettable experiences in Kenya's most spectacular destinations</p>
            </div>
            <div className="py-2 px-8">
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    loop={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 200,
                        modifier: 2.5,
                        slideShadows: false,
                    }}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                        dynamicBullets: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, EffectCoverflow, Pagination, Navigation]}
                    className="swiper-container"
                >
                    {AdventuresData.map((adventure, index) => (
                        <SwiperSlide key={index} className="swiper-slide-custom">
                            <AdventuresCard {...adventure} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    </div>
  )
}

export default FeaturedAdventures