import { render, fireEvent, waitFor } from '@testing-library/react-native'
import { SignInContainer } from '../components/SignIn';

// ...

describe('SignIn', () => {
  describe('SignInContainer', () => {
    it('calls onSubmit function with correct arguments when a valid form is submitted', async () => {
      // render the SignInContainer component, fill the text inputs and press the submit button

      const login= jest.fn()
      const { getByPlaceholderText, getByText } = render(<SignInContainer login={login} />);

      fireEvent.changeText(getByPlaceholderText('Username'),'kalle')
      fireEvent.changeText(getByPlaceholderText('Password'),'password')
      fireEvent.press(getByText('Sign In'))

      
      await waitFor(() => {
        // expect the onSubmit function to have been called once and with a correct first argument
        expect(login).toHaveBeenCalledTimes(1)
        expect(login.mock.calls[0][0]).toEqual({
          username: 'kalle',
          password: 'password',
        });
      })
    });
  });
});