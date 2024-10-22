import {Image, Text, View, ScrollView} from "react-native";
import  React  from 'react';



const Boat = ({title, poster, Description})=> {
    return(
        <View>
            <Image source={poster} style={{width:400, height:500}}/>
            <Text>
                {title}
                {Description}
            </Text>

        </View>
    );
};

const Allboats =() => {
    return(
        <ScrollView>
            <Boat title="Name: Sea Ray" Description={" Description: Contoured lines and dramatic styling reveal a refined and powerful presence that will take your breath away."} poster={require('../img/sea_ray.jpg')}/>
            <Boat title="Name: Four Winns" Description={" Description: A sporty look and refined details truly set the Horizon 180 above all others."} poster={require('../img/four_winns.jpg')}/>
            <Boat title="Name: Flipper 640 ST" Description={" Description: A modern take on the classic, traditional hardtop and perfect for a family picnic."} poster={require('../img/flipper.jpg')}/>
            <Boat title="Name: Princess V48" Description={" Description: There is the option for an open design with a full-length cockpit and sunroof, or the enclosed deck saloon model, available with the option of a climate controlled interior."} poster={require('../img/princess.jpg')}/>
            <Boat title="Name: Bayliner 175 Bowrider" Description={" Description: Its outboard power gives you increased cockpit space and quiet, fuel-efficient performance."} poster={require('../img/bayliner.jpg')}/>
            <Boat title="Name: Fairline Targa 47" Description={"Description: Stretch out on the large sun bed aft while friends lounge in the generously appointed cockpit."} poster={require('../img/fairline.jpg' +
                '')}/>

        </ScrollView>
    )
}
export  default  Allboats;
