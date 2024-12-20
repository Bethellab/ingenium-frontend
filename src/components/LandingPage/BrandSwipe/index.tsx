
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import base styles for Swiper
import 'swiper/css/autoplay'; 
import { Autoplay } from 'swiper/modules';
import { image } from '@/assets/image/image';

const brands = [
  { id: 1, src: image.openAI, alt: 'Brand 1' },
  { id: 2, src: image.causal, alt: 'Brand 2' },
  { id: 3, src: image.plain, alt: 'Brand 3' },
  { id: 4, src: image.pallet, alt: 'Brand 4' },
  { id: 5, src: image.openAI, alt: 'Brand 5' },
  { id: 6, src: image.causal, alt: 'Brand 6' },


];

const BrandSwipe = () => {
  return (
    <div className="mt-10 md:mt-24 lg:mt-10 bg-[#CCDDED] py-2 px-2 lg:mb-8 rounded-md">
      <h2 className="text-center text-md  mb-8 text-gray-600">
       Trusted by Leading Companies Worldwide
      </h2>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={3}
        breakpoints={{
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 5 },
        }}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        loop={true}
        className="mb-4"
      >
        {brands.map((brand) => (
          <SwiperSlide key={brand.id} className="flex justify-center ">
            <img
              src={brand.src}
              alt={brand.alt}
              className="h-10 object-contain"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BrandSwipe;
