import { TbTruckDelivery } from "react-icons/tb";
import { FaMoneyBill1Wave } from "react-icons/fa6"
import { MdSupportAgent } from "react-icons/md";


const Services = () => {
  return (
    <div className='lg:h-[60vh] xl:h-[45vh] 2xl:h-[30vh] bg-dark-gray w-full '>
        <div className='lg:max-w-7xl lg:mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-10 md:gap-8 px-5 lg:px-7 '>
            <div className="flex flex-col justify-center items-center gap-3 pt-10 lg:py-5 ">
                <TbTruckDelivery className="text-light-gold text-6xl"/>
                <h1 className='font-serif font-bold text-2xl text-light-gold'>Complimentary Delivery</h1>
                <p className='text-sm text-white text-center'>Experience the convenience of our Complimentary Nationwide Delivery service. We ensure that your purchases reach you swiftly and safely, without any additional cost. </p>
            </div>
            <div className="flex flex-col justify-center items-center gap-3 py-20">
                <FaMoneyBill1Wave className="text-light-gold text-6xl"/>
                <h1 className='font-serif font-bold text-2xl text-light-gold'>Minimal Fees</h1>
                <p className='text-sm text-white text-center'>Our Minimal Delivery Fees Guaranteed promise ensures you receive the most competitive delivery rates available. We believe in offering exceptional value, which is why our delivery charges are among the lowest you'll find.</p>
            </div>
            <div className="flex flex-col justify-center items-center gap-3 py-20">
                <MdSupportAgent className="text-light-gold text-6xl"/>
                <h1 className='font-serif font-bold text-2xl text-light-gold'>Anytime Assistance</h1>
                <p className='text-sm text-white text-center'>Our Around-the-Clock Customer Assistance is here to support you anytime, day or night. Whether you have a question about a product, need help with an order, or require any other assistance, our dedicated team is ready to help.  </p>
            </div>
        </div>
        
    </div>
  )
}

export default Services