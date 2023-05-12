/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  Text,
  StyleSheet,
  StatusBar,
} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import ActionButton, {ActionButtonTitle} from '../components/action-button';
import {FavoriteSolid, Hand, Sound} from '../components/icons';
import {DetailSummaryItemContainer} from '../components/detail-summary-item';

function DetailView({route}) {
  const keyword = route.params.keyword;
  const [veri, setVeri] = useState({});

  const getDetailData = async () => {
    const response = await fetch(`https://sozluk.gov.tr/gts?ara=${keyword}`);
    const data = await response.json();
    console.log(JSON.stringify(data[0].anlamlarListe, null, 2));
    setVeri(data[0]);
  };

  useEffect(() => {
    getDetailData();
  }, []);

  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle('dark-content');
      StatusBar.setBackgroundColor('#ffffff');
    }, []),
  );
  return (
    <SafeAreaView style={styles.view}>
      <ScrollView style={{padding: 16}}>
        <View>
          <Text style={styles.text}>{keyword}</Text>
          {veri.lisan ? <Text style={styles.text2}>{veri.lisan}</Text> : null}
        </View>
        <View style={{flexDirection: 'row'}}>
          <ActionButton disabled={!veri} style={styles.button1}>
            <Sound style={{color: '#758291'}} />
          </ActionButton>
          <ActionButton disabled={!veri} style={styles.button2}>
            <FavoriteSolid style={{color: '#E11E3C'}} />
          </ActionButton>
          <ActionButton disabled={!veri}>
            <Hand style={{color: '#758291', marginRight: 5}} />
            <ActionButtonTitle style={{fontWeight: 'bold'}}>
              Türk İşaret Dili
            </ActionButtonTitle>
          </ActionButton>
        </View>
        <View
          style={{backgroundColor: '#fff', marginTop: 50, borderRadius: 20}}>
          {veri.anlamlarListe &&
            veri.anlamlarListe.map(item => (
              <DetailSummaryItemContainer
                key={item.anlam_id}
                veri={item.anlam}
              />
            ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    shadowColor: 'transparent',
    backgroundColor: '#F8F8F8',
  },
  text: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  text2: {
    fontSize: 16,
    marginTop: 10,
    color: '#758291',
  },
  button1: {
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    backgroundColor: '#fff',
    flexDirection: 'row',
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  button2: {
    marginTop: 30,
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    backgroundColor: '#fff',
    flexDirection: 'row',
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  summary: {
    marginTop: 5,
    marginLeft: 15,
    marginRight: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#758291',
  },
});

export default DetailView;
