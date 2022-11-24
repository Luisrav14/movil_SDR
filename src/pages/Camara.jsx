import { camera, trash, close } from 'ionicons/icons';
import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonFab,
    IonFabButton,
    IonIcon,
    IonGrid,
    IonRow,
    IonCol,
    IonImg,
    IonActionSheet,
} from '@ionic/react';
import { usePhotoGallery } from '../hooks/usePhotoGallery';
import { useEffect } from 'react';

const Camara = () => {

    const { photos, takePhoto } = usePhotoGallery();

    useEffect(() => {
        !!photos[0] && console.log(photos[0].webPath)
        console.log(photos)
        // uploadImage(photos.webPath)
    }, [photos])

    return (
        <IonContent>
            <IonFab vertical="bottom" horizontal="center" slot="fixed">
                <IonFabButton onClick={() => takePhoto()}>
                    <IonIcon icon={camera}></IonIcon>
                </IonFabButton>
            </IonFab>
        </IonContent>
    )
}

export default Camara