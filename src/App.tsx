import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import AppNavigator from './navigators/AppNavigator'
import { Provider } from 'react-redux'
import { store } from './store'

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <AppNavigator />
      </NavigationContainer>
    </Provider>
  )
}

export default App
