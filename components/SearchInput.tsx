import { View, TextInput, Image, TouchableOpacity } from "react-native";

import { icons } from "./../constants";

interface IFormField {
  value?: string;
  handleChangeText?: (text: string) => void;
}

const SearchInput = ({ value, handleChangeText }: IFormField) => {
  return (
    <View className="w-full h-16 px-4 bg-black-100 border rounded-2xl focus:border-secondary items-center flex-row space-x-4">
      <TextInput
        autoCapitalize="none"
        className="text-base mt-0.5 text-white flex-1 font-pregular"
        value={value}
        placeholder="Search for a video topic"
        placeholderTextColor="#7b7b8b"
        onChangeText={handleChangeText}
      />

      <TouchableOpacity>
        <Image source={icons.search} className="w-5 h-5" resizeMode="contain" />
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;
