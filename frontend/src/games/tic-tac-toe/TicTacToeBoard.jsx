import Square from './Square';
import PropTypes from 'prop-types';
import './TicTacToe.css';


const generateSquares = (squares, onClickCallback) => {
  const singleArraySquares = [].concat(...squares);
  console.log(squares);
  console.log(singleArraySquares);
  return singleArraySquares.map((square) => {
    return <Square
      value={square.value}
      id={square.id}
      onClickCallback={onClickCallback}
      key={square.id}
    />
  });
}

const TicTacToeBoard = ({ squares, onClickCallback }) => {

  const squareList = generateSquares(squares, onClickCallback);
  console.log(squareList);
  return <div className="ttt-grid" >
    {squareList}
  </div>
}

TicTacToeBoard.propTypes = {
  squares: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    value: PropTypes.string.isRequired
  }))),
  onClickCallback: PropTypes.func.isRequired,
};

export default TicTacToeBoard;