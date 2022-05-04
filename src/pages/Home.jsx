import React from "react";

class Home extends React.Component {
    render(){
        return (
            <main>
                <section>
                    <div>
                <h1>Flávio Pimentel</h1>
                <h5>Desenvolvedor Full-Stack & DataScientist</h5>
                <br/>
                <p>Desenvolvendo soluções desde 2020, utilizo como principais 
                    ferramentas Python, JavaScript, TypeScript, SQL e NoSQL,
                    entre outras tecnologias e frameworks.
                    </p>
                    </div>
                    <div>
                        <FontAwesomeIcon icon="fa-duotone fa-chevrons-down" />
                    </div>
                    </section>
            </main>
        )
    }
}

export default Home
