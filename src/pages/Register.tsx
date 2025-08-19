import React, { useState } from 'react';
import { 
  IonButton, IonCard, IonCardContent, IonCol, IonContent, 
  IonGrid, IonInput, IonInputPasswordToggle, IonPage, IonRow, 
  IonTitle 
} from '@ionic/react';
import { supabase } from '../supabaseClient';   // adjust path if needed

const Register: React.FC = () => {
  const [username, setUsername] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          username,
          firstname,
          lastname,
          age,
          address
        }
      }
    });

    if (error) {
      alert("Error: " + error.message);
    } else {
      alert("Registration successful! Please check your email to confirm.");
      console.log("User:", data.user);
    }
  };

  return (
    <IonPage>
      <IonContent className="ion-padding">
        <IonGrid fixed>
          <IonRow class="ion-justify-content-center">
            <IonCol size="12" size-md="8" size-lg="6" size-xl="4">
              <IonCard>
                <IonCardContent>
                  <IonTitle className="ion-text-center" color="primary">
                    Register Form
                  </IonTitle>

                  <IonInput className="ion-margin-top" fill="outline" label="User Name"
                    labelPlacement="floating" value={username}
                    onIonInput={e => setUsername(e.detail.value!)} />

                  <IonInput className="ion-margin-top" fill="outline" label="First Name"
                    labelPlacement="floating" value={firstname}
                    onIonInput={e => setFirstname(e.detail.value!)} />

                  <IonInput className="ion-margin-top" fill="outline" label="Last Name"
                    labelPlacement="floating" value={lastname}
                    onIonInput={e => setLastname(e.detail.value!)} />

                  <IonInput className="ion-margin-top" fill="outline" type="number" label="Age"
                    labelPlacement="floating" value={age}
                    onIonInput={e => setAge(e.detail.value!)} />

                  <IonInput className="ion-margin-top" fill="outline" label="Address"
                    labelPlacement="floating" value={address}
                    onIonInput={e => setAddress(e.detail.value!)} />

                  <IonInput className="ion-margin-top" fill="outline" type="email" label="Email"
                    labelPlacement="floating" value={email}
                    onIonInput={e => setEmail(e.detail.value!)} />

                  <IonInput className="ion-margin-top" fill="outline" type="password" label="Password"
                    labelPlacement="floating" value={password}
                    onIonInput={e => setPassword(e.detail.value!)}
                  >
                    <IonInputPasswordToggle slot="end" color="dark" />
                  </IonInput>

                  <IonInput className="ion-margin-top" fill="outline" type="password" label="Confirm Password"
                    labelPlacement="floating" value={confirmPassword}
                    onIonInput={e => setConfirmPassword(e.detail.value!)}
                  >
                    <IonInputPasswordToggle slot="end" color="dark" />
                  </IonInput>

                  <IonButton 
                    className="ion-margin-top" 
                    expand="block" 
                    shape="round" 
                    color="primary"
                    onClick={handleRegister}
                  >
                    Register
                  </IonButton>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Register;
