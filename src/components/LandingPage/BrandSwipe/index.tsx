
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Import base styles for Swiper
import 'swiper/css/autoplay'; 
import { Autoplay } from 'swiper/modules';
import { image } from '@/assets/image/image';

const brands = [
  { id: 1, src: image.ingenium_logo, alt: 'Brand 1' },
  { id: 2, src: image.ingenium_logo, alt: 'Brand 2' },
  { id: 3, src: image.ingenium_logo, alt: 'Brand 3' },
  { id: 4, src: image.ingenium_logo, alt: 'Brand 4' },
  { id: 5, src: image.ingenium_logo, alt: 'Brand 5' },
  { id: 5, src: image.ingenium_logo, alt: 'Brand 5' },

];

const BrandSwipe = () => {
  return (
    <div className="mt-10 bg-[#cfcfcf] py-3 px-4 mb-10 rounded-md">
      <h2 className="text-center text-md  mb-8 text-gray-600">
       Trusted by Leading Companies Worldwide
      </h2>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={2}
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
              className="h-12 object-contain"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BrandSwipe;
