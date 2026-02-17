export interface CartItemProps {
  id: number | string;
  name: string;
  price: number;
  imageUrl: string;
  initialQuantity?: number;
  onQuantityChange?: (id: number | string, newQty: number) => void;
  onRemove?: (id: number | string) => void;
}
