function List3({genre}){
    const movies = ["Очень круто боевик", "Вааау", "Пельмени против макарон", "Вот это эффекты", "Йоу"]
    return(
        <>
        <h1>{genre[2]}</h1>
        <ul className="list-group">
        {
            movies.map((item, index) => (
                <li className="list-group-item">{item}</li>
            ))
        }
        </ul>
        </>
    )
}
export default List3;