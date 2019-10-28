import React, { Component } from 'react';

export default class CreateUser extends Component {
  render() {
    return (
      <div>
        <p>You are on the Create User component!</p>
      </div>
    );
  }
}

// import React, { Component } from 'react';

// export default class CreateRadio extends Component {
//   constructor(props) {
//     super(props);

//     this.onChangeModel = this.onChangeModel.bind(this);
//     this.onChangeSerial = this.onChangeSerial.bind(this);
//     this.onChangeMdcid = this.onChangeMdcid.bind(this);
//     this.onChangeAssigned = this.onChangeAssigned.bind(this);

//     this.state = {
//       model: '',
//       serial: '',
//       mdcid: '',
//       assigned: ''
//     };
//   }

//     onChangeModel(e) {
//       this.setState({
//         model: e.target.value
//       });
//     }

//     onChangeSerial(e) {
//       this.setState({
//         serial: e.target.value
//       });
//     }

//     onChangeMdcid(e) {
//       this.setState({
//         mdcid: e.target.value
//       });
//     }

//     onChangeAssigned(e) {
//       this.setState({
//         assigned: e.target.value
//       });
//     }

// End of component
// }
