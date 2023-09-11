import CounterContainer from "./Counter/CounterContainer";

const Card = ({ title, description, img }) => {
    return (

        <div className="card row-gap mt-4">
            <img src={img} alt={title} width={200} height={200} className="card-img-top width: 100% height: 100% object-fit: cover"/>
            <div className="card-body">
                < p className="card-title" > {title}</p >
                <p className="card-text">{description}</p>
            </div >
            {/* <CounterContainer /> */}
        </div >

    )
};
export default Card