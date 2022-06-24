import { useState } from "react"
import argonauteService from "../Services/argonaute.service";

const Landing = () => {

const [nom, setNom] = useState("");

const handleChange = e => {
    setNom({...nom, [e.target.id]: e.target.value});
}


    return (

        <main>

        
            <h2>Ajouter un(e) Argonaute</h2>
            <form class="new-member-form">
                <label for="name">Nom de l&apos;Argonaute</label>
                <input onChange={handleChange} id="nom" name="name" type="text" placeholder="Charalampos" value={nom} />
                <button type="submit">Envoyer</button>
            </form>


            <h2>Membres de l'équipage</h2>
            <section class="member-list" onChange={ (e) => setNom(e.target.value)}>
                <div class="member-item">Eleftheria</div>
                <div class="member-item">Gennadios</div>
                <div class="member-item">Lysimachos</div>
            </section>
        </main>
    )
}

export default Landing