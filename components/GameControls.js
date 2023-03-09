import { View, StyleSheet } from "react-native";
import { Button, Icon } from "@rneui/themed";

const GameControls = (props) => {
    let controlContent = null;

    const styles = StyleSheet.create({
        container: {},
        dice: {}
    })

    if (props.startGame) {
        controlContent = (
            <View>
                <View>
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
                <View>
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
            <View>
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

export default GameControls;