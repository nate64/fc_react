import React from 'react';


class Card extends React.Component {
  state = { showBack: false }


  componentDidMount() {
    console.log(this.props)
  }


  toggleShow = () => {
    this.setState({ showBack: !this.state.showBack})
  }


  render() {
    const { info } = this.props;
    const { showBack } = this.state;
    if (showBack) {
      return(
        <div>
          <button onClick={() => this.toggleShow()}>
            {info.back}
          </button>
        </div>
      )
    }
    else {
      return(
        <div>
          <button onClick={() => this.toggleShow()}>
            {info.front}
          </button>
        </div>
      )
    }
  }
}

export default Card;