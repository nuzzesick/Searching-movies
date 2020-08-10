import React, {Component, Fragment} from 'react';
class Header extends Component {
  render() {
    return (
      <Fragment>
        <div className="container header">
          <h1 className="title">Mi primer app en React</h1>
          <span className="sub">¡Buscá películas y obtené resultados al instante!</span>
        </div>
      </Fragment>
    )
  }
}
export default Header