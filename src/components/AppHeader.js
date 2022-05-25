import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { Badge,  Surface ,Title } from 'react-native-paper'
import Colors from "../../constants/Colors"; 
import { ArrowUpCircle } from "react-native-feather";

import { Feather } from 'react-native-feather';


const AppHeader = ({ menu, back, title, right, rightFunction, optionalIcon,optionalFunc, navigation, headerBg,iconColor, titleAlight, optionalBadge  }) => {
  return (

      <Surface style={[styles.header, { backgroundColor: headerBg }]} >
          <View style={styles.view}>
 {menu && <TouchableOpacity onPress={() => navigation.goBack()} >
              
                     <ArrowUpCircle  stroke="red" fill="#fff" width={32} height={32} />
                     </TouchableOpacity>}
                   {back && <TouchableOpacity onPress={() => navigation.goBack()}>
                      
                  <ArrowUpCircle name="arrow-left" stroke="red" fill="#fff" width={32} height={32} />
                  
              </TouchableOpacity>
              }
          </View>
<View style={styles.titleView} >
              <Title style={{ color: iconColor, textAlign: titleAlight }}> { title} </Title>
</View>
          <View style={[styles.view, styles.rightView]}>
              {optionalFunc && <TouchableOpacity style={styles.rowView} onPress={optionalFunc}>
                  <Feather name={optionalIcon}  color={iconColor} />
                  {optionalBadge && <Badge style={{ position: 'absolute', top: -5, right: -10 }}>{optionalBadge}</Badge>}
              </TouchableOpacity>}
              {rightFunction && <TouchableOpacity onPress={rightFunction}>
                  <Feather name={right} width="6px" color={iconColor} />
              </TouchableOpacity>}
          </View>


  </Surface>

  )
}

export default AppHeader

const styles = StyleSheet.create({
    header: {
        height: 50,
        elevation: 4,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: Colors.black,
    },
    view: {
        margin: 10,
        alignItems: 'center',
        flexDirection: 'row',
        // backgroundColor: 'yellow'
    },
    titleView: {
        flex: 1,
    },
    rightView: {
        justifyContent: 'flex-end',
    },
    rowView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 10,
    }
})