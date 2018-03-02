import React from 'react';

// class Checkbox extends React.Component {
//   constructor(props) {
//     super(props)

//     this.state = {
//       checked: props.lists.find((list) => list === props.precept)
//     }
//   }

//   onAddLists = (list) => {
//     this.setState(() => ({
//       checked: !this.state.checked
//     }))
//     console.log(this.state.checked)
//     this.props.onAddLists(list)
//   }
  
//   onRemoveLists = (list) => {
//     this.setState(() => ({
//       checked: !this.state.checked
//     }))
//     this.props.onRemoveLists(list); 
//   }

//   render() {
//     return (
//       <div>
//         <input
//           type="checkbox"
//           name={this.props.precept}
//           value={this.props.precept}
//           checked={this.state.checked}
//           onChange={e => {
//             const list = e.target.value;
//             if (e.target.checked) {
//               this.onAddLists(list)  
//             } else if (!e.target.checked) {
//               this.onRemoveLists(list);  
//             }
//           }}
//         />
//         <label htmlFor={this.props.precept}>
//           {this.props.precept}
//           {
//             this.props.lists.indexOf(this.props.precept) > -1 && (
//               this.props.lists.indexOf(this.props.precept) + 1
//             )
//           }
//         </label>
//       </div>
//     )
//   }
// }

const Checkbox = (props) => (
  <div>
    <input
      type="checkbox"
      name={props.precept}
      value={props.precept}
      checked={props.lists.find((list) => list === props.precept)}
      onChange={e => {
        const list = e.target.value;
        if (e.target.checked) {
          props.onAddLists(list)  
        } else if (!e.target.checked) {
          props.onRemoveLists(list);  
        }
      }}
    />
    <label htmlFor={props.precept}>
      {props.precept}
      {
        props.lists.indexOf(props.precept) > -1 && (
          props.lists.indexOf(props.precept) + 1
        )
      }
    </label>
  </div>
);

export default Checkbox;
