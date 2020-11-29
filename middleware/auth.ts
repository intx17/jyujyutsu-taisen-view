import { Auth } from 'aws-amplify'

export default async () => {
  const userInfo = await Auth.currentUserInfo();
  const isLoginPage = location.pathname === '/';

  // サインイン済みの場合
  if (userInfo) {
    if (isLoginPage) {
      location.href = '/battle';
      return;
    }
    return;
  }

  // サインインイン画面以外の場合
  if (!isLoginPage) {
    // サインイン画面(TOP)に戻す
    location.href = '/';
  }
}
