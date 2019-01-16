var GroceryList = (props) => (
  <ul>
    {props.groceryItem.map(Item =>
      <GroceryListItem Item={Item}/>
      )}
  </ul>
);

class GroceryListItem extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      done: false
    };
  }

  onListItemClick() {
    this.setState({
      done: !this.state.done
    });
  }

  render() {
    var style = {
      textDecoration: this.state.done ? 'line-through' : 'none'
    }
    return(
    <li style={style} onClick={this.onListItemClick.bind(this)}>{this.props.Item}</li>
    );
  }
}

ReactDOM.render(<GroceryList groceryItem = {['Milk', 'Eggs']} />, document.getElementById("app"));