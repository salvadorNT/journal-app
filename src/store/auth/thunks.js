import { loginWithEmailPassword, logoutGoogle, registerUserWithPassword, signInWithGoogle } from "../../firebase/providers";
import { checkingCredentials, login, logout } from "./authSlice"


export const startGoogleSignIn = () => {
  return async (dispatch) => {
    dispatch(checkingCredentials());

    const result = await signInWithGoogle();
    if (!result.ok) return dispatch(logout(result.errorMessage));

    dispatch(login(result))
  }
}

export const startCreatingUserWithEmailPassword = ({ email, password, displayName }) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
    const result = await registerUserWithPassword({ email, password, displayName });
    if (!result.ok) return dispatch(logout(result.errorMessage));

    dispatch(login(result))
  }
}

export const startLoginWithEmailPassword = (email, password) => {

  return async (dispatch) => {
    dispatch(checkingCredentials());
    const result = await loginWithEmailPassword({ email, password });
    if (!result.ok) return dispatch(logout(result.errorMessage));

    dispatch(login(result))
  }

}

export const startLogout = () => {
  return async (dispatch) => {
    const result = await logoutGoogle();
    if (!result.ok) return dispatch(logout(result.errorMessage));

    dispatch(logout());
  }
}