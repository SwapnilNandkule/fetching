export const fetchData = () => {

    return (dispatch) => {
        return fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => dispatch(
                { type: "FetchData", data: json }))
            .catch(err => dispatch(
                { type: "ERROR",msg: "Unable to fetch data" }))
    }

}
