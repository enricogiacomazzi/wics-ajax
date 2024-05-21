


export default function Cocktail({data}) {
    return (
        <div className="card">
            <img src={data.strDrinkThumb} />
            <div className="card-body">
                <h4><b>{data.strDrink}</b></h4>
            </div>
        </div>
    )
}