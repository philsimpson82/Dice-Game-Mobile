import { View } from "react-native";
import { Button } from "@rneui/themed";

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
                    <Stack>
                        <Button
                            title='Roll Again'
                            size='lg'
                            color='primary'
                            onClick={props.rollCalculator}
                        />
                        <Button
                            title='End Turn'
                            size='lg'
                            color='secondary'
                            onClick={props.endTurn}
                        />
                    </Stack>
                </View>
                <View>
                    <Button
                        title='Reset Game'
                        size='lg' 
                        color='danger' 
                        onClick={props.resetGame}
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
                    onClick={props.newGame}
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