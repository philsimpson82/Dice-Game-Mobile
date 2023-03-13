import { View, Text, StyleSheet } from 'react-native';

const Header = ({playerOneScore, playerTwoScore}) => {
    const playerOne = `Player 1 Score: ${playerOneScore}`;
    const playerTwo = `Player 2 Score: ${playerTwoScore}`;

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

const styles = StyleSheet.create({
    scoreCard: {
        paddingTop: 60,
        paddingHorizontal: 10,
        backgroundColor: '#c5b358',
        fontSize: 20,
        fontWeight: 'bold',
        height: 100,
    },
    row: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    }
})

export default Header;