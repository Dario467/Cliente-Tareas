"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const IUser_1 = require("./models/IUser");
const ApiResponse_1 = require("./utils/ApiResponse");
const product = {
    id: 1,
    name: "Laptop",
    price: "1200",
    stock: 5,
    create_at: new Date()
};
const user = {
    id: 1,
    name: "Juan",
    email: "juan@email.com",
    role: IUser_1.UserRole.Admin,
    isActive: true
};
const publicUser = {
    id: user.id,
    name: user.name,
    role: user.role,
    isActive: user.isActive
};
const updateUser = {
    name: "Juan Pérez",
    isActive: false
};
const productReview = {
    id: product.id,
    name: product.name,
    price: product.price
};
const productResponse = (0, ApiResponse_1.createApiResponse)(product);
const userResponse = (0, ApiResponse_1.createApiResponse)(user);
const productsResponse = (0, ApiResponse_1.createApiResponse)([product]);
const publicUserResponse = (0, ApiResponse_1.createApiResponse)(publicUser);
console.log(productResponse);
console.log(userResponse);
console.log(productsResponse);
console.log(publicUserResponse);
//# sourceMappingURL=index.js.map