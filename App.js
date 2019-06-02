import { createAppContainer } from 'react-navigation';
import GeneralNavigator from './app/screens/MainNavigation';
import * as React from 'react';

const AppContainer = createAppContainer(GeneralNavigator);


export default class App extends React.Component {
    render() {
        return (
            <AppContainer />
        );
    }
}


