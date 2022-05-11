import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as ImageManipulator from "expo-image-manipulator";
// import TuyAPI from "tuyapi";

// import get from "./common";

import { TuyaContext } from "@tuya/tuya-connector-nodejs";

export default function App() {
  const [selectedImage, setSelectedImage] = React.useState("");
  let openImagePickerAsync = async () => {
    const tuya = new TuyaContext({
      baseUrl: "https://openapi.tuyacn.com",
      accessKey: "accessKey",
      secretKey: "secretKey",
    });

    const device = await tuya.device.detail({
      device_id: "device_id",
    });

    console.log("device:" + JSON.stringify(device));

    // const device = new TuyAPI({
    //   id: "id",
    //   key: "key",
    // });
    // (async () => {
    // await device.find();
    // await device.connect();
    // let status = await device.get();
    // console.log(`Current status: ${status}.`);
    // await device.set({ set: !status });
    // status = await device.get();
    // console.log(`New status: ${status}.`);
    // device.disconnect();
    // })();
  };

  // let rotate = async () => {
  //   const manipResult = await ImageManipulator.manipulateAsync(
  //     selectedImage,
  //     [{ flip: "" }, { flip: ImageManipulator.FlipType.Vertical }],
  //     { compress: 1, format: ImageManipulator.SaveFormat.PNG }
  //   );
  //   setSelectedImage(manipResult.uri);
  // };
  return (
    <View style={styles.container}>
      {selectedImage == "" ? (
        <View>
          <TouchableOpacity
            onPress={openImagePickerAsync}
            style={styles.button}
          >
            <Text style={{ color: "#eeb585" }}>Upload a picture</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View style={{ alignItems: "center" }}>
          <Image source={{ uri: selectedImage }} style={styles.image} />
          {/* <TouchableOpacity onPress={rotate} style={styles.button}>
            <Text style={{ color: "#eeb585" }}>Rotate image</Text>
          </TouchableOpacity> */}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eeb585",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    marginTop: 30,
    paddingHorizontal: 30,
    paddingVertical: 20,
    borderRadius: 10,
    backgroundColor: "black",
  },
  image: {
    width: 300,
    height: 300,
    marginTop: 20,
    borderRadius: 10,
  },
});
