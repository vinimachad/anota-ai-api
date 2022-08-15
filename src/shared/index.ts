import { container } from "tsyringe";
import { IChangeRepository, ChangeRepository } from "change";

container.registerSingleton<IChangeRepository>("ProductRepository", ChangeRepository)