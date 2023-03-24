const FunctionClick = () => {
    return (
        <div>
            <button onClick={clickHandler}>Click</button>
        </div>
    )

    function clickHandler() {
        console.log('Button click')
    }
}


export default FunctionClick;