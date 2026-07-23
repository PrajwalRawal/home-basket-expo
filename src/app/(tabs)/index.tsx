import CompletedItems from "@/components/list/CompletedItems";
import ListHeroCard from "@/components/list/ListHeroCard";
import PendingItemCard from "@/components/list/PendingItemCard";
import TabScreenBackground from "@/components/TabScreenBackground";
import { useGroceryStore } from "@/store/grocery-store";
import { FlatList, Platform, StyleSheet, Text, View } from "react-native";

export default function ListScreen() {
  const { items } = useGroceryStore();

  const pendingItems = items.filter((item) => !item.purchased);

  return (
    <FlatList
      className="flex-1 bg-background"
      data={pendingItems}
      keyExtractor={(item) => item.id}
      contentContainerStyle={{ padding: 20, gap: 14 }}
      contentInsetAdjustmentBehavior="automatic"
      renderItem={({ item }) => <PendingItemCard item={item} />}
      ListHeaderComponent={
        <View
          style={{ gap: 14, marginTop: Platform.OS === "android" ? 40 : 0 }}
        >
          <TabScreenBackground />
          <ListHeroCard />

          <View className="flex-row items-center justify-between px-1">
            <Text className="text-sm font-semibold uppercase tracking-[1px] text-muted-foreground ">
              Shopping Items
            </Text>
            <Text className="text-sm text-muted-foreground">
              {pendingItems.length} active
            </Text>
          </View>
        </View>
      }
      ListFooterComponent={<CompletedItems />}
    />
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
});
