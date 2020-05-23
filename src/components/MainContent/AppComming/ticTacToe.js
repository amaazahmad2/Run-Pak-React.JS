import React from 'react';
import ReactDOM from 'react-dom';
import './ticTacToe.css'

class Square extends React.Component
{

  render()
  {
    return (
      <button className="square" onClick={this.props.onClick} style={getStyle(this.props.boxNum)} >
        {this.props.value}
      </button>
    );
  }
}

function getStyle(i)
{
  if(i==0 )
  {
    const stl={
      borderLeft:"transparent",
      borderTop:"transparent"
    }
    return stl
  }
  else if(i==1)
  {
    const stl={
      borderTop:"transparent"
    }
    return stl
  }
  else if(i==2)
  {
    const stl={
      borderTop:"transparent",
      borderRight:"transparent"
    }
    return stl
  }
  else if(i==3)
  {
    const stl={
      borderLeft:"transparent"
    }
    return stl
  }
  else if(i==5)
  {
    const stl={
      borderRight:"transparent"
    }
    return stl
  }
  else if(i==6)
  {
    const stl={
      borderLeft:"transparent",
      borderBottom:"transparent"
    }
    return stl
  }
  else if(i==7)
  {
    const stl={
      borderBottom:"transparent"
    }
    return stl
  }
  else if(i==8)
  {
    const stl={
      borderRight:"transparent",
      borderBottom:"transparent"
    }
    return stl
  }

}


  
class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
    };
  }
  
  handleClick(i) {
    const squares = this.state.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
    });
  }
  
     

  renderSquare(i) {
    return (
      <Square
        boxNum={i}
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }
  
  render() {
    const winner = calculateWinner(this.state.squares);
    const draw = calculateDraw(this.state.squares);
    let status;
    if (winner) {
      status = 'Winner: ' + winner;
    }
    else if(draw)
    {
      status = "Game Draw"
    }
    else
    {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }
  
    return (
      <div>
  <div className="status" >{status} </div>
        <div className="board-row" >
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}
  
  

  export default class Game extends React.Component {
    render() {
      return (
        <div className="game" >
          <div className="game-board" >
            <Board />
          </div>
        </div>
      );
    }
  }
  
  // ========================================
  
  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );
  
  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  function calculateDraw(squares)
  {
      for(let i=0; i<9; i++)
      {
          if(squares[i] == null)
          {
            return false;
          }
      }
      return true;
  }
  