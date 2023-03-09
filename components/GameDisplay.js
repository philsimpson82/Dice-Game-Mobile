import { View, Text, Image} from "react-native";
import die_face_1 from '../assets/die_face_1_T.png';

const GameDisplay = (props) => {
    let displayContent = null;
    const scoreCount = `Current Score Count: ${props.currentScore}`;
    //source={`../assets/die_face_${props.dieFace}_T.png`}
    // <Image 
    //                 src={'die_face_1'}
    //             />

    if (props.startGame && props.gameWinner) {
        displayContent = `Player ${props.currentPlayer} WINS!`;
    } else if (props.startGame && !props.gameWinner) { 
        displayContent = `Player ${props.currentPlayer} is rolling!`;
    } else {
        displayContent = 'Welcome to Dice Roll!';
    }

    return (
        <View>
            <Text>
                {displayContent}
            </Text>
            <Text>
                
            </Text>
            <Text>
                {scoreCount}
            </Text>
        </View>
    );
}

export default GameDisplay;