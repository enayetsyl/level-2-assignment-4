import heroImage from '/hero.jpg'



const Hero = () => {
  return (
    <div className='w-full h-[80vh] relative'>
        <img src={heroImage} alt="" className='w-full h-full' />
       <div className='lg:max-w-7xl lg:mx-auto'>
       <h1 className="text-4xl absolute top-14 font-bold text-transparent bg-clip-text bg-gradient-to-r from-light-gold to-white pl-5">Elevate Your Typing Experience</h1>
          <p className="text-xl absolute bottom-5 lg:bottom-24 right-5 text-white text-right font-serif">
            Discover the fusion of innovation and elegance with our <br /> high-quality mechanical keyboards.
          </p>
       </div>
    </div>
  )
}

export default Hero