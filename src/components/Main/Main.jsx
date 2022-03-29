import { PracticeCard } from "../Card";

export const Main =() => {
    return(
        <div className='container'>
            <div className='client__matters'>
            <h2 className='main__title'>Every Client Matters</h2>
            <p className='main__subTitle'>Problems trying to resolve the conflict between the two major realms 
            of Classical physics: Newtonian mechanics </p>
            <div className='cards__matters'>
                <div className='card'>
                    <img src="\assets\icons\icn settings .icn-lg.png" alt="люди" />
                    <h2>972 +</h2>
                    <h5>Business & Finance </h5>
                </div>
                <div className='card'>
                    <img src="\assets\icons\icn settings .icn-lg (1).png" alt="" />
                    <h2>181 +</h2>
                    <h5>Travel & Aviation  </h5>
                </div>
                <div className='card'>
                    <img src="\assets\icons\icn settings .icn-lg (2).png" alt="" />
                    <h2>98%</h2>
                    <h5>Consumer Products  </h5>
                </div>
                <div className='card'>
                    <img src="\assets\icons\icn settings .icn-lg (3).png" alt="" />
                    <h2>746 +</h2>
                    <h5>Environmental  </h5>
                </div>
            </div>
            </div>
            <div className='practice__advice'>
                <h2 className='main__title'>Practice Advice</h2>
                <p className="main__subTitle">Problems trying to resolve the conflict between 
                the two major realms of Classical physics: Newtonian mechanics </p>
                <div className="practice__cards">
                    <PracticeCard
                    title= "A single source of truth"
                    subTitle= "Newton thought that light was made up of particles, but then it was discovered"
                    image = "/assets/img/cardPhoto(1).png"
                    imageAlt= "компьютер"
                    />
                </div>
            </div>


        </div>
    );
}

