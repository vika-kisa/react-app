export const Card = ({blueCard, image, imageAlt, title, subTitle }) => {
    return(
        <div className={`card__item ${blueCard ? 'card_blue' : ''}`}>
            <img src={image} alt={imageAlt} />
            <h3 className="title">{title}</h3>
            <p className="subTitle">{subTitle}</p>
        </div>
    );
}


