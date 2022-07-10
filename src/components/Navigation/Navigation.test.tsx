import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import configureMockStore from 'redux-mock-store' ; 
import Navigation from './Navigation';
import { Provider } from "react-redux";


//if userRoleReducer === 'ADMIN' the result of test will be 'passed' 
//if userRoleReducer === 'USER' the result of test will be 'failed' 


const mockStore = configureMockStore([]);
describe("navigation component", () => {
    it("rendered role", () => {
        const { getByTestId } = render(
            <Provider store={mockStore({ userRoleReducer: 'ADMIN' })}>, 
                <Router>,
                    <Navigation />,
                </Router>,
            </Provider>,
        );
        const naviation = getByTestId("userRole");
        expect(naviation).toBeTruthy();
    })
})

