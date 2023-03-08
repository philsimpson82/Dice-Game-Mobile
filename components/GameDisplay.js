import { View, Text, Image, StyleSheet } from "react-native";

const GameDisplay = (props) => {
    let displayContent = null;
    const scoreCount = `Current Score Count: ${props.currentScore}`;

    const styles = StyleSheet.create({
        scoreCard: {
            paddingTop: 50,
            backgroundColor: '#c5b358',
            fontSize: 16,
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
            <Text style={styles.scoreCard}>
                {displayContent}
            </Text>
            <Text>
                <Image 
                    source={`../img/die_face_${props.dieFace}_T.png`}
                    style={styles.dice} />
            </Text>
            <Text style={styles.scoreCard}>
                {scoreCount}
            </Text>
        </View>
    );
}

export default GameDisplay;