import { View, Text } from "react-native";
import { Post } from "../types/post";

type Props = {
  item: Post;
};

export default function PostCard({ item }: Props) {
  return (
    <View className="bg-gray-100 p-4 rounded-xl mb-3">
      <Text className="text-lg font-semibold text-black">{item.title}</Text>
      <Text className="text-gray-800 mt-1">{item.body}</Text>
    </View>
  );
}
