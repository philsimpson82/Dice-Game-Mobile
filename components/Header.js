import { View, Text, StyleSheet } from 'react-native';

const Header = ({playerOneScore, playerTwoScore}) => {
    const playerOne = `Player 1 Score: ${playerOneScore}`;
    const playerTwo = `Player 2 Score: ${playerTwoScore}`;

    const styles = StyleSheet.create({
        scoreCard: {
            paddingTop: 60,
            paddingHorizontal: 20,
            backgroundColor: '#c5b358',
            fontSize: 20,
            height: 100,
            width: 180,
        },
        row: {
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            marginBottom: 50,
        }
    })

    return(
        <View>
            <View style={styles.row}>
                <Text  style={styles.scoreCard}>
                    {playerOne}
                </Text>
                <Text  style={styles.scoreCard}>
                    {playerTwo}
                </Text>
            </View>
        </View>
    );
};

export default Header;