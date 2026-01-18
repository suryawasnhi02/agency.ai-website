import React from 'react';
import assets from '../assets/assets';
import Title from './Title';
import ServiceCard from './ServiceCard';


const Services = () => {
  const servicesData = [
    {
      title: 'Advertising',
      description: 'We turn bold ideas into powerful digital solutions that connect and engage.',
      icon: assets.ads_icon,
    },
    {
      title: 'Content marketing',
      description: 'We help you execute your plan and deliver measurable results.',
      icon: assets.marketing_icon,
    },
    {
      title: 'Product Management',
      description: 'We catalyze your product growth with experienced product managers.',
      icon: assets.content_icon,
    },
    {
      title: 'Social media',
      description: 'We build and manage your social presence to grow brand awareness.',
      icon: assets.social_icon,
    },
  ];

  return (
    <>
      {/* 🔥 SERVICES HERO (FULL WIDTH – CSS WORKS NOW) */}
      <section className="services-hero">
        <div className="services-hero-bg" />

        <div className="services-hero-inner">
          <div className="services-hero-text">
            <h1>
              India’s Largest <br />
              Creator Business
            </h1>

            <p>
              85B+ views, iconic campaigns, impossible collabs,
              and culture-defining digital shows with top global brands.
            </p>

            <a href="#services" className="services-hero-link">
              The Proof is in the Work 👀
            </a>
          </div>

          <div className="services-hero-video">
            <video
              src="https://files.tryflowdrive.com/9eRHAGuvzU_Shorter-show-reel----2620p.mp4"
              autoPlay
              muted
              loop
              playsInline
            />
          </div>
        </div>

        <div className="services-hero-logos">
          <img src={assets.zomato} alt="zomato" />
          <img src={assets.fastrack} alt="fastrack" />
          <img src={assets.boat} alt="boat" />
          <img src={assets.flipkart} alt="flipkart" />
          <img src={assets.sprite} alt="sprite" />
          <img src={assets.nykaa} alt="nykaa" />
        </div>
      </section>

      {/* 🧩 SERVICES GRID */}
      <section
        id="services"
        className="
          section stack-30
          relative flex flex-col items-center gap-12
          px-4 sm:px-12 lg:px-24 xl:px-40 py-24
          text-gray-700 dark:text-white
        "
      >
        <Title
          title="How can we help?"
          desc="From strategy to execution, we craft digital solutions that move your business forward."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-6xl">
          {servicesData.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Services;
