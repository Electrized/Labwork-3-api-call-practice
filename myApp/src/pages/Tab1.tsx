import useApi, { SearchType } from "../apicall";
import {
  IonApp,
  IonButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonPage,
  IonSearchbar,
  IonSelect,
  IonSelectOption,
  IonTitle,
  IonToolbar,
  } from "@ionic/react";
  import {useEffect, useState} from 'react';
  import "./Tab1.css";
  import { homeOutline, reorderThreeOutline, apertureOutline} from "ionicons/icons";
  const Tab1: React.FC = () => {

    const{ searchData } = useApi()
    const [searchTerm, setSearchTerm] = useState('');
    const [type, setType] = useState<SearchType>(SearchType.all);
    const [results, setResults] = useState([]);


    useEffect(() => {
      console.log('SEARCH')
      if (searchTerm === '') {
        setResults([])
        return
      }

      const loadData = async() => {
        const result = await searchData(searchTerm, type)
        setResults(result)
        console.log("🚀 ~ loadData ~ result:", result)
        
        setResults(result)
      }
      loadData()



    }, [searchTerm])

  return (
  <IonApp>
    <IonMenu contentId="main-content">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Menu</IonTitle>
        </IonToolbar>
      </IonHeader>
    <IonContent className="ion-padding">
  <IonList>
    <IonListHeader>
      <IonLabel>Navigate from here..</IonLabel>
    </IonListHeader>
  <IonMenuToggle autoHide>

  <IonItem button routerLink="/tab1">
    <IonIcon slot="start" icon={homeOutline}></IonIcon>
    <IonLabel>Home</IonLabel>
  </IonItem>

  <IonItem routerLink="/service">
    <IonIcon slot="start" icon={apertureOutline}></IonIcon>
    <IonLabel>Service</IonLabel>
  </IonItem>
  </IonMenuToggle>
  </IonList>
  </IonContent>
  </IonMenu>



  <IonPage id="main-content">
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonMenuToggle>
        <IonButton>
          <IonIcon slot="start" icon={reorderThreeOutline}></IonIcon>
          
        </IonButton>
      </IonMenuToggle>
    </IonButtons>
    <IonTitle>Search page</IonTitle>
          
  </IonToolbar>
  </IonHeader>


          <IonSearchbar 
          value={searchTerm} 
          debounce={300}
          onIonChange={(e) => setSearchTerm(e.detail.value!)}
          
          >
          </IonSearchbar>

  <IonItem>
    <IonLabel>Select Searchtype</IonLabel>
    <IonSelect 
    value={type}
    onIonChange={(e) => setType(e.detail.value!)}
    >
      <IonSelectOption value="">All</IonSelectOption>
      <IonSelectOption value="movie">Movie</IonSelectOption>
      <IonSelectOption value="series">Series</IonSelectOption>
      <IonSelectOption value="episode">Episode</IonSelectOption>


    </IonSelect>
  </IonItem>

  <IonList>
    
  </IonList>



  <IonContent className="ion-padding">
    <h1>Main Content</h1>
      <p>Click the icon in the top left to toggle the Menu.</p>
  </IonContent>
  </IonPage>
  </IonApp>
  );
  };
  export default Tab1;
  