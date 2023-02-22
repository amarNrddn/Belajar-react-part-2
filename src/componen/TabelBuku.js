function TabelBuku({showEdit}){
    function editBuku(){
        showEdit()
    }

    return(
        <div>
            <h4>Data BooK</h4>
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Judul</th>
                        <th>Pengarang</th>
                        <th className="col-3">Edit</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Laskar Pelangi</td>
                        <td>Andre Hirarki</td>
                        <td>
                            <button className="btn-sm btn btn-primary mx-2" onClick={() => editBuku()}>Edit</button>
                            <button className="btn btn-sm btn-danger ">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default TabelBuku