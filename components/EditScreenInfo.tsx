import { Text, View, StyleSheet } from 'react-native';

export const EditScreenInfo = ({ path }: { path: string }) => {
  const title = 'Open up the code for this screen:';
  const description =
    'Change any of the text, save the file, and your app will automatically update.';

  return (
    <View>
      <View className={styles.getStartedContainer}>
        <Text className={styles.getStartedText}>{title}</Text>
        <View className='w-full h-30 bg-amber-500 flex items-center justify-center active:bg-amber-950'><Text className='text-2xl font-bold text-white'>asdadsf</Text></View>
        <View style={styles2.aaa}><Text>aaaaaa</Text></View>
        <View className={styles.codeHighlightContainer + styles.homeScreenFilename}>
          <Text>{path}</Text>
        </View>
        <Text className={styles.getStartedText}>{description}</Text>
      </View>
    </View>
  );
};

const styles = {
  codeHighlightContainer: `rounded-md px-1`,
  getStartedContainer: `items-center mx-12`,
  getStartedText: `text-lg leading-6 text-center`,
  helpContainer: `items-center mx-5 mt-4`,
  helpLink: `py-4`,
  helpLinkText: `text-center`,
  homeScreenFilename: `my-2`,
};

const styles2 = StyleSheet.create({
  aaa: {
    width: "100%",
    height: 120,
    backgroundColor: "red",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
});