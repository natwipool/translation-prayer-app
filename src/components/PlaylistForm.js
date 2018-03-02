import React from 'react';
import { connect } from 'react-redux';
import Checkbox from './Checkbox';

export class PlaylistForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: props.playlist ? props.playlist.name : '',
      lists: props.playlist ? props.playlist.lists : [],
      error: ''
    };
  }
  onNameChange = e => {
    const name = e.target.value;
    this.setState(() => ({ name }));
  };
  onAddLists = list => {
    this.setState(prevState => ({
      lists: prevState.lists.concat(list)
    }));
  };
  onRemoveLists = list => {
    this.setState(prevState => ({
      lists: prevState.lists.filter(stateList => {
        return stateList !== list;
      })
    }));
  };
  onSubmit = e => {
    e.preventDefault();

    if (!this.state.name || this.state.lists.length === 0) {
      this.setState(() => ({ error: 'กรุณาใส่ชื่อและเลือกบทสวดมนต์' }));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        name: this.state.name,
        lists: this.state.lists
      });
    }
  };
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="ชื่อรายการ"
            autoFocus
            value={this.state.name}
            onChange={this.onNameChange}
          />
          {this.props.transPrayers.map(transPrayer => (
            <Checkbox
              key={transPrayer.id}
              onAddLists={this.onAddLists}
              onRemoveLists={this.onRemoveLists}
              lists={this.state.lists}
              {...transPrayer}
            />
          ))}
          <button>ตกลง</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    transPrayers: state.transPrayers
  };
};

export default connect(mapStateToProps)(PlaylistForm);
