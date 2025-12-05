function List4({genre}){
    const movies = ["Круто", "Классно", "Детективчик", "Ыыыыыыы", "Тут раскрыли дело"]
    return(
        <>
        <h1>{genre[3]}</h1>
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
export default List4;