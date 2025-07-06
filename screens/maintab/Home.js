import React, { useState } from "react";
import {
  Dimensions,
  Image,
  ImageBackground,
  Modal,
  StatusBar,
  TouchableOpacity,
  View,
} from "react-native";
import { RORegularText } from "../../components/TextView/RORegularText";
import { BrandColor } from "../../utils/constants/BrandColor";
import { bg2 } from "../../assets/images";
import {
  bot_gh,
  human_gh,
  thinking1_gh,
  thinking2_gh,
} from "../../assets/icons";

/**
 * @author
 * @function Home
 **/
export const Home = (props) => {
  const { width, height } = Dimensions.get("window");

  return (
    <ImageBackground
      source={bg2}
      resizeMode="cover"
      style={{
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 12,
      }}
    >
      <StatusBar hidden />

      <View
        style={{
          height: height * 0.15,
        }}
      >
        <RORegularText
          style={{
            fontSize: 42,
            color: BrandColor?.White,
            textAlign: "center",
          }}
        >
          Tic Tac Toe
        </RORegularText>
        <RORegularText
          style={{
            fontSize: 12,
            color: BrandColor?.White,
            textAlign: "center",
          }}
        >
          You are playing with computer. Make first move.
        </RORegularText>
      </View>

      {/* <View
        style={{
          width: width,
          // borderWidth: 1,

          flexDirection: "row",
          gap: 24,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <RORegularText style={{ fontSize: 18, color: BrandColor?.White }}>
          Computer - O
        </RORegularText>
        <RORegularText style={{ fontSize: 18, color: BrandColor?.White }}>
          You - X
        </RORegularText>
      </View> */}

      <MainGame />
    </ImageBackground>
  );
};
const MainGame = () => {
  const { width, height } = Dimensions.get("window");
  let boxWidth = (width * 0.85) / 3;

  const [board, setBoard] = useState(Array(9).fill(null));
  const [isUserTurn, setIsUserTurn] = useState(true);
  const [winner, setWinner] = useState(null);
  const [winningLine, setWinningLine] = useState(null);

  console.log("isUserTurn: ", isUserTurn);
  console.log("board: ", board);
  console.log("winner: ", winner);

  const checkWinner = (board) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8], // rows
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8], // columns
      [0, 4, 8],
      [2, 4, 6], // diagonals
    ];

    for (let [aIndex, bIndex, cIndex] of lines) {
      if (
        board[aIndex] &&
        board[aIndex] === board[bIndex] &&
        board[aIndex] === board[cIndex]
      )
        return board[aIndex];
    }

    if (!board.includes(null)) return "Draw";
    return null;
  };

  const getWinnerLine = (board) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8], // rows
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8], // columns
      [0, 4, 8],
      [2, 4, 6], // diagonals
    ];

    for (let [a, b, c] of lines) {
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return [a, b, c]; // Return the winning line
      }
    }

    return null; // No winning line
  };

  const handlePress = (index) => {
    if (!isUserTurn || board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = "X";
    setBoard(newBoard);

    const result = checkWinner(newBoard);
    if (result) {
      // setWinner(result);
      setWinningLine(getWinnerLine(newBoard));

      setTimeout(() => {
        setWinner(result);
      }, 1000);
    } else {
      setIsUserTurn(false);
      setTimeout(() => makeComputerMove(newBoard), 500); // Delay for realism
    }
  };

  const makeComputerMove = (board) => {
    const bestMove = getBestMove(board, "O");
    if (bestMove !== -1) {
      board[bestMove] = "O";
      setBoard([...board]);

      const result = checkWinner(board);
      if (result) {
        // setWinner(result);
        setWinningLine(getWinnerLine(board));

        setTimeout(() => {
          setWinner(result);
        }, 1000);
      } else {
        setIsUserTurn(true);
      }
    }
  };

  const getBestMove = (board, player) => {
    const opponent = player === "X" ? "O" : "X";

    // to make it indomitable, blocking it first then best move and others
    // normal 1. best move, 2. block and others

    for (let i = 0; i < 9; i++) {
      if (!board[i]) {
        const copy = [...board];
        copy[i] = opponent;
        if (checkWinner(copy) === opponent) return i;
      }
    }

    for (let i = 0; i < 9; i++) {
      if (!board[i]) {
        const copy = [...board];
        copy[i] = player;
        if (checkWinner(copy) === player) return i;
      }
    }

    if (!board[4]) return 4;

    const available = board
      .map((val, idx) => (val === null ? idx : null))
      .filter((v) => v !== null);
    return available.length > 0
      ? available[Math.floor(Math.random() * available.length)]
      : -1;
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsUserTurn(true);
    setWinner(null);
    setWinningLine(null);
  };

  return (
    <>
      <View
        style={{
          height: height * 0.45,
          width: width,
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 12,
            width: width * 0.75,
          }}
        >
          <View
            style={{ flexDirection: "row", alignItems: "flex-start", gap: 1 }}
          >
            <Image source={human_gh} style={{ width: 50, height: 50 }} />
            {isUserTurn && (
              <Image
                source={thinking1_gh}
                style={{ width: 40, height: 40, marginTop: -16 }}
              />
            )}
          </View>
          <View
            style={{ flexDirection: "row", alignItems: "flex-start", gap: 1 }}
          >
            {!isUserTurn && (
              <Image
                source={thinking2_gh}
                style={{ width: 40, height: 40, marginTop: -16 }}
              />
            )}
            <Image source={bot_gh} style={{ width: 50, height: 50 }} />
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            width: width * 0.85,
          }}
        >
          {board?.map((cell, index) => {
            // console.log(cell, ":cell | index:", index);
            const isWinningCell = winningLine?.includes(index);

            return (
              <TouchableOpacity
                key={index}
                onPress={() => handlePress(index)}
                style={{
                  width: boxWidth,
                  height: boxWidth,
                  borderWidth: 1,
                  backgroundColor: isWinningCell ? "yellow" : BrandColor?.White,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <RORegularText
                  style={{
                    fontSize: 48,
                    fontWeight: "bold",
                    color: cell === "X" ? "red" : "#0000FF",
                  }}
                >
                  {cell}
                </RORegularText>
              </TouchableOpacity>
            );
          })}
        </View>

        <WinnerModal winner={winner} resetGame={resetGame} />
      </View>

      <ActionButton onPress={resetGame} btnText={"Reset Game"} />
    </>
  );
};

const WinnerModal = ({ winner, resetGame }) => {
  const { width, height } = Dimensions.get("window");
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={!!winner}
      height={height}
    >
      <View
        style={{
          flex: 1,
          backgroundColor: "rgba(0,0,0,0.9)",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            backgroundColor: "white",
            padding: 48,
            borderRadius: 15,
            alignItems: "center",
          }}
        >
          <RORegularText
            style={{
              fontSize: 42,
              marginBottom: 20,
              textAlign: "center",
              color:
                winner === "Draw"
                  ? "gray"
                  : winner === "X"
                  ? BrandColor?.Red
                  : "#0000FF",
            }}
          >
            {winner === "Draw"
              ? "It's a Draw!"
              : `Winner ${winner === "O" ? "Computer" : "You"}`}
          </RORegularText>

          <ActionButton onPress={resetGame} btnText={"Play Again"} />
          {/* <ActionButton onPress={()=>{resetGame(); }} btnText={"Play Again"} /> */}
        </View>
      </View>
    </Modal>
  );
};

const ActionButton = ({ onPress, btnText }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        width: "auto",
        paddingHorizontal: 24,
        paddingVertical: 16,
        backgroundColor: BrandColor?.White,
        borderRadius: 100,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 6,
        borderColor: BrandColor?.Red,
        borderWidth: 2,
      }}
    >
      <RORegularText
        style={{
          fontSize: 18,
          color: BrandColor?.Red,
        }}
      >
        {btnText}
      </RORegularText>
    </TouchableOpacity>
  );
};
