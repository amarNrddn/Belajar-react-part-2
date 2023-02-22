import React from 'react'
import TabelBuku from './TabelBuku'
import { useEffect, useState } from 'react'

function ManajemenBuku() {
    const [formMode, setFormMode] = useState("")
    function showHendeling() {
        setFormMode("show")
    }

    function formEditBuku(){
        setFormMode("show")
    }
    return (
        <div className=" mt-3">
            <h1 className="text-center">Manajemen Buku</h1>

            <button onClick={showHendeling} className="btn btn-sm btn-primary my-2">Tambah</button>
            <div id="form"></div>
            {formMode === "show" && (
                <div id="form" className="card py-2 my-3 bg-secondary">
                    <h4>Search BooK</h4>
                    <form className="row">
                        <div className="col-6">
                            <input type="text" name="judul" placeholder="Judul" className="form-control mx-2" />
                        </div>
                        <div className="col-4">
                            <input type="text" name="pengarang" placeholder="pengarang" className="form-control mx-3" />
                        </div>
                        <div className="col-2">
                            <input type="submit" value="submit" className="btn btn-success" />
                        </div>
                    </form>
                </div>
            )}
            <TabelBuku showEdit={formEditBuku} />
        </div>
    )
}

export default ManajemenBuku