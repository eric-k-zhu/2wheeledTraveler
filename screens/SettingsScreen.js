import React from 'react'
import { Text, View, StyleSheet } from 'react-native';
import { Button } from "native-base";
import { CheckBox } from 'react-native-elements';
import GLOBAL from './global.js'



export default class SettingsScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            checked1: GLOBAL.check1,
            checked2: GLOBAL.check2,
            checked3: GLOBAL.check3,
            checked4: GLOBAL.check4,
            checked5: GLOBAL.check5,
            current: 0
        };
    }

    render() {
        return (
            <View style={styles.main}>
                <Text style={styles.title}>Settings</Text>
                <Text style={styles.Text}>Speed (Select 3)</Text>
                <CheckBox
                    title='Current Speed'
                    checked={this.state.checked1}
                    onPress={() => {
                        this.state.current = 1
                        this.checkSpeed()
                    }
                    }
                />
                <CheckBox
                    title='Maximum Speed'
                    checked={this.state.checked2}
                    onPress={() => {
                        this.state.current = 2
                        this.checkSpeed()
                    }
                    }
                />
                <CheckBox
                    title='Average Speed'
                    checked={this.state.checked3}
                    onPress={() => {
                        this.state.current = 3
                        this.checkSpeed()
                    }}
                />
                <CheckBox
                    title='Distance Traveled'
                    checked={this.state.checked4}
                    onPress={() => {
                        this.state.current = 4
                        this.checkSpeed()
                    }}
                />

                <CheckBox
                    title='Current Time'
                    checked={this.state.checked5}
                    onPress={() => {
                        this.state.current = 5
                        this.checkSpeed()
                    }}
                />
                <Text style={styles.Text}>Contacts</Text>

                <Button style={styles.link} onPress={() => this.props.navigation.navigate('ProfileScreen')}>
                    <Text style={styles.link}>Back to Profile</Text>
                </Button>
            </View>
        )
    }

    // check to see if 3 are already selected
    checkSpeed() {
        if (this.state.current == 1) {
            if (this.state.checked1) {
                this.setState({ checked1: false })
                GLOBAL.check1 = false;
                return
            }
        }
        if (this.state.current == 2) {
            if (this.state.checked2) {
                this.setState({ checked2: false })
                GLOBAL.check2 = false;
                return
            }
        }
        if (this.state.current == 3) {
            if (this.state.checked3) {
                this.setState({ checked3: false })
                GLOBAL.check3 = false;
                return
            }
        }
        if (this.state.current == 4) {
            if (this.state.checked4) {
                this.setState({ checked4: false })
                GLOBAL.check4 = false;
                return
            }
        }

        if (this.state.current == 5) {
            if (this.state.checked5) {
                this.setState({ checked5: false })
                GLOBAL.check5 = false;
                return
            }
        }

        // can only check if 3 or less are checked
        count = 0

        if (this.state.checked1) {
            count++
        }
        if (this.state.checked2) {
            count++
        }
        if (this.state.checked3) {
            count++
        }
        if (this.state.checked4) {
            count++
        }
        if (this.state.checked5) {
            count++
        }

        if (count == 3) {
            return
        }

        if (this.state.current == 1) {
            this.setState({ checked1: true })
            GLOBAL.check1 = true;
            return
        }
        if (this.state.current == 2) {
            this.setState({ checked2: true })
            GLOBAL.check2 = true;
            return
        }
        if (this.state.current == 3) {
            this.setState({ checked3: true })
            GLOBAL.check3 = true;
            return
        }
        if (this.state.current == 4) {
            this.setState({ checked4: true })
            GLOBAL.check4 = true;
            return
        }

        if (this.state.current == 5) {
            this.setState({ checked5: true })
            GLOBAL.check5 = true;
            return
        }

    }
}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        padding: 30,
        flexDirection: 'column',
        backgroundColor: '#ffffff'
    },
    title: {
        marginBottom: 20,
        fontSize: 40,
        textAlign: 'center',
        paddingTop: 50,
        color: '#56ba58'
    },
    Button: {
        backgroundColor: '#56ba58',
        marginTop: 50,
        marginBottom: 20
    },
    link: {
        alignSelf: "center",
        backgroundColor: "transparent",
        textDecorationLine: "underline",
        color: "#56ba58",
        fontSize: 20,
        marginTop: 10
    },
    buttonText: {
        color: 'white',
        fontSize: 30
    },
    Label: {
        fontSize: 20
    },
    Text: {
        fontSize: 20,
        paddingBottom: 10
    }

});