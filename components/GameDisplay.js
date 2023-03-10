import { View, Text, Image, StyleSheet} from "react-native";
import die_face_1 from '../assets/images/die_face_1_T.png';
import die_face_2 from '../assets/images/die_face_2_T.png';
import die_face_3 from '../assets/images/die_face_3_T.png';
import die_face_4 from '../assets/images/die_face_4_T.png';
import die_face_5 from '../assets/images/die_face_5_T.png';
import die_face_6 from '../assets/images/die_face_6_T.png';
import die_face_7 from '../assets/images/die_face_7_T.png';

const GameDisplay = (props) => {
    let displayContent = null;
    const scoreCount = `Current Score Count: ${props.currentScore}`;
    let dieFace;

    switch (props.dieFace) {
        case 1:
            dieFace = die_face_1;
            break;
        case 2:
            dieFace = die_face_2;
            break;
        case 3:
            dieFace = die_face_3;
            break;
        case 4:
            dieFace = die_face_4;
            break;
        case 5:
            dieFace = die_face_5;
            break;
        case 6:
            dieFace = die_face_6;
            break;
        case 7:
            dieFace = die_face_7;
            break;
        default:
            break;
    }
    
    const styles = StyleSheet.create({
        container: {
            alignItems: 'center',
            justifyContent: 'space-evenly'
        },
        labelWelcome: {
            marginVertical: 20,
            fontSize: 36,
        },
        labelScore: {
            marginVertical: 20,
            fontSize: 22,
        },
        dice: {
            marginVertical: 20,
            width: 100,
            height: 100,
        }
    })
    

    if (props.startGame && props.gameWinner) {
        displayContent = `Player ${props.currentPlayer} WINS!`;
    } else if (props.startGame && !props.gameWinner) { 
        displayContent = `Player ${props.currentPlayer} is rolling!`;
    } else {
        displayContent = 'Welcome to Dice Roll!';
    }

    return (
        <View style={styles.container}>
            <Text style={styles.labelWelcome}>
                {displayContent}
            </Text>
            <Image 
                style={styles.dice}
                source={dieFace}
            />
            <Text style={styles.labelScore}>
                {scoreCount}
            </Text>
        </View>
    );
}

export default GameDisplay;