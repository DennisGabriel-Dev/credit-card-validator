import { getBrandColor } from "@/app/utils/regexBandeira";
import { Image, ImageSourcePropType, Text, View } from "react-native";
import styles from "./styles";

// Tipos
type BrandLogos = {
  [key: string]: ImageSourcePropType;
};

interface CardDisplayProps {
  brand: string;
  cardNumber: string;
  valid: boolean;
}

// Mapeamento dos logos das bandeiras
const brandLogos: BrandLogos = {
  VISA: require('@/assets/images/brands/visa.png'),
  MASTERCARD: require('@/assets/images/brands/mastercard.png'),
  AMEX: require('@/assets/images/brands/amex.png'),
  DISCOVER: require('@/assets/images/brands/discover.png'),
  DINERS: require('@/assets/images/brands/diners.png'),
  JCB: require('@/assets/images/brands/jcb.png'),
  ELO: require('@/assets/images/brands/elo.png'),
  HIPERCARD: require('@/assets/images/brands/hipercard.png'),
  AURA: require('@/assets/images/brands/aura.png'),
  BANESE: require('@/assets/images/brands/banese.png'),
  CABAL: require('@/assets/images/brands/cabal.png'),
  FORTBRASIL: require('@/assets/images/brands/fortbrasil.png'),
  GRANDCARD: require('@/assets/images/brands/grandcard.png'),
  PERSONALCARD: require('@/assets/images/brands/personalcard.png'),
  SOROCRED: require('@/assets/images/brands/sorocred.png'),
  VALECARD: require('@/assets/images/brands/valecard.png'),
};

export default function CardDisplay({ brand, cardNumber, valid }: CardDisplayProps) {
  const getBrandLogo = (brandName: string): ImageSourcePropType | null => {
    try {
      return brandLogos[brandName] || null;
    } catch {
      return null;
    }
  };

  const logoSource = getBrandLogo(brand);

  return (
    <View style={[styles.cardContainer, {backgroundColor: getBrandColor(brand)}]}>
      <Text style={styles.textCard}>{cardNumber}</Text>
      {valid && (
        <View style={styles.brandLogoContainer}>
          {logoSource ? (
            <Image 
              source={logoSource} 
              style={styles.brandLogo}
              resizeMode="contain"
            />
          ) : (
            <Text style={styles.textCardBrand}>{brand}</Text>
          )}
        </View>
      )}
    </View>
  );
}