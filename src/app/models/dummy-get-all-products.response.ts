export interface IProductsResponse {
  limit: number
  products: IProductItem[]
  skip: number
  total: number
}

export interface IProductItem {
  availabilityStatus: string
  brand: string
  category: string
  description: string
  dimensions: IProductItemDimensions
  discountPercentage: number
  id: number
  images: string[]
  meta: IProductItemMeta
  minimumOrderQuantity: number
  price: number
  rating: number
  returnPolicy: string
  reviews: IProductItemReviews
  shippingInformation: string
  sku: string
  stock: number
  tags: string[]
  thumbnail: string
  title: string
  warrantyInformation: string
  weight: number
}

export interface IProductItemDimensions {
  width: number
  height: number
  depth: number
}

export interface IProductItemMeta {
  createdAt: string
  updatedAt: string
  barcode: string
  qrCode: string
}

export interface IProductItemReviews {
  comment: string
  date: string
  rating: number
  reviewerEmail: string
  reviewerName: string
}
