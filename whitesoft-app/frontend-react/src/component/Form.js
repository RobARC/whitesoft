import React, { Component } from 'react';
import axios from "axios"

const nombre = document.getElementsByName('fullname').value;

class Form extends Component {
  state = {
    nombre: nombre,
    paises: []

  }

  componentDidMount() {
    axios
      .get('http://battuta.medunes.net/api/country/all/?key=c986ee6250b57d247844491490212d32')
      .then((response) => {
        console.log(response);
        this.setState({ paises: response.data })
      })
      .catch((error) => {
        console.log(error);
      });
  }

  async onSubmit(e) {
    e.preventDefault();
    //console.log(e.target[0].value, e.target[1].value)
    await axios.post('http://localhost:4000/routes', {
      nombre: e.target[0].value,
      pais: e.target[1].value
    })
    //console.log(res)

  }

  render() {
    return (

      <div className="container" >
        <div className="row">
          <div className="col-md-4 mx-auto p-4">
            <div className="card text-center">
              <div className="card-header">
                <h3>Form</h3>
              </div>
              <div className="card-body">
                <div>

                </div>
                <form onSubmit={this.onSubmit}>
                  <div className="form-grup p-2">
                    <input type="text" name='fullname' required placeholder="Fullname" className="form-control" autoFocus />
                  </div>
                  <div className="form-grup p-2">
                    <select name='paises' className='form-control'>

                      {this.state.paises.map(elemento => (
                        <option key={elemento.name} value={elemento.name}>{elemento.name}</option>
                      )
                      )}
                    </select>
                  </div>
                  <div className="form-group p-2">
                    <button type="submit" className="btn btn-success btn-block">
                      Send
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Form;
