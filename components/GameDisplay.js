import { useState, useEffect } from "react";
import { Alert, View, Text, Image, StyleSheet, Modal, Pressable} from "react-native";
import die_face_1 from '../assets/images/die_face_1_T.png';
import die_face_2 from '../assets/images/die_face_2_T.png';
import die_face_3 from '../assets/images/die_face_3_T.png';
import die_face_4 from '../assets/images/die_face_4_T.png';
import die_face_5 from '../assets/images/die_face_5_T.png';
import die_face_6 from '../assets/images/die_face_6_T.png';
import die_face_7 from '../assets/images/die_face_7_T.png';

const GameDisplay = (props) => {
    const [modalVisible, setModalVisible] = useState(false);
    let displayContent = null;
    let winnerMessage = null;
    const scoreCount = `Current Score Count: ${props.currentScore}`;
    let dieFace;

    switch (props.dieFace) {
        case 1:
            dieFace = die_face_1;
            break;
        case 2:
            dieFace = die_face_2;
            break;
        case 3:
            dieFace = die_face_3;
            break;
        case 4:
            dieFace = die_face_4;
            break;
        case 5:
            dieFace = die_face_5;
            break;
        case 6:
            dieFace = die_face_6;
            break;
        case 7:
            dieFace = die_face_7;
            break;
        default:
            break;
    }
    
    if (props.startGame && props.gameWinner) {
        winnerMessage = `Player ${props.currentPlayer} WINS!`;
        displayContent = null;
    } else if (props.startGame && !props.gameWinner) { 
        displayContent = `Player ${props.currentPlayer} is rolling!`;
    } else {
        displayContent = 'Welcome to Dice Roll!';
    }

    return (
        <View style={styles.container}>
                    <Modal
                        animationType="fade"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => {
                            Alert.alert('Modal has been closed.');
                            setModalVisible(!modalVisible);
                        }}
                    >
                        <View style={styles.centeredView}>
                            <View style={styles.modalView}>
                                <Text style={styles.modalText}>{winnerMessage}</Text>
                                <Pressable
                                    style={[styles.button, styles.buttonClose]}
                                    onPress={() => setModalVisible(!modalVisible)}
                                >
                                    <Text style={styles.textStyle}>Start Another Game or Go Home</Text>
                                </Pressable>
                            </View>
                        </View>
                    </Modal>
            <Text style={styles.labelWelcome}>
                {displayContent}
            </Text>
            <Image 
                style={styles.dice}
                source={dieFace}
            />
            <Text style={styles.labelScore}>
                {scoreCount}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flex: 1,
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonClose: {
        backgroundColor: '#2196F3',
    },
    labelWelcome: {
        fontSize: 36,
        fontWeight: 'bold',
    },
    labelScore: {
        marginVertical: 10,
        fontSize: 22,
        fontWeight: 'bold',
    },
    dice: {
        marginVertical: 20,
        width: 100,
        height: 100,
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
    marginBottom: 15,
    textAlign: 'center',
    },
})

export default GameDisplay;