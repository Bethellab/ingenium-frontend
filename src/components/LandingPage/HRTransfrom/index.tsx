




const images = [
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/f431fa597e6086a4c2a5b4890afe57260aa6f1972d5584dfde363b0fac273102?placeholderIfAbsent=true&apiKey=5e5f7185f1fc4414936991ff9a3c3ed7", alt: "", className: "object-contain shrink-0 self-stretch  aspect-square rounded-[109px] w-32" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/2dc368d33bd1f21fdb25469490e74e29334cd4362a78d9747be16822ec0e39cc?placeholderIfAbsent=true&apiKey=5e5f7185f1fc4414936991ff9a3c3ed7", alt: "", className: "object-contain shrink-0 self-stretch  aspect-square rounded-[109px] w-32" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/bde404d01662cdfa6f53831bd36dd3d79d2b3a6161f76e15467ba7cc033e57d5?placeholderIfAbsent=true&apiKey=5e5f7185f1fc4414936991ff9a3c3ed7", alt: "", className: "object-contain shrink-0 self-stretch  aspect-square rounded-[109px] w-32" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/7c7f4b41f09fcd2b4254b2dd2a0d2616238965e8317d2f3c2dee46d3792bdeb0?placeholderIfAbsent=true&apiKey=5e5f7185f1fc4414936991ff9a3c3ed7", alt: "", className: "object-contain shrink-0 self-stretch  aspect-square rounded-[109px] w-32" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/d4c9a0ee46a8a759c2dccc229126fcdb55844f3d5ec6fb3c518a019c160f4690?placeholderIfAbsent=true&apiKey=5e5f7185f1fc4414936991ff9a3c3ed7", alt: "", className: "object-contain shrink-0 self-stretch  aspect-square rounded-[109px] w-32" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/92673be03451f233030cc568629c5e794c3411f593e3b7a3c99a4999aa68f471?placeholderIfAbsent=true&apiKey=5e5f7185f1fc4414936991ff9a3c3ed7", alt: "", className: "object-contain shrink-0 self-stretch  aspect-square rounded-[86px] w-32" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/f431fa597e6086a4c2a5b4890afe57260aa6f1972d5584dfde363b0fac273102?placeholderIfAbsent=true&apiKey=5e5f7185f1fc4414936991ff9a3c3ed7", alt: "", className: "object-contain shrink-0 self-stretch  aspect-square rounded-[109px] w-32" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/f431fa597e6086a4c2a5b4890afe57260aa6f1972d5584dfde363b0fac273102?placeholderIfAbsent=true&apiKey=5e5f7185f1fc4414936991ff9a3c3ed7", alt: "", className: "object-contain shrink-0 self-stretch  aspect-square rounded-[109px] w-32" },
  ];



const HRTransform = () => {
  return (
    <section className="flex flex-col py-10 px-3 rounded-3xl overflow-hidden bg-zinc-950 lg:mx-20 mt-12">
    <div className="flex flex-col items-center justify-center ">
      <h2 className="lg:text-6xl font-medium  text-center text-red-50  lg:w-[900px] leading-[60px]  ">
        Ready to Transform Your HR Process?
      </h2>
      <div className="flex flex-col mt-8 lg:w-full ">
        <p className="text-xl leading-8 text-center text-neutral-200 ">
          Refer friends to Ingenium and earn rewards. Spread the word, grow your network, and boost your benefits.
        </p>
        <div className="flex gap-4 items-start self-center mt-5 font-medium tracking-normal">
          <button className="gap-2.5 self-stretch px-6 py-4 text-sm leading-5 rounded-3xl max-md:px-5 bg-white">Join Ingenium Today</button>
          <button className="gap-2.5 self-stretch px-6 py-4 text-sm leading-5 rounded-3xl max-md:px-5 bg-white">Join Ingenium Today</button>
        </div>
      </div>
    </div>
    <div className="flex justify-between items-center mt-20 max-md:mt-10">
      {images.map((image, index) => (
        <div key={index} className="relative">
          {/* Image */}
          <img src={image.src} alt={image.alt} className={`${image.className} object-cover`} loading="lazy" />
          {/* Gradient Overlay */}
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black opacity-300"></div>
        </div>
      ))}
    </div>
  </section>
  
  );
};

export default HRTransform;