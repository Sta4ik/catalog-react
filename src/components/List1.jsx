function List1({genre}){
    const movies = ["АХхпахпхахах очень смешная", "Тут тоже смешно", "Ну тут так себе", "Вот тут пушечка", "Пхахпхахпаххахахаах"]
    return(
        <>
        <h1>{genre[0]}</h1>
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
export default List1;