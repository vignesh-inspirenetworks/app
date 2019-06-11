import React from 'react';
import { View, ImageBackground, Text,TextInput, Button } from 'react-native';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions, createDrawerNavigator, DrawerActions} from 'react-navigation'; // Version can be specified in package.json
import { Container,Header,Left,Right,Icon } from 'native-base';



class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
    
    
};
  render() {
    return (
      
      <View  style={{flex: 0,width: 360, height: 700, backgroundColor: 'skyblue', alignContent: 'center'}}>
      <View  style={{flex: 0.2, alignItems: 'center'}}>   
        <Text></Text>
      <ImageBackground source={require('./inspire-logo.png')}
              style={{width: 80, height: 80}}
           /><Text style={{color:'black', fontFamily:'times new roman', fontStyle: 'italic'}}> INSPIRE NETWORK TECHNOLOGY PVT., LTD.,</Text></View>
        <View style={{ flexDirection: 'column',flex: 0.5,alignItems: 'center', justifyContent: 'center' }}>               
           <TextInput 
          style={{height: 40, width: "80%", borderColor: 'black', borderWidth: 1,  marginBottom: 20}}
          placeholder="User Name"
          onChangeText={(text) => this.setState({text})}
        />    
        <TextInput style={{ height: 40, width: "80%", borderColor: 'black', borderWidth: 1,  marginBottom: 30 }}
          placeholder="User Password"
          onChangeText={(text) => this.setState({text})}
         />   
         <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'space-evenly' }}>
         <Text>Forgor Password?                               </Text>   
         <Button 
         title= "Login"
         onPress={() => {
           this.props.navigation.dispatch(StackActions.reset({
             index: 0,
             actions: [
      NavigationActions.navigate({ routeName: 'detail' })
    ],
  }))
}}
/>

</View>
 </View>   
         
        <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'space-evenly' }}>
        <Button 
          title="signup"
          onPress={() => {
            this.props.navigation.dispatch(StackActions.reset({
              index: 0,
              actions: [
                NavigationActions.navigate({ routeName: 'Details' })
              ],
            }))
          }}
        />
       
</View>
       
        
        
      </View>
      
      
    ); 
  }  
}

class DetailsScreen extends React.Component {

  render() {
    return (
      <View style={{width: 360, height: 700, backgroundColor: 'powderblue' , alignContent:"center"}}>
       <View style={{flex:0.1, alignItems:"center", justifyContent:"space-evenly"}}>
        <Text style={{color:'white', fontFamily:'times new roman', fontStyle: 'italic'}}>SIGNUP PAGE</Text> 
        </View>
      <View style={{flexdirection: 'column', flex: 0, alignItems: 'center', justifyContent: 'center' }}>
      <TextInput
          style={{height: 40, width: "80%", borderColor: 'black', borderWidth: 1,  marginBottom: 20}}
          placeholder="User Name"
          onChangeText={(text) => this.setState({text})}
        />    
        <TextInput
          style={{height: 40, width: "80%", borderColor: 'black', borderWidth: 1,  marginBottom: 20}}
          placeholder="User Id"
          onChangeText={(text) => this.setState({text})}
        />    
        <TextInput
          style={{height: 40, width: "80%", borderColor: 'black', borderWidth: 1,  marginBottom: 20}}
          placeholder="User Role"
          onChangeText={(text) => this.setState({text})}
        />    
        <TextInput
          style={{height: 40, width: "80%", borderColor: 'black', borderWidth: 1,  marginBottom: 20}}
          placeholder="User Password"
          onChangeText={(text) => this.setState({text})}
        />   
        <TextInput
          style={{height: 40, width: "80%", borderColor: 'black', borderWidth: 1,  marginBottom: 20}}
          placeholder="Conform Password"
          onChangeText={(text) => this.setState({text})}
        />  
        <TextInput
          style={{height: 40, width: "80%", borderColor: 'black', borderWidth: 1,  marginBottom: 20}}
          placeholder="Mobile Number"
          onChangeText={(text) => this.setState({text})}
        />
      </View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}> 
      <Button 
      title= "submit"
      onPress={() => {
        this.props.navigation.dispatch(StackActions.reset({
          index: 0,
          actions: [
    NavigationActions.navigate({ routeName: 'Sumbitpage' })
 ],
}))
}}
/>

</View></View>

    );
  }  
};

class firstpage extends React.Component{
  render(){
    return(

      <Container>
      <Header>
        <Left style={{ flexDirection: 'row'}}>
         <Icon onPress={() => this.props.navigation.openDrawer()} name="md-menu" style={{ color: 'white', marginRight: 15 }} />
        </Left>
        <Right>
         <Icon name="md-cart" style={{ color: 'white' }} />
        </Right>
      </Header>
    
      <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
              <ImageBackground source={require('./abstract-old-grunge-stone-textures_1203-11355.jpg')}
              style={{width: 400, height: 400}}             
           />
        <Text>HOME PAGE</Text>
        <Button style={{  flexDirection: 'row' , alignItems: 'center',justifyContent: 'space-between' }}
title="Go back"
onPress={() => {
  this.props.navigation.dispatch(StackActions.reset({
    index: 0,
   
    actions: [
      NavigationActions.navigate({ routeName: 'back' })
    ],
  }))
}}
/>    
      </View>
      </Container>
    )
  }
  
};

const MyDrawerNavigator = createDrawerNavigator({
  Home:{ 
     screen: MyHomeScreen,
  },
  Notifications: {
     screen: MyNotificationsScreen,
  },
});

const MyApp = createAppContainer(MyDrawerNavigator);

class App extends React.Component{
   render(){
     return(
       <Container>
         <MyApp >
           </MyApp >
       </Container>
     );
   }
}

export default App;


const AppNavigator = createStackNavigator({
  
  Home: {
    screen: HomeScreen,
  },
  back: {
    screen: HomeScreen,
  },
  Details: {
    screen: DetailsScreen,
  },
  detail: {
    screen: firstpage,
  },
  Sumbitpage: {
    screen: HomeScreen,
  },
  
}, {
    initialRouteName: 'Home',
});
export default createAppContainer(AppNavigator);