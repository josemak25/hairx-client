import React from 'react';
import Router from './router';
import ThemeProvider from './theme';
import OfflineBar from './commons/offline-bar';

export default function AppRouter() {
  return (
    <ThemeProvider>
      <OfflineBar />
      <Router />
    </ThemeProvider>
  );
}
