import { View, StyleSheet } from "react-native";
import { Button, Icon } from "@rneui/themed";

const GameControls = (props) => {
    let controlContent = null;

    if (props.startGame) {
        controlContent = (
            <View>
                <View style={styles.dbuttonContainer}>
                        <Button
                            title='Roll Again'
                            size='lg'
                            color='primary'
                            onPress={props.rollCalculator}
                            icon={
                                <Icon
                                    name='dice'
                                    type='font-awesome-5'
                                    color='blue'
                                    iconStyle={{ marginRight: 10 }}
                                />
                            }
                        />
                        <Button
                            title='End Turn'
                            size='lg'
                            color='secondary'
                            onPress={props.endTurn}
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
                        color='danger' 
                        onPress={props.resetGame}
                    />
                </View>
            </View>
        );
    } else {
        controlContent = (
            <View style={styles.sbuttonContainer}>
                <Button
                    title='Start New Game'
                    size='lg' 
                    color='success' 
                    onPress={props.newGame}
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
    },
    sbuttonContainer: {
        alignItems: 'center',
    },
})

export default GameControls;