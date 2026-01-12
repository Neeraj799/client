import { View, Text, TouchableOpacity } from "react-native";

type Props = {
  type: "offline" | "server" | "network";
  onRetry: () => void;
};

export default function ErrorState({ type, onRetry }: Props) {
  const messages = {
    offline: "You are offline.",
    server: "Server error. Try again later.",
    network: "Something went wrong.",
  };

  return (
    <View className="flex-1 justify-center items-center">
      <Text className="text-lg text-red-600 mb-3">{messages[type]}</Text>

      <TouchableOpacity
        onPress={onRetry}
        className="bg-blue-600 px-5 py-3 rounded-xl"
      >
        <Text className="text-white text-lg">Retry</Text>
      </TouchableOpacity>
    </View>
  );
}
