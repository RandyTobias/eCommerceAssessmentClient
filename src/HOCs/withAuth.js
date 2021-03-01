import React from "react";

import AuthService from '../Services/AuthService';

import NotLoggedIn from '../Components/NotLoggedIn';
import { isUndefined } from "lodash";

export function withAuth(Component) {
    return class AuthenticatedComponent extends React.Component {
        constructor(props) {
            super(props);

            this.state = {
                currentUser: undefined,
            };
        }

        componentDidMount() {
            const user = AuthService.getCurrentUser();

            if (user) {
                this.setState({
                    currentUser: user
                });
            }
        }

        isAuthenticated() {
            return this.state.currentUser != null && !isUndefined(this.state.currentUser);
        }

        /**
         * Render
         */
        render() {
            const loginErrorMessage = (
                <NotLoggedIn />
            );

            return (
                <div>
                    { this.isAuthenticated() === true ? <Component {...this.props} /> : loginErrorMessage}
                </div>
            );
        }
    };
}

export default withAuth;
