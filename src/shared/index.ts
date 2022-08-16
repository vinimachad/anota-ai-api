import { container } from "tsyringe";
import { IUserRepository, UserRepository } from "../modules/users/repositories/UserRepository";
import { IRefreshTokenRepository, RefreshTokenRepository } from "../modules/users/repositories/RefreshTokenRepository";
import { CoordinateRepository, ICoordinateRepository } from "../modules/Coordinates/repository/CoordinatesRepository";

container.registerSingleton<IUserRepository>("UserRepository", UserRepository)
container.registerSingleton<ICoordinateRepository>("CoordinateRepository", CoordinateRepository)
container.registerSingleton<IRefreshTokenRepository>("RefreshTokenRepository", RefreshTokenRepository)