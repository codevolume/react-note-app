import Notes from "../../datas/notes";

const notes = () => {
    return(
        <div className="all-notes">
            <h2>Összes jegyzet</h2>
            <div className="all-notes-content">
            {Notes.map((note) =>{
                return (
                    <div className="note" key={note.id}>
                        <a href={`/note/${note.id}`}>
                            <h3>{note.title}</h3>
                        </a>
                    </div>
                )
            })}
            </div>
        </div>
    )
}

export default notes;