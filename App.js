
import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  StatusBar
} from 'react-native';

export default function App() {
  const [game, setGame] = useState('Free Fire');
  const [checked, setChecked] = useState(false);

  const optimize = () => {
    setChecked(true);
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#080808" />

      <ScrollView contentContainerStyle={styles.content}>

        <Text style={styles.logo}>XENIT <Text style={styles.red}>BOST</Text></Text>
        <Text style={styles.subtitle}>ULTIMATE GAMING BOOSTER</Text>

        <View style={styles.banner}>
          <Text style={styles.small}>BIENVENIDO A</Text>
          <Text style={styles.title}>XENIT BOST</Text>
          <Text style={styles.description}>
            Prepara tu dispositivo para jugar.
          </Text>
          <View style={styles.status}>
            <Text style={styles.statusText}>● SISTEMA LISTO</Text>
          </View>
        </View>

        <Text style={styles.heading}>SELECCIONA TU JUEGO</Text>

        <View style={styles.games}>
          <TouchableOpacity
            style={[
              styles.gameButton,
              game === 'Free Fire' && styles.selected
            ]}
            onPress={() => {
              setGame('Free Fire');
              setChecked(false);
            }}
          >
            <Text style={styles.gameText}>🔥</Text>
            <Text style={styles.gameName}>FREE FIRE</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.gameButton,
              game === 'Free Fire MAX' && styles.selected
            ]}
            onPress={() => {
              setGame('Free Fire MAX');
              setChecked(false);
            }}
          >
            <Text style={styles.gameText}>⚡</Text>
            <Text style={styles.gameName}>FREE FIRE MAX</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.boostCard}>
          <Text style={styles.heading}>OPTIMIZACIÓN</Text>
          <Text style={styles.boostTitle}>MODO GAMING</Text>
          <Text style={styles.description}>
            Revisa tu preparación antes de entrar a la partida.
          </Text>

          <TouchableOpacity
            style={styles.boostButton}
            onPress={optimize}
          >
            <Text style={styles.boostButtonText}>
              OPTIMIZAR AHORA
            </Text>
          </TouchableOpacity>

          {checked && (
            <View style={styles.result}>
              <Text style={styles.resultTitle}>✓ REVISIÓN COMPLETADA</Text>
              <Text style={styles.resultText}>
                Juego seleccionado: {game}
              </Text>
              <Text style={styles.resultText}>
                Cierra aplicaciones que no estés utilizando.
              </Text>
              <Text style={styles.resultText}>
                Activa el modo No molestar si lo necesitas.
              </Text>
              <Text style={styles.resultText}>
                Revisión informativa: no se han modificado archivos.
              </Text>
            </View>
          )}
        </View>

        <Text style={styles.heading}>HERRAMIENTAS</Text>

        <View style={styles.tool}>
          <Text style={styles.toolTitle}>🧹 LIMPIEZA</Text>
          <Text style={styles.toolDescription}>
            Consejos para liberar espacio de almacenamiento.
          </Text>
        </View>

        <View style={styles.tool}>
          <Text style={styles.toolTitle}>🎮 MODO GAMING</Text>
          <Text style={styles.toolDescription}>
            Prepara tu teléfono para reducir interrupciones.
          </Text>
        </View>

        <View style={styles.tool}>
          <Text style={styles.toolTitle}>📱 INFORMACIÓN</Text>
          <Text style={styles.toolDescription}>
            Consulta los ajustes de tu dispositivo.
          </Text>
        </View>

        <Text style={styles.footer}>XENIT BOST V1.0</Text>
        <Text style={styles.footerSmall}>
          POWER YOUR GAME
        </Text>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#080808'
  },
  content: {
    padding: 20,
    paddingTop: 35,
    paddingBottom: 45
  },
  logo: {
    color: '#FFFFFF',
    fontSize: 32,
    fontWeight: '900',
    textAlign: 'center',
    letterSpacing: 3
  },
  red: {
    color: '#FF2020'
  },
  subtitle: {
    color: '#777',
    textAlign: 'center',
    fontSize: 10,
    letterSpacing: 3,
    marginBottom: 28
  },
  banner: {
    backgroundColor: '#171010',
    borderColor: '#B51B1B',
    borderWidth: 1,
    borderRadius: 16,
    padding: 24,
    marginBottom: 28
  },
  small: {
    color: '#FF4444',
    fontSize: 12,
    fontWeight: 'bold'
  },
  title: {
    color: '#FFFFFF',
    fontSize: 30,
    fontWeight: '900',
    marginTop: 8
  },
  description: {
    color: '#AAAAAA',
    fontSize: 13,
    marginTop: 8
  },
  status: {
    backgroundColor: '#251010',
    padding: 10,
    borderRadius: 8,
    alignSelf: 'flex-start',
    marginTop: 18
  },
  statusText: {
    color: '#FF4444',
    fontWeight: 'bold',
    fontSize: 11
  },
  heading: {
    color: '#FF3030',
    fontSize: 13,
    fontWeight: '900',
    letterSpacing: 2,
    marginBottom: 15,
    marginTop: 8
  },
  games: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 28
  },
  gameButton: {
    flex: 1,
    backgroundColor: '#171717',
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center'
  },
  selected: {
    borderColor: '#FF2020',
    backgroundColor: '#291010'
  },
  gameText: {
    fontSize: 28
  },
  gameName: {
    color: '#FFFFFF',
    fontSize: 10,
    fontWeight: 'bold',
    marginTop: 8
  },
  boostCard: {
    backgroundColor: '#151515',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#333',
    padding: 20,
    marginBottom: 28
  },
  boostTitle: {
    color: '#FFFFFF',
    fontSize: 23,
    fontWeight: '900'
  },
  boostButton: {
    backgroundColor: '#E51B23',
    padding: 17,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 22
  },
  boostButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '900',
    letterSpacing: 1
  },
  result: {
    backgroundColor: '#211010',
    padding: 15,
    borderRadius: 10,
    marginTop: 18
  },
  resultTitle: {
    color: '#FF4545',
    fontWeight: 'bold',
    marginBottom: 10
  },
  resultText: {
    color: '#DDDDDD',
    fontSize: 12,
    marginBottom: 8
  },
  tool: {
    backgroundColor: '#171717',
    borderColor: '#333',
    borderWidth: 1,
    padding: 17,
    borderRadius: 12,
    marginBottom: 12
  },
  toolTitle: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 15
  },
  toolDescription: {
    color: '#999',
    fontSize: 12,
    marginTop: 7
  },
  footer: {
    color: '#FF3030',
    textAlign: 'center',
    fontWeight: '900',
    fontSize: 17,
    marginTop: 30,
    letterSpacing: 3
  },
  footerSmall: {
    color: '#666',
    textAlign: 'center',
    fontSize: 10,
    letterSpacing: 3,
    marginTop: 7
  }
});
