import { 
  IonButton, 
  IonCard, 
  IonCardContent, 
  IonCol, 
  IonContent, 
  IonGrid, 
  IonIcon, 
  IonInput, 
  IonInputPasswordToggle, 
  IonPage, 
  IonRow, 
  useIonLoading, 
  useIonRouter 
} from '@ionic/react';
import React from 'react';
import logo from '../asssets/capstone logo.png';
import { logIn, logoFacebook, logoGoogle } from 'ionicons/icons';

const Login: React.FC = () => {
  const router = useIonRouter();
  const [present, dismiss] = useIonLoading();

  const doLogin = async (event: any) => {
    event.preventDefault();
    await present('Logging in...');
    setTimeout(async () => {
      dismiss();
      router.push('/home', 'root', 'replace');
    }, 2000);
  };

  return (
    <IonPage>
      <IonContent>
        <IonGrid fixed>
          <IonRow class="ion-justify-content-center">
            <IonCol size="12" size-md="8" size-lg="6" size-xl="4">
              <IonCard>
                <IonCardContent>
                  {/* ✅ Wrap in a div with flex for centering */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      minHeight: "100%", 
                    }}
                  >
                    <img
                      src={logo}
                      alt="capstone logo"
                      style={{
                        width: "30vw",
                        maxWidth: "220px",
                        minWidth: "120px",
                        height: "auto",
                        marginBottom: "20px",
                      }}
                    />
                  </div>

                  {/* ✅ Login Form */}
                  <form onSubmit={doLogin}>
                    <IonInput
                      fill="outline"
                      type="email"
                      label="Email"
                      labelPlacement="floating"
                      placeholder="Enter Your Email"
                    />

                    <IonInput
                      className="ion-margin-top"
                      fill="outline"
                      type="password"
                      label="Password"
                      labelPlacement="floating"
                      placeholder="Enter Your Password"
                    >
                      <IonInputPasswordToggle slot="end" color="dark" />
                    </IonInput>

                    <IonButton
                      className="ion-margin-top"
                      type="submit"
                      expand="block"
                      shape="round"
                      color="primary"
                    >
                      Login
                      <IonIcon icon={logIn} slot="end" />
                    </IonButton>

                    <IonButton
                      routerLink="/register"
                      expand="full"
                      fill="clear"
                      shape="round"
                    >
                      Don't have an account? Register here
                    </IonButton>
                  </form>

                  {/* ✅ Social Login */}
                  <div className="ion-text-center ion-margin-top">
                    or sign in with
                  </div>

                  <div className="ion-text-center">
                    <IonButton className="ion-margin-top" fill="clear" shape="round">
                      <IonIcon icon={logoGoogle} slot="start" />
                      Google
                    </IonButton>
                    <IonButton className="ion-margin-top" fill="clear" shape="round">
                      <IonIcon icon={logoFacebook} slot="start" />
                      Facebook
                    </IonButton>
                  </div>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Login;
