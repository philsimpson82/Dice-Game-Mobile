import { View, Text } from 'react-native';

const Header = ({playerOneScore, playerTwoScore}) => {
    const playerOne = `Player 1 Score: ${playerOneScore}`;
    const playerTwo = `Player 2 Score: ${playerTwoScore}`;
    return(
        <View>
            <View>
                <Text>
                    {playerOne}
                </Text>
            </View>
            <View>
                <Text>
                    {playerTwo}
                </Text>
            </View>
        </View>
    );
};

export default Header;