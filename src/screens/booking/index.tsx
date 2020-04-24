import React from 'react';
import { WebView } from 'react-native-webview';

import { NavigationInterface } from '../types';

interface BookingScreenProp extends NavigationInterface {
  testID?: string;
}

export default function Booking(props: BookingScreenProp) {
  return (
    <WebView
      source={{
        uri:
          'https://app.acuityscheduling.com/schedule.php?owner=16573926&notembedded=1'
      }}
      style={{ marginTop: 10, flex: 1 }}
    />
  );
}
