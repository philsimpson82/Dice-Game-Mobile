import { View, Text, Image } from "react-native";

const GameDisplay = (props) => {
    let displayContent = null;
    const scoreCount = `Current Score Count: ${props.currentScore}`;

    const styles = StyleSheet.create({
        container: {
            paddingTop: 50,
        },
        dice: {
            width: 50,
            height: 50,
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
        <View>
            <Text style={styles.container}>
                {displayContent}
            </Text>
            <Text>
                <Image 
                    source={`../img/die_face_${props.dieFace}_T.png`}
                    style={styles.dice} />
            </Text>
            <Text style={styles.container}>
                {scoreCount}
            </Text>
        </View>
    );
}

export default GameDisplay;