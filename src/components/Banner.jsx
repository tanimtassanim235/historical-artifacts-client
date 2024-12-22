import { Swiper, SwiperSlide } from 'swiper/react'
import ban1 from '../assets/ai-generated-8978893_1280.jpg'
import ban2 from '../assets/ai-generated-8978902_1280.jpg'
import ban3 from '../assets/hagia-sophia-2387509_1280.jpg'
import ban4 from '../assets/pexels-axp-photography-500641970-18991550.jpg'
import ban5 from '../assets/pexels-mertal-22487080.jpg'
import Slide from './Slide'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Banner = () => {

    return (
        <div className='container px-2 py-3 mx-auto'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className='mySwiper'
            >
                <SwiperSlide>
                    <Slide
                        image={ban1}
                        text='King Tut’s Funerary Mask'
                        p=' The 24-pound facial replica capped the wrapped mummy of the Egyptian king, who died in 1323 B.C. at the age of 19, after ruling just 10 years. The solid gold base glints with lapis lazuli, turquoise and other semiprecious stones. The chin sprouts a tube-like beard, and the forehead displays a vulture and cobra, deities who together symbolized unification of Lower and Upper Egypt.'
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Slide
                        image={ban2}
                        text='Venus of Willendorf'
                        p='Short, fat and nearly 30,000 years old, Venus of Willendorf is the female icon of the Ice Age. The four-inch-tall figurine bears pronounced breasts, buttocks, belly and vaginal lips, but lacks feet or facial features. Braids, or perhaps a knit cap, cover her head, and specks of pigment suggest the tan limestone artifact was once painted red.'
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Slide
                        image={ban3}
                        text='Olmec Colossal Heads'
                        p='The mother culture of Mesoamerica, the Olmec civilization rose from the swampy forests of the Mexican Gulf Coast between about 400 and 1,400 B.C. More than two millennia later, in A.D. 1862, a farmer digging the same land struck a colossal stone head. It was the first of 17 similar heads yet to be recovered, thought to be portraits of Olmec rulers.'
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Slide
                        image={ban4}
                        text='Rosetta Stone'
                        p='The Rosetta Stone is a boring read, a priestly decree issued in 196 B.C., affirming the divine cult of King Ptolemy V on the first anniversary of his coronation. But its scribe chiseled the message into the black slab three times in a row in different scripts: Ancient Greek, Ancient Egypt’s formal hieroglyphs and its more casual, cursive demotic script. And that bilingual, tri-script inscription enabled decipherment of Egyptian hieroglyphs, unlocking all of the ancient civilization writings.'
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Slide
                        image={ban5}
                        text='Terracotta Army'
                        p='Imagine building your tomb for more than 30 years — fueled by limitless power, resources and yearning for immorality. Even then your mausoleum might not compare to the complex commissioned by Qin Shihuang, the first emperor to rule a unified China from 210 to 221 B.C. According to ancient Chinese texts, more than 700,000 laborers worked for the site, which sprawls 22 square miles, far more land than most college campuses (all but three in the U.S., in fact)'
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;