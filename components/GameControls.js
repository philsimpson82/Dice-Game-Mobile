import { View, StyleSheet } from "react-native";
import { Button, Icon } from "@rneui/themed";

const GameControls = (props) => {
    let controlContent = null;

    if (props.startGame && !props.gameWinner) {
        controlContent = (
            <View>
                <View style={styles.dbuttonContainer}>
                        <Button
                            title='Roll Again'
                            size='lg'
                            radius='md'
                            color='green'
                            onPress={props.rollCalculator}
                            raised
                            icon={
                                <Icon
                                    name='dice'
                                    type='font-awesome-5'
                                    color='white'
                                    iconStyle={{ marginRight: 10 }}
                                />
                            }
                        />
                        <Button
                            title='End Turn'
                            size='lg'
                            radius='md'
                            color='red'
                            onPress={props.endTurn}
                            raised
                            icon={
                                <Icon
                                    name='stop'
                                    type='octicon'
                                    color='yellow'
                                    iconStyle={{ marginRight: 10 }}
                                />
                            }
                        />
                </View>
                <View style={styles.sbuttonContainer}>
                    <Button
                        title='Reset Game'
                        size='lg'
                        radius='lg'
                        color='orange' 
                        onPress={props.resetGame}
                        raised
                    />
                </View>
            </View>
        );
    } else if (props.startGame && props.gameWinner) {
        controlContent = (
            <View style={styles.sbuttonContainer}>
                    <Button
                        title='New Game?'
                        size='lg'
                        radius='lg'
                        color='blue' 
                        onPress={props.resetGame}
                        raised
                    />
                </View>
        )
    } else {
        controlContent = (
            <View style={styles.sbuttonContainer}>
                <Button
                    title='Start New Game'
                    size='lg'
                    radius='lg'
                    color='success' 
                    onPress={props.newGame}
                    raised
                />
            </View>
        );
    }

    return (
        <View>
          {controlContent}  
        </View>
    );
}

const styles = StyleSheet.create({
    dbuttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 50,
        marginHorizontal: 10,
    },
    sbuttonContainer: {
        marginTop: 50,
        alignItems: 'center',
    },
})

export default GameControls;