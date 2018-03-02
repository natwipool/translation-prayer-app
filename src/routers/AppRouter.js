import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import DashboardPage from '../components/DashboardPage';
import TransPrayerPage from '../components/TransPrayerPage';
import PlaylistPage from '../components/PlaylistPage';
import PlaylistItems from '../components/PlaylistItems';
import AddPlaylistPage from '../components/AddPlaylistPage';
import EditPlaylistPage from '../components/EditPlaylistPage';
import AboutPage from '../components/AboutPage';
import NotFoundPage from '../components/NotFoundPage';
import Player from '../components/Player';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={DashboardPage} exact={true} />
        <Route path="/prayer" component={TransPrayerPage} />
        <Route path="/playlists" component={PlaylistPage} />
        <Route path="/playlist/:id" component={PlaylistItems} />
        <Route path="/create" component={AddPlaylistPage} />
        <Route path="/edit/:id" component={EditPlaylistPage} />
        <Route path="/about" component={AboutPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>    
  </BrowserRouter>
);

export default AppRouter;