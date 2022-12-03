// npx expo install @react-native-async-storage/async-storage

//Class for storing user token

import AsyncStorage from '@react-native-async-storage/async-storage'

class AuthStorage{

  constructor(namespace = 'auth'){
    this.namespace= namespace
  }

  // Get the access token for the storage
  async getAccesToken(){
    const tokenInLocal = await AsyncStorage.getItem(`${this.namespace}:token`)
    return tokenInLocal ? JSON.parse(tokenInLocal) : []
  }


  // Add the access token to the storage
  async setAccessToken(accessToken) {
    try {
      await this.removeAccessToken()
      await AsyncStorage.setItem(`${this.namespace}:token`,JSON.stringify(accessToken))
    } catch (error) {
      console.log('settoken error', error)
    }
    
  }

  // Remove the access token from the storage
  async removeAccessToken() {
    await AsyncStorage.removeItem(`${this.namespace}:token`)
  }

}

export default AuthStorage