export type ICartProps = {
    productId: number;
    productName: string;
    productPrice: number;
    productImage: string;
    quantity: number;
  }
  
  export type CartItems = ICartProps[];