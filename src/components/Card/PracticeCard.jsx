export const PracticeCard = ({title,subTitle , image, imageAlt }) => {
    return(
        <div className= "practice__card">
            <div className="practice__text">
            <h3 className="title__card">{title}</h3>
            <p className="subTitle__card">{subTitle}</p>
            </div>
            <img className="practice__img" src={image} alt={imageAlt} />
        </div>
    );
}