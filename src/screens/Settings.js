import React, {useEffect, useState} from 'react'
import { View,
    StyleSheet,
    Text, 
    TouchableOpacity} from 'react-native'
    import { Surface, Switch, Caption  } from 'react-native-paper'
import AppHeader from '../components/AppHeader'
import Colors from '../../constants/Colors'
import { Icon } from 'react-native-vector-icons/Icon'
const IconSize = 24



const Content = ({ backgroundColor = Colors.green, width = "100%", height = 10  }) => (
   <View style={[styles.view, { backgroundColor, width, height }]} />
)



const Settings = ({navigation, route}) => {
        const [isSwitchOn, setIsSwitchOn] = useState(false);
    const [selectedTheme, setSelectedTheme] = useState('light');
    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);

  return (
    <div>
      
    </div>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    gridCard: {
        flex: 1,
        padding: 10,
        elevation: 1,
        borderRadius: 18,
        margin: 4,
        flexDirection: 'row',
        alignItems: 'center',
    },
    settingContainer: {
        flex: 1,
        padding: 16
    },
    switchContainer: {
        padding: 12,
        justifyContent: 'space-between',
        marginVertical: 8,
        borderRadius: 18,
    },
    switchIcon: {
        padding: 8,
        borderRadius: 6,
    },
    themeContainer: {
        flex: 1,
    },
    themeSelector: {
        height: 200,
        padding: 16,
        // backgroundColor: 'yellow'
    },
    themeBox: {
        flex: 1,
        margin: 10,
        padding: 16,
        height: 150,
        width: '100%',
        borderRadius: 10,
    },
    view: { width: '100%', height: 10, backgroundColor: Colors.green, marginTop: 10 }
})

export default Settings
