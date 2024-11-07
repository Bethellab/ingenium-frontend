import React from 'react';

interface SocialIconProps {
  src: string;
  alt: string;
  href: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({ src, alt, href }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    <img loading="lazy" src={src} alt={alt} className="object-contain shrink-0 w-10 rounded-3xl aspect-square" />
  </a>
);

const SocialIcons: React.FC = () => {
  const socialIcons = [
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/0872ee90fcda62e5c812f521ebbe2ce145465ed167e2f91993aeae00408c00a5?placeholderIfAbsent=true&apiKey=5e5f7185f1fc4414936991ff9a3c3ed7", alt: "Social Icon 1", href: "#" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/fc41cc8493b26a71821c97ac70113eb80f2154574ce23da8320c7d1ddf472248?placeholderIfAbsent=true&apiKey=5e5f7185f1fc4414936991ff9a3c3ed7", alt: "Social Icon 2", href: "#" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/a4adfdb55e66d49bfad011a4a325d1295a647533288a1330a89210e9c59433eb?placeholderIfAbsent=true&apiKey=5e5f7185f1fc4414936991ff9a3c3ed7", alt: "Social Icon 3", href: "#" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/ca8c0dc816338a73218359419869896daad3bf2d30736dd5baa1f48d586fb5a0?placeholderIfAbsent=true&apiKey=5e5f7185f1fc4414936991ff9a3c3ed7", alt: "Social Icon 4", href: "#" },
    { src: "https://cdn.builder.io/api/v1/image/assets/TEMP/e32f7a8c4655e89bd3e401d760a87741ee0776d2e5a9738b22d622576147dfbf?placeholderIfAbsent=true&apiKey=5e5f7185f1fc4414936991ff9a3c3ed7", alt: "Social Icon 5", href: "#" },
  ];

  return (
    <div className="flex gap-2 items-end self-stretch my-auto">
      {socialIcons.map((icon, index) => (
        <SocialIcon key={index} {...icon} />
      ))}
    </div>
  );
};

export default SocialIcons;