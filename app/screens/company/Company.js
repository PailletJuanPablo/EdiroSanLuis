import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import OnlyTitleHeader from '../../components/OnlyTitleHeader';
import { ScrollView } from 'react-native-gesture-handler';

export default class Company extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const styles = StyleSheet.create({
            text: {
                fontFamily: 'Lato-Regular'
            },
            title: {
                fontFamily: 'Lato-Bold',
                fontSize: 20,
            },
            content: {
                padding: 10,
            }
        });

        return (
            <View >
                <OnlyTitleHeader title="Institucional" backgroundColor="#9b265e" backAction={this.props.navigation.goBack} />
                <ScrollView style={styles.content}>
                    <Text style={styles.text}>
                        Somos una empresa de seguridad privada con 12 años de experiencia en el mercado, especializada en la prevención, vigilancia privada, protección de ambientes, establecimientos, personas, espectáculos o eventos.
                    </Text>
                    <Text style={styles.text}>
                        Brindamos soluciones, servicios y sistemas de seguridad “a su medida”. Contamos con la experiencia, capacidad y la tecnología para satisfacer acabadamente las exigencias de un mercado que se transforma permanentemente.
                    </Text>
                    <Text style={styles.text}>
                        Contamos con avales provinciales, nacionales y privados que certifican nuestra capacitación.
                    </Text>
                    <Text style={styles.title}>
                        Misión y Visión
                    </Text>
                    <Text style={styles.text}>
                        Nuestra misión es proteger a nuestros clientes, sus bienes y sus familias estableciendo a través de pautas y valores que el accionar de nuestros asociados en búsqueda de la satisfacción de nuestros clientes. El cliente es el centro de nuestra organización y nuestra fuente de trabajo, nuestro objetivo es cumplir con sus necesidades dentro del marco legal, por lo que quienes prestan el servicio de cara al mismo, nuestros asociados, se conviertan en las personas mas importantes.
                    </Text>
                </ScrollView>
            </View>
        );
    }
}
