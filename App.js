import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';
// import { Text } from '@flip.id/ui-kit';
import { FlipUiProvider } from '@flip.id/ui-kit';
import Constants from 'expo-constants';

export default function App() {
  return (
    <FlipUiProvider>
      <View style={styles.container}>
        <Text style={styles.paragraph}>
          @FLIP/UI-KIT SNACK-EXPO RFACHRUR CEK
        </Text>
      </View>
    </FlipUiProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

// import { registerRootComponent } from 'expo';

// import FlipUIKitApp from './src/index';


// registerRootComponent(FlipUIKitApp);

// export default App;

