import relax from '../../../assets/image/relax.png';
import hair from '../../../assets/image/revitalize.png';
import relax1 from '../../../assets/image/relax1.png';
import relax2 from '../../../assets/image/relax2.png';

const Relax = () => {
    return (
        <>
            <div className=" h-[2000px] relative mx-auto  overflow-hidden">
                <img src={relax1} className="w-[275px] h-[458px]  bg-cover bg-no-repeat rounded-[150px] absolute top-1/2 left-1/2 translate-x-[-150.91%] translate-y-[-185.48%] z-[3]" />
                <span className="flex h-[173.644px] justify-start items-center font-['Cormorant_Garamond'] text-[280px] font-bold opacity-10 leading-[173.644px] text-[#5e25cc] tracking-[2.8px] absolute top-[266px] left-[850px] text-left whitespace-nowrap z-[11]">
                    relax
                </span>
                <span className="flex w-[372px] h-[144px] justify-start items-start font-['Cormorant_Garamond'] text-[48px] font-bold leading-[48px] text-[#191515] tracking-[0.48px] absolute top-[394px] left-[1000px] text-left z-[9]">
                    Immerse yourself in a calming environment.
                </span>
                <img src={relax2} className="w-[161px] h-[268px] bg-[url(../assets/images/87b09fb3951c9c225dd676e9f7e6811b3799e89d.png)] bg-cover bg-no-repeat rounded-[150px] absolute top-1/2 left-1/2 translate-x-[-372.67%] translate-y-[-246.08%] z-[6]" />

                <div className="w-[275px] h-[458px] bg-[url(../assets/images/baaf171e-7ed5-4b19-a3e9-5f528c6f8a9b.png)] bg-cover bg-no-repeat rounded-[150px] absolute top-1/2 left-1/2 translate-x-[50.91%] translate-y-[-50.55%] z-[5]" />
                <span className="flex h-[320px] justify-start items-center font-['Cormorant_Garamond'] text-[280px] font-bold opacity-10 leading-[320px] text-[#5e25cc] tracking-[2.8px] absolute top-[835px] left-[-48px] text-left whitespace-nowrap z-[2]">
                    revitalize
                </span>
                <div className="w-[161px] h-[268px] bg-[url(../assets/images/def0c7d1e7d86697b2e30d0b65fb138186ceaec8.png)] bg-cover bg-no-repeat rounded-[150px] absolute top-1/2 left-1/2 translate-x-[272.67%] translate-y-[-15.49%] z-[8]" />
                <span className="flex w-[442px] h-[144px] justify-start items-start font-['Cormorant_Garamond'] text-[48px] font-bold leading-[48px] text-[#191515] tracking-[0.48px] absolute top-[1061px] left-[169px] text-left z-[1]">
                    Experience transformative care for mind and body.
                </span>
                <span className="flex h-[320px] justify-start items-center font-['Cormorant_Garamond'] text-[280px] font-bold opacity-10 leading-[320px] text-[#5e25cc] tracking-[2.8px] absolute top-[1428px] left-[548px] text-left whitespace-nowrap">
                    rediscover
                </span>
                <div className="w-[275px] h-[458px] bg-[url(../assets/images/f27e061d7a4bb9fbacbda8425540388734a88288.png)] bg-cover bg-no-repeat rounded-[150px] absolute top-1/2 left-1/2 translate-x-[-150.91%] translate-y-[84.39%] z-[4]" />
                <span className="flex w-[432px] h-[144px] justify-start items-start font-['Cormorant_Garamond'] text-[48px] font-bold leading-[48px] text-[#191515] tracking-[0.48px] absolute top-[1630px] left-[790px] text-left z-10">
                    Uncover a renewed sense of confidence and beauty.
                </span>
                <div className="w-[161px] h-[268px] bg-[url(../assets/images/7da0c8538ea151e6a59fbf25352b14542aaba6e9.png)] bg-cover bg-no-repeat rounded-[150px] absolute top-1/2 left-1/2 translate-x-[-372.67%] translate-y-[215.11%] z-[7]" />
            </div>
        </>

    );
};

export default Relax;
