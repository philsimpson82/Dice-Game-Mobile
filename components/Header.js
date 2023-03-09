import { View, Text, StyleSheet } from 'react-native';

const Header = ({playerOneScore, playerTwoScore}) => {
    const playerOne = `Player 1 Score: ${playerOneScore}`;
    const playerTwo = `Player 2 Score: ${playerTwoScore}`;

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

    return(
        <View>
            <View>
                <Text  style={styles.scoreCard}>
                    {playerOne}
                </Text>
            </View>
            <View>
                <Text  style={styles.scoreCard}>
                    {playerTwo}
                </Text>
            </View>
        </View>
    );
};

export default Header;