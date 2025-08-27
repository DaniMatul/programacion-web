import { useState } from "react";
import '../styles/CreateTaskCard.css';

export default function CreateTaskCard({ onCreate, onClose }){
    const [name, setName] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        const n = name.trim();
        if (!n) return;
        onCreate(n);
        setName("");
        onClose && onClose();
    }
    return(
        <>
            <div className="main-container-form">
                <form onSubmit={handleSubmit} className="form-inline">
        <input
          type="text"
          className="data"
          placeholder="Nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          className="data"
          placeholder="Estado"
          value="Pendiente"
          readOnly
        />
        <button className="accion" type="submit">Guardar</button>
        {onClose && (
          <button className="accion secundario" type="button" onClick={onClose}>
            Cancelar
          </button>
        )}
      </form>
            </div>
        </>
    )
}