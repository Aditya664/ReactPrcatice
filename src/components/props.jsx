const Props = (pros) => {
    console.log(pros);
    return (
        <div>
            {pros.children}
            <h1>Hello {pros.name}</h1>
        </div>
    )
}

export default Props;