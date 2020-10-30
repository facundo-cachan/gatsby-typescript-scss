import React from 'react';
import { Link } from 'gatsby';
import { TouchableOpacity, Text, View } from 'react-native';
import Layout from '../layout';
import Image from '../components/Image';
import './indexPage.scss';
/*
const styles = StyleSheet.create({
  box: { padding: 10, margin: 10, borderWidth: 1, borderColor: 'black' },
  text: { fontWeight: 'bold', color: 'red' },
  button: {
    marginVertical: 40,
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'lightgrey',
    alignItems: 'center',
  },
  buttonText: { fontWeight: 'bold', color: 'black' },
});
*/
class IndexPage extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <Layout>
        <View className="box">
          <Text className="text">
            Hi this is React-Native-Web rendered by Gatsby
          </Text>
          <TouchableOpacity
            className="button"
            onPress={() => alert('it works')}
          >
            <Text className="button-text">Button</Text>
          </TouchableOpacity>
          <figure className="image_index">
            <Image />
          </figure>
          <Link to="/page-2/">Go to page 2</Link>
        </View>
      </Layout>
    );
  }
}

export default IndexPage;
