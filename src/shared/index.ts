import { container } from "tsyringe";
import { IUserRepository, UserRepository } from "../modules/users/repositories/UserRepository";
import { IRefreshTokenRepository, RefreshTokenRepository } from "../modules/users/repositories/RefreshTokenRepository";
import { GeolocationRepository, IGeolocationRepository } from "../modules/Geolocation/repositories/GeolocationRepository";
import { IRestaurantRepository, RestaurantRepository } from "../modules/restaurant/repository/RestaurantRepository";

container.registerSingleton<IUserRepository>("UserRepository", UserRepository)
container.registerSingleton<IRefreshTokenRepository>("RefreshTokenRepository", RefreshTokenRepository)
container.registerSingleton<IGeolocationRepository>("GeolocationRepository", GeolocationRepository)
container.registerSingleton<IRestaurantRepository>("RestaurantRepository", RestaurantRepository)