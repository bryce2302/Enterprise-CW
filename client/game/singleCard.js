import cover from './../assets/images/cover.png'

export default function SingleCard({card}){
    return(
    <div className ="card">
            <div>
                <img className="front" src={card.src} alt="card front "/>
                <img className="back" src={cover} alt="back card "/>
            </div>
    </div>
    )
}