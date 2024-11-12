import { Image, Text, View, ScrollView, StyleSheet } from "react-native";
import React from 'react';

const styles = StyleSheet.create({
    scrollContainer: {
        paddingVertical: 20,
        paddingHorizontal: 10,
        backgroundColor: '#4169E1',  // Royal Blue
        alignItems: 'center',      // Center all items horizontally
    },
    boatContainer: {
        marginBottom: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        overflow: 'hidden',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
        width: '90%',              // Set a consistent width for each card
    },
    boatImage: {
        width: '100%',
        height: 200,
    },
    textContainer: {
        padding: 10,
        alignItems: 'center',      // Center text inside the container
    },
    titleText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 5,
        textAlign: 'center',
    },
    descriptionText: {
        fontSize: 14,
        color: '#666',
        textAlign: 'center',
    },
});


const Boat = ({ title, poster, Description }) => {
    return (
        <View style={styles.boatContainer}>
            <Image source={poster} style={styles.boatImage} />
            <View style={styles.textContainer}>
                <Text style={styles.titleText}>{title}</Text>
                <Text style={styles.descriptionText}>{Description}</Text>
            </View>
        </View>
    );
};

const Allboats = () => {
    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <Boat title="Name: Sea Ray" Description={"Description: Contoured lines and dramatic styling reveal a refined and powerful presence that will take your breath away."} poster={require('../img/sea_ray.jpg')} />
            <Boat title="Name: Four Winns" Description={"Description: A sporty look and refined details truly set the Horizon 180 above all others."} poster={require('../img/four_winns.jpg')} />
            <Boat title="Name: Flipper 640 ST" Description={"Description: A modern take on the classic, traditional hardtop and perfect for a family picnic."} poster={require('../img/flipper.jpg')} />
            <Boat title="Name: Princess V48" Description={"Description: There is the option for an open design with a full-length cockpit and sunroof, or the enclosed deck saloon model, available with the option of a climate-controlled interior."} poster={require('../img/princess.jpg')} />
            <Boat title="Name: Bayliner 175 Bowrider" Description={"Description: Its outboard power gives you increased cockpit space and quiet, fuel-efficient performance."} poster={require('../img/bayliner.jpg')} />
            <Boat title="Name: Fairline Targa 47" Description={"Description: Stretch out on the large sun bed aft while friends lounge in the generously appointed cockpit."} poster={require('../img/fairline.jpg')} />
        </ScrollView>
    );
};


export default Allboats;
