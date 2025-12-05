function List2({genre}){
    const movies = ["Страшный фильм", "Оооо ужас", "Ааааааааа старшно", "Боюсь-боюсь", "Нееееет"]
    return(
        <>
        <h1>{genre[1]}</h1>
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
export default List2;