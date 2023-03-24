const Greet = ({ name, heroname }) => {
    console.log(heroname);
    return (
        <div>
            <h1>
                Hello {name} a.k.a {heroname}
            </h1>
        </div>
    )
}

export default Greet; 