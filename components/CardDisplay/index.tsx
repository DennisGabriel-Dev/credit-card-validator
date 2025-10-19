import { getBrandColor } from "@/app/utils/regexBandeira";
import { Text, View } from "react-native";
import styles from "./styles";

export default function CardDisplay({ brand, cardNumber, valid }: { brand: string, cardNumber: string, valid: boolean }) {
  return (
    <View style={[styles.cardContainer, {backgroundColor: getBrandColor(brand)}]}>
      <Text style={styles.textCard}>{cardNumber}</Text>
        {valid && (
        <Text style={styles.textCardBrand}>
          {brand}
        </Text>
      )}
    </View>
  );
}