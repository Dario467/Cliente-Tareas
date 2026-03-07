import type { IProduct } from "./models/IProduct";
import type { ProductReview} from "./models/IProduct";
import type { IUser } from "./models/IUser";
import { UserRole } from "./models/IUser";
import { ExtraerTipo } from "./services/ExtraerTipo";
import { createApiResponse } from "./utils/ApiResponse";
import { PublicUser } from "./models/IUser";
import { UserUpdate } from "./models/IUser";

const product: IProduct = {
  id: 1,
  name: "Laptop",
  price: "1200",
  stock: 5,
  create_at: new Date()
};

const user: IUser = {
  id: 1,
  name: "Juan",
  email: "juan@email.com",
  role: UserRole.Admin,
  isActive: true
};

const publicUser: PublicUser = {
  id: user.id,
  name: user.name,
  role: user.role,
  isActive: user.isActive
};

const updateUser: UserUpdate = {
  name: "Juan Pérez",
  isActive: false
};

const productReview: ProductReview = {
  id: product.id,
  name: product.name,
  price: product.price
};

type ProductoInterno = ExtraerTipo<IProduct[]>;
type Numero = ExtraerTipo<number>;

const productResponse = createApiResponse(product);
const userResponse = createApiResponse(user);
const productsResponse = createApiResponse<IProduct[]>([product]);
const publicUserResponse = createApiResponse(publicUser);

console.log(productResponse);
console.log(userResponse);
console.log(productsResponse);
console.log(publicUserResponse);