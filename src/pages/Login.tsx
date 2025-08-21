import React, { useState } from 'react';
import { 
  IonButton, IonCard, IonCardContent, IonCol, IonContent, IonAvatar, IonGrid, 
  IonIcon, IonInput, IonInputPasswordToggle, IonPage, IonRow, 
  useIonLoading, useIonRouter 
} from '@ionic/react';
import { supabase } from "../utils/supabaseClients";
import logo from '../asssets/capstone logo.png';
import { logIn, logoFacebook, logoGoogle } from 'ionicons/icons';

const Login: React.FC = () => {
  const router = useIonRouter();
  const [present, dismiss] = useIonLoading();

  // ✅ State for email & password
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const doLogin = async (event: any) => {
    event.preventDefault();
    await present('Logging in...');

    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,       // ✅ use state variable
      password: password, // ✅ use state variable
    });

    dismiss();

    if (error) {
      alert("Login failed: " + error.message);
    } else {
      router.push("/home", "root", "replace");
    }
  };

  return (
    <IonPage>
      <IonContent>
        <IonGrid fixed>
          <IonRow class="ion-justify-content-center">
            <IonCol size="12" size-md="8" size-lg="6" size-xl="4">
              <IonCard>
                <IonCardContent>
                <div
  style={{
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "20px", // spacing from LEAP+logo block to the form
  }}
>
  {/* Logo + LEAP grouped */}
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    }}
  >
    <img
      src={logo}
      alt="capstone logo"
      style={{
        width: "200px",
        height: "auto",
        marginBottom: "0px", // ✅ this ONLY affects spacing between logo & LEAP
      }}
    />
    <h2
      style={{
        margin: 0,
        fontSize: "2rem", // bigger LEAP
        color: "#007bff",   // or exact logo blue
        fontWeight: "bold",
        letterSpacing: "4px",
      }}
    >
      L E A P
    </h2>
  </div>
</div>



                  {/* ✅ Login Form */}
                  <form onSubmit={doLogin}>
                    <IonInput
                      fill="outline"
                      type="email"
                      label="Email"
                      labelPlacement="floating"
                      placeholder="Enter Your Email"
                      value={email}
                      onIonInput={(e: any) => setEmail(e.target.value)}
                    />

                    <IonInput
                      className="ion-margin-top"
                      fill="outline"
                      type="password"
                      label="Password"
                      labelPlacement="floating"
                      placeholder="Enter Your Password"
                      value={password}
                      onIonInput={(e: any) => setPassword(e.target.value)}
                    >
                      <IonInputPasswordToggle slot="end" color="dark" />
                    </IonInput>

                    <IonButton className="ion-margin-top" type="submit" expand="block" shape="round" color="primary">
                      Login
                      <IonIcon icon={logIn} slot="end" />
                    </IonButton>

                    <IonButton routerLink="/register" expand="full" fill="clear" shape="round">
                      Don't have an account? Register here
                    </IonButton>
                  </form>

                  <div className="ion-text-center ion-margin-top">or sign in with</div>
                  <div className="ion-text-center">
                    <IonButton className="ion-margin-top" fill="clear" shape="round">
                      <IonIcon icon={logoGoogle} slot="start" /> Google
                    </IonButton>
                    <IonButton className="ion-margin-top" fill="clear" shape="round">
                      <IonIcon icon={logoFacebook} slot="start" /> Facebook
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
